'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CartModal } from './CartModal'

export default function NavIcons() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const router = useRouter()
    const isLoggedIn = false

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push('/login')
        }
        setIsProfileOpen((prev) => !prev)
    }

    return (
        <div className='flex items-center gap-6 relative text-gray-700'>
            <div className='relative'>
                <Image
                    src={'/profile.png'}
                    alt='profile'
                    width={26}
                    height={26}
                    className='cursor-pointer hover:scale-110 transition-transform duration-300'
                    onClick={handleProfile}
                />
                {isProfileOpen && (
                    <div className='absolute p-4 rounded-md top-12 left-0 bg-white shadow-lg border border-gray-200 w-40 z-50'>
                        <Link href='/' className='block py-2 px-3 hover:bg-gray-100 rounded'>Profile</Link>
                        <div className='mt-2 cursor-pointer py-2 px-3 hover:bg-gray-100 rounded'>Log Out</div>
                    </div>
                )}
            </div>
            <Image
                src={'/notification.png'}
                alt='notification'
                width={26}
                height={26}
                className='cursor-pointer hover:scale-110 transition-transform duration-300'
            />
            <div className='cursor-pointer relative'>
                <Image
                    src={'/cart.png'}
                    alt='cart'
                    width={26}
                    height={26}
                    className='hover:scale-110 transition-transform duration-300'
                    onClick={() => setIsCartOpen((prev) => !prev)}
                />
                <div className='absolute -top-2 -right-2 w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs shadow-md'>2</div>
                {isCartOpen && (
                    <div className='absolute top-12 right-0'>
                        <CartModal />
                    </div>
                )}
            </div>
        </div>
    )
}
