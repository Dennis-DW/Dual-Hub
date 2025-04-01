'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const MobileMenu = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className=''>
            <Image src={'/menu.png'} alt='Menu' width={28} height={28} className='cursor-pointer' onClick={() => setOpen((prev) => !prev)} />
            {
                open && (
                    <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 z-10'>
                        <Link href={'/'}>
                            Homepage
                        </Link>
                        <Link href={'/'}>
                            Shop
                        </Link> 
                        <Link href={'/'}>
                            About
                        </Link>
                        <Link href={'/'}>
                            Contact  
                        </Link>
                        <Link href={'/'}>
                            Logout
                        </Link>
                        <Link href={'/'}>
                            Cart{1}
                        </Link>
                    </div>
                )
            }

        </div>
    )
}
