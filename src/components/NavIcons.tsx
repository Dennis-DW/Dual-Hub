'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CartModal } from './CartModal'
import { useAuth } from '@/hooks/useAuth'

interface NavIconsProps {
    cartItemCount: number;
}

export default function NavIcons({ cartItemCount }: NavIconsProps) {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const router = useRouter()

    const { logout, isLoggedIn: checkIsLoggedIn } = useAuth({ router })

    useEffect(() => {
        setIsLoggedIn(checkIsLoggedIn()) // Dynamically check login state
    }, [checkIsLoggedIn])

    const toggleState = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setter((prev) => !prev)
    }

    const handleProfileClick = () => {
        if (!isLoggedIn) {
            router.push('/login')
        } else {
            toggleState(setIsProfileOpen)
        }
    }

    const handleLogout = async () => {
        await logout()
        setIsLoggedIn(false) // Update state after logout
    }

    return (
        <div className='flex items-center gap-6 relative text-gray-700'>
            {/* Profile Icon */}
            <div className='relative'>
                <Image
                    src={'/profile.png'}
                    alt='Profile'
                    width={26}
                    height={26}
                    className='cursor-pointer hover:scale-110 transition-transform duration-300'
                    onClick={handleProfileClick}
                    aria-label='Profile'
                />
                {isProfileOpen && (
                    <div className='absolute p-4 rounded-md top-12 left-0 bg-white shadow-lg border border-gray-200 w-40 z-50'>
                        <Link
                            href={isLoggedIn ? '/' : '/login'}
                            className='block py-2 px-3 hover:bg-gray-100 rounded'
                        >
                            {isLoggedIn ? 'Profile' : 'Login'}
                        </Link>
                        {isLoggedIn && (
                            <div
                                className='mt-2 cursor-pointer py-2 px-3 hover:bg-gray-100 rounded'
                                onClick={handleLogout}
                            >
                                Log Out
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Notification Icon */}
            <Image
                src={'/notification.png'}
                alt='Notifications'
                width={26}
                height={26}
                className='cursor-pointer hover:scale-110 transition-transform duration-300'
                aria-label='Notifications'
            />

            {/* Cart Icon */}
            <div className='cursor-pointer relative'>
                <Image
                    src={'/cart.png'}
                    alt='Cart'
                    width={26}
                    height={26}
                    className='hover:scale-110 transition-transform duration-300'
                    onClick={() => toggleState(setIsCartOpen)}
                    aria-label='Cart'
                />
                {cartItemCount > 0 && (
                    <div className='absolute -top-2 -right-2 w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs shadow-md'>
                        {cartItemCount}
                    </div>
                )}
                {isCartOpen && (
                    <div className='absolute top-12 right-0'>
                        <CartModal />
                    </div>
                )}
            </div>
        </div>
    )
}