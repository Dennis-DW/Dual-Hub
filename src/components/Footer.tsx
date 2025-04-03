import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-100 text-sm mt-12">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Contact Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-lg font-bold tracking-wide">Dual Hub</div>
          </Link>
          <p>Nairobi, Kenya, Westlands Sarit Center, Cell 100, 5th Floor</p>
          <span className="font-semibold">hello@dualhub.com</span>
          <span className="font-semibold">+254 733 400 100</span>
          <div className="flex gap-6">
            <Image src="/youtube.png" alt="YouTube" width={16} height={16} />
            <Image src="/x.png" alt="X" width={16} height={16} />
            <Image src="/pinterest.png" alt="Pinterest" width={16} height={16} />
            <Image src="/facebook.png" alt="Facebook" width={16} height={16} />
          </div>
        </div>

        {/* Company Section */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-lg">Our Company</h1>
            <div className="flex flex-col gap-2">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-lg">Shop</h1>
            <div className="flex flex-col gap-2">
              <Link href="/women/dresses">Dresses</Link>
              <Link href="/women/tops">Tops</Link>
              <Link href="/women/skirts">Skirts</Link>
              <Link href="/women/pants">Pants</Link>
              <Link href="/women/accessories">Accessories</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-lg">Help</h1>
            <div className="flex flex-col gap-2">
              <Link href="/">FAQs</Link>
              <Link href="/">Shipping</Link>
              <Link href="/">Returns</Link>
              <Link href="/">Order Tracking</Link>
              <Link href="/">Support</Link>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Subscribe</h1>
          <p>Stay updated with our latest news and offers.</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button className="w-1/4 bg-red-400 text-yellow-50 rounded-r-lg hover:bg-red-500 transition-all">
              Join
            </button>
          </div>
          <span className="font-semibold">Secure payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="Discover" width={40} height={20} />
            <Image src="/skrill.png" alt="Skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="PayPal" width={40} height={20} />
            <Image src="/mastercard.png" alt="MasterCard" width={40} height={20} />
            <Image src="/visa.png" alt="Visa" width={40} height={20} />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 text-center text-gray-600">
        {/* Copyright Section */}
        <div className="text-sm font-medium">
          © {new Date().getFullYear()} Dual Hub. All rights reserved.
        </div>

        {/* Language Section */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Language:</span>
          <span className="text-sm font-medium bg-gray-300 px-3 py-1 rounded-md">
            Kenya | English
          </span>
        </div>
      </div>
    </div>
  );
};