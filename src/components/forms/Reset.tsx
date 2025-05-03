'use client';

import React from 'react';

enum MODE {
  LOGIN = 'LOGIN',
  RESET = 'RESET',
}

interface ResetProps {
  setMode: React.Dispatch<React.SetStateAction<MODE>>;
  MODE: typeof MODE;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string; 
}

const Reset: React.FC<ResetProps> = ({
  setMode,
  MODE,
  handleSubmit,
  isLoading,
  setEmail,
  email, 
}) => {
  return (
    <div className="h-full mb-10 bg-gradient-to-br from-[#ee7724] via-[#dd3675] to-[#b44593] dark:from-[#d8363a] dark:via-[#dd3675] dark:to-[#b44593] flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 dark:bg-neutral-800">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="email-helper-text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-[#dd3675] focus:border-[#dd3675] block w-full p-2.5 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                       dark:focus:ring-[#dd3675] dark:focus:border-[#dd3675]"
            placeholder="name@dualhub.com"
            required
          />
          <p
            id="email-helper-text"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            We’ll never share your details. Read our{' '}
            <a
              href="#"
              className="font-medium text-[#dd3675] hover:underline dark:text-[#dd3675]"
            >
              Privacy Policy
            </a>
            .
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full text-white bg-gradient-to-r from-[#ee7724] via-[#dd3675] to-[#b44593] 
                       hover:from-[#d8363a] hover:via-[#dd3675] hover:to-[#b44593] 
                       focus:ring-4 focus:outline-none focus:ring-pink-200 font-semibold rounded-lg 
                       text-sm px-5 py-2.5 text-center shadow-lg transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {/* Go Back to Login Link */}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
          <button
            type="button"
            onClick={() => setMode(MODE.LOGIN)}
            className="font-medium text-[#dd3675] hover:underline"
          >
            Go back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Reset;