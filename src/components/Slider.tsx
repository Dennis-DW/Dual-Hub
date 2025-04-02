'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const slides = [
    {
        id: 1,
        title: "Summer Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/16715938/pexels-photo-16715938/free-photo-of-a-young-lady-with-a-hat-on-her-head.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Winter Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/15759383/pexels-photo-15759383/free-photo-of-portrait-of-woman-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Spring Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

export const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 10000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="relative h-[calc(100vh-80px)] overflow-hidden">
            {/* Slides */}
            <div
                className="w-max h-full flex transition-transform ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div
                        className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                        key={slide.id}
                    >
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col justify-center items-center gap-8 px-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl text-gray-700">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold text-gray-900">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300">
                                    Shop With Us
                                </button>
                            </Link>
                        </div>
                      <div className="relative h-64 sm:h-full w-full xl:w-1/2">
                            <Image
                                src={slide.img}
                                alt={slide.title}
                                fill
                                sizes="100%"
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex gap-4">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${current === index ? 'bg-black scale-125' : 'bg-gray-400'
                            }`}
                        onClick={() => setCurrent(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};