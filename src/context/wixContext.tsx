'use client'

import LoadingSpinner from "@/components/LoadingSpinner";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from '@wix/stores';
import Cookies from "js-cookie";
import React, { createContext, ReactNode, useEffect, useState } from "react";

const getRefreshToken = () => {
  try {
    return JSON.parse(Cookies.get('refreshToken') || 'null');
  } catch {
    return null;
  }
};

const myWixClient = createClient({
  modules: {
    products,
    collections,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!, 
    tokens: {
      refreshToken: getRefreshToken(),
      accessToken: { value: '', expiresAt: 0 },
    },
  }),
});

// Add error handling for token validation
const validateClient = async () => {
  try {
    await myWixClient.auth.getTokens();
    console.log("Authentication successful");
  } catch (error) {
    console.error("Authentication failed:", error);
    // Clear invalid tokens
    Cookies.remove('refreshToken');
  }
};

export type WixClient = typeof myWixClient;
export const myWixClientContext = createContext<WixClient>(myWixClient);

export const MyWixClientContextProvider = ({ children }: { children: ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    validateClient().then(() => setIsReady(true));
  }, []);

  if (!isReady) {
    return <div><LoadingSpinner/></div>;
  }

  return (
    <myWixClientContext.Provider value={myWixClient}>
      {children}
    </myWixClientContext.Provider>
  );
};





