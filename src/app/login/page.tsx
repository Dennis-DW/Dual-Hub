'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { MODE } from '../../lib/constants';
import { useAuth } from '../../hooks/useAuth';
import FormRenderer from '../../components/forms/FormRenderer';

export default function Login() {
  const [mode, setMode] = useState(MODE.LOGIN);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [emailCode, setEmailCode] = useState('');

  const router = useRouter();
  const { handleSubmit } = useAuth({
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
  });

  // Automatically clear error and message after 5 seconds
  useEffect(() => {
    if (error || message) {
      const timer = setTimeout(() => {
        setError('');
        setMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, message]);

  const formTitle = {
    [MODE.LOGIN]: 'Login',
    [MODE.REGISTER]: 'Register',
    [MODE.RESET_PASSWORD]: 'Reset Your Password',
    [MODE.EMAIL_VERIFICATION]: 'Verify Your Email',
  }[mode];

  return (
    <div className="h-[calc(120vh-50px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold mt-9 flex justify-center text-red-100">
          {formTitle}
        </h1>

        {error && (
          <p
            className="text-center text-sm text-red-500"
            aria-live="assertive"
          >
            {error}
          </p>
        )}
        {message && (
          <p
            className="text-center text-sm text-green-500"
            aria-live="polite"
          >
            {message}
          </p>
        )}

        <FormRenderer
          mode={mode}
          setMode={setMode}
          setEmail={setEmail}
          setPassword={setPassword}
          setUsername={setUsername}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          email={email}
        />
      </div>
    </div>
  );
}