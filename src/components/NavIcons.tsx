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
        <div className='flex items-center gap-4 xl:gap-6 relative'>
            <Image src={'/profile.png'} alt='profile' width={22} height={22} className='cursor-pointer' onClick={handleProfile} />
            {isProfileOpen && (
                <div className='absolute p-4 rounded-md top-12 left-0 bg-white shadow-md'>
                    <Link href='/'>
                        Profile
                    </Link>
                    <div className='mt-2 cursor-pointer'>LogOut</div>
                </div>
            )}
            <Image src={'/notification.png'} alt='notification' width={22} height={22} className='cursor-pointer' />
            <div className='cursor-pointer relative'>
                <Image src={'/cart.png'} alt='cart' width={22} height={22} onClick={() => setIsCartOpen((prev) => !prev)} />
                <div className='absolute -top-4 -right-4 w-5 h-5 bg-orange-600 rounded-xl flex items-center justify-center text-white text-xs'>2</div>
                {isCartOpen && (
                    <div className='absolute top-12 right-0'>
                        <CartModal />
                    </div>
                )}
            </div>
        </div>
    )
}