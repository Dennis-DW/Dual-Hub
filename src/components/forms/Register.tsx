import React from 'react';
import Image from 'next/image';

interface Props {
  setMode: (mode: any) => void;
  MODE: any;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export default function RegisterForm({
  setMode,
  MODE,
  setEmail,
  setPassword,
  setUsername,
  handleSubmit,
  isLoading,
}: Props) {

  return (
    <div className="h-[calc(100vh-10px)] mb-10 bg-gradient-to-br from-[#ee7724] via-[#dd3675] to-[#b44593] dark:from-[#d8363a] dark:via-[#dd3675] dark:to-[#b44593]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg dark:bg-neutral-800">
          <a href="/" className="flex items-center justify-center mb-6 text-2xl font-semibold text-white">
            <Image src="/logo.png" alt="Logo" width={50} height={25} />
            <span className="ml-2 text-pink-700">Dual Hub Shop</span>
          </a>
          <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              Create an Account
            </h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Username Input */}
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  aria-label="Username"
                  className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="johndoe"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  aria-label="Email"
                  className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="name@company.com"             
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  aria-label="Password"
                  className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="••••••••"             
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
          
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-[#ee7724] via-[#dd3675] to-[#b44593] hover:from-[#d8363a] hover:via-[#dd3675] hover:to-[#b44593] focus:ring-4 focus:outline-none focus:ring-pink-200 font-semibold rounded-lg text-sm px-5 py-2.5 text-center shadow-lg transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create an Account'}
              </button>

              {/* Switch to Login */}
              <p className="text-sm font-light text-center text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <button
                  type="button"
                  className="font-medium text-[#dd3675] hover:underline"
                  onClick={() => setMode(MODE.LOGIN)}
                >
                  Login here
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


