import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";

/**
 * Creates a Wix client for server-side operations
 * @returns {Promise<ReturnType<typeof createClient>>} Configured Wix client instance
 * @throws {Error} If client creation fails
 */
export const myWixClientServer = async () => {
  let refreshToken: string | undefined;

  try {
    const cookiesStore = cookies();
    const refreshTokenCookie = cookiesStore.get('refreshToken');
    
    if (refreshTokenCookie?.value) {
      refreshToken = JSON.parse(refreshTokenCookie.value);
    }
  } catch (error) {
    console.error('Failed to parse refresh token:', error);
  }

  if (!process.env.NEXT_PUBLIC_WIX_CLIENT_ID) {
    throw new Error('Missing required WIX_CLIENT_ID environment variable');
  }

  const myWixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
      tokens: {
        refreshToken: refreshToken ? { value: refreshToken } : undefined,
        accessToken: { value: '', expiresAt: 0 },
      },
    }),
  });

  return myWixClient;
};