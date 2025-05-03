import { useWixClient } from '@/hooks/useWixClient';
import { LoginState } from '@wix/sdk';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const useAuth = ({
  mode,
  setMode,
  setIsLoading,
  setError,
  setMessage,
  email,
  password,
  username,
  emailCode,
  router,
}: any) => {
  const wixClient = useWixClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const normalizedEmail = email.trim().toLowerCase();
    const redirectUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.href;

    if (!normalizedEmail || (mode !== 'RESET_PASSWORD' && !password)) {
      toast.error('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    try {
      let response;

      switch (mode) {
        case 'LOGIN':
          response = await wixClient.auth.login({ email: normalizedEmail, password });
          console.log('Login response:', response);
          break;

        case 'REGISTER':
          if (!username.trim()) {
            toast.error('Please provide a username.');
            setIsLoading(false);
            return;
          }
          response = await wixClient.auth.register({
            email: normalizedEmail,
            password,
            profile: { nickname: username },
          });
          console.log('Register response:', response);
          if (response) {
            toast.success('Registration successful! Please log in.');
            setMode('LOGIN');
          }
          return;

        case 'RESET_PASSWORD':
          response = await wixClient.auth.sendPasswordResetEmail(normalizedEmail, redirectUrl);
          console.log('Password reset response:', response);
          toast.success('Password reset email sent. Please check your inbox.');
          break;

        case 'EMAIL_VERIFICATION':
          response = await wixClient.auth.processVerification({ verificationCode: emailCode });
          console.log('Email verification response:', response);
          break;

        default:
          break;
      }

      if (response) {
        console.log('Login state:', response.loginState);
        switch (response.loginState) {
          case LoginState.SUCCESS:
            toast.success('Login successful. Redirecting...');
            const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
              response.data.sessionToken!
            );
            console.log('Tokens:', tokens);
            Cookies.set('refreshToken', JSON.stringify(tokens.refreshToken), { expires: 2 });
            wixClient.auth.setTokens(tokens);
            router.push('/'); 
            break;

          case LoginState.FAILURE:
            toast.error('Login failed. Please try again.');
            break;

          case LoginState.EMAIL_VERIFICATION_REQUIRED:
            setMode('EMAIL_VERIFICATION');
            break;

          default:
            toast.error('Unexpected login state.');
        }
      }
    } catch (err: any) {
      console.error('Authentication error:', err?.response?.data || err.message);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      // Show confirmation dialog
      const confirmLogout = window.confirm('Are you sure you want to log out?');
      if (!confirmLogout) {
        return; // Exit if the user cancels the logout
      }

      if (setIsLoading) setIsLoading(true); // Check if setIsLoading is defined
      const originalUrl = window.location.href; // Use the current URL as the originalUrl
      await wixClient.auth.logout(originalUrl); // Call Wix logout API with originalUrl
      console.log('User logged out successfully.');
  
      // Manually clear tokens
      Cookies.remove('refreshToken'); // Remove refresh token from cookies
      Cookies.remove('accessToken'); // Remove access token if stored
      console.log('Tokens cleared manually.');
  
      toast.success('Logged out successfully.');
      window.location.reload(); // Refresh the page after logout
    } catch (err: any) {
      console.error('Logout error:', err?.response?.data || err.message);
      toast.error('An error occurred while logging out. Please try again.');
    } finally {
      if (setIsLoading) setIsLoading(false); // Check if setIsLoading is defined
    }
  };

  const isLoggedIn = () => {
    const refreshToken = Cookies.get('refreshToken');
    console.log('Is user logged in:', !!refreshToken);
    return !!refreshToken;
  };

  return { handleSubmit, logout, isLoggedIn };
};