'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/16715938/pexels-photo-16715938/free-photo-of-a-young-lady-with-a-hat-on-her-head.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-400',
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-200 via-indigo-300 to-pink-400',
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: '/',
    bg: 'bg-gradient-to-r from-green-200 via-yellow-300 to-blue-400',
  },
];

export const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden bg-gray-50">
      {/* Slides */}
      <div
        className="w-max h-full flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex items-center justify-center relative`}
            key={slide.id}
          >
            {/* Text Content */}
            <div className="w-1/2 p-8 space-y-8 text-center xl:text-left z-10">
              <h2 className="text-xl lg:text-3xl font-semibold text-white drop-shadow-md animate-fade-in">
                {slide.description}
              </h2>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg animate-slide-up">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-yellow-300 hover:text-purple-800 transition-all duration-300 transform hover:scale-110 hover:rotate-2">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* Image Content */}
            <div className="relative w-1/2 h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover rounded-l-[50px] shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 rounded-l-[50px]"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === index ? 'bg-white scale-125 shadow-md' : 'bg-white/50 hover:scale-110'
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};