'use client'

import React from 'react';
import Image from 'next/image';

interface Props {
  setMode: (mode: any) => void;
  MODE: any;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export default function LoginForm({
  setMode,
  MODE,
  setEmail,
  setPassword,
  handleSubmit,
  isLoading,
}: Props) {

  return (
    <div className="h-full mb-10 mt-10 bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <Image src="/logo.png" alt="Logo" width={100} height={50} />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please Login to your account</p>

                      {/* Email input */}
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        aria-label="Email"
                        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />

                      {/* Password input */}
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        aria-label="Password"
                        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />

                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          type="submit"
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out"
                          style={{
                            background:
                              'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                          }}
                        >
                          Login
                        </button>
                        <a
                          onClick={() => setMode(MODE.RESET_PASSWORD)}
                          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
                        >
                          Forgot Password?
                        </a>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          onClick={() => setMode(MODE.REGISTER)}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


