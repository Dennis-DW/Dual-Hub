import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-t from-gray-200 to-gray-100 text-gray-800 text-sm mt-16 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between gap-12 max-w-7xl mx-auto">
        {/* Contact Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 hover:animate-pulse">
              Dual Hub
            </div>
          </Link>
          <p className="text-gray-600">Nairobi, Kenya, Westlands Sarit Center, Cell 100, 5th Floor</p>
          <span className="font-semibold text-gray-700">hello@dualhub.com</span>
          <span className="font-semibold text-gray-700">+254 733 400 100</span>
          <div className="flex gap-6">
            {['youtube', 'x', 'pinterest', 'facebook'].map((platform) => (
              <a href={`https://${platform}.com`} key={platform} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`/${platform}.png`}
                  alt={platform}
                  width={20}
                  height={20}
                  className="hover:scale-125 transition-transform duration-300 filter brightness-75 hover:brightness-100"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Company Section */}
        <div className="hidden lg:flex justify-between w-1/2 gap-12">
          {[
            { title: 'Our Company', links: ['About Us', 'Careers', 'Affiliates', 'Blog', 'Contact Us'] },
            { title: 'Shop', links: ['Dresses', 'Tops', 'Skirts', 'Pants', 'Accessories'], paths: ['/women/dresses', '/women/tops', '/women/skirts', '/women/pants', '/women/accessories'] },
            { title: 'Help', links: ['FAQs', 'Shipping', 'Returns', 'Order Tracking', 'Support'] },
          ].map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg text-gray-800">{section.title}</h1>
              <div className="flex flex-col gap-3">
                {section.links.map((link, i) => (
                  <Link
                    key={i}
                    href={section.paths ? section.paths[i] : '/'}
                    className="text-gray-600 hover:text-pink-500 transition-colors duration-200 hover:translate-x-1"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-semibold text-lg text-gray-800">Subscribe</h1>
          <p className="text-gray-600">Stay updated with our latest news and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="p-4 w-3/4 bg-white text-gray-800 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-400"
            />
            <button className="w-1/4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-r-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Join
            </button>
          </div>
          <span className="font-semibold text-gray-700">Secure Payments</span>
          <div className="flex justify-between gap-2">
            {['discover', 'skrill', 'paypal', 'mastercard', 'visa'].map((method) => (
              <Image
                key={method}
                src={`/${method}.png`}
                alt={method}
                width={40}
                height={20}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 text-center text-gray-600 max-w-7xl mx-auto">
        <div className="text-sm font-medium">
          © {new Date().getFullYear()} Dual Hub. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Language:</span>
          <span className="text-sm font-medium bg-gray-300 px-3 py-1 rounded-full hover:bg-gray-400 transition-colors duration-200">
            Kenya | English
          </span>
        </div>
      </div>
    </footer>
  );
};