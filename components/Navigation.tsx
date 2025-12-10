"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { handleLogout } from '../utils/auth'

const Navigation: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    const handleLogoutClick = async () => {
        setIsMobileMenuOpen(false)
        await handleLogout(router)
    }

    const navItems = [
        { name: 'For you', href: '/for-you', icon: 'fa-regular fa-house' },
        { name: 'My Library', href: '/library', icon: 'fa-regular fa-bookmark' },
        { name: 'Highlights', href: '/highlights', icon: 'fa-solid fa-pencil', disabled: true },
        { name: 'Search', href: '/search', icon: 'fa-solid fa-magnifying-glass', disabled: true },
    ]

    const bottomNavItems = [
        { name: 'Settings', href: '/settings', icon: 'fa-solid fa-gear' },
        { name: 'Help & Support', href: '/help', icon: 'fa-regular fa-circle-question', disabled: true },
        { name: 'Login', href: '/login', icon: 'fa-solid fa-arrow-right-to-bracket' },
    ]

    return (
        <>
            {/* Hamburger Button */}
            <button
                className='md:hidden text-gray-600 hover:text-gray-800 p-2 rounded-md focus:outline-none'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label='Toggle Mobile Menu'
            >
                {isMobileMenuOpen ? (
                    <i className="fa-solid fa-xmark text-2xl"></i>
                ) : (
                    <i className="fa-solid fa-bars text-2xl"></i>
                )}
            </button>

            {/* Mobile Sidebar Menu */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    
                    {/* Sliding Sidebar */}
                    <div className='fixed top-0 left-0 w-64 h-screen bg-gray-50 z-50 flex flex-col shadow-lg md:hidden transform transition-transform duration-300'>
                        <div className='p-6 flex justify-between items-center border-b border-gray-200'>
                            <img className='w-32' src="/assets/logo.png" alt="Summarist Logo" />
                            <button onClick={() => setIsMobileMenuOpen(false)}>
                                <i className="fa-solid fa-xmark text-xl text-gray-600"></i>
                            </button>
                        </div>
                        
                        {/* Main Navigation */}
                        <nav className='flex-1 px-4 space-y-1 mt-6'>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                                    onClick={() => !item.disabled && setIsMobileMenuOpen(false)}
                                >
                                    <span className='text-xl'><i className={item.icon}></i></span>
                                    <span className='font-medium'>{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                        
                        {/* Bottom Navigation */}
                        <div className='px-4 pb-6 space-y-1 border-t border-gray-200 pt-4'>
                            {bottomNavItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                                    onClick={() => !item.disabled && setIsMobileMenuOpen(false)}
                                >
                                    <span className='text-xl'><i className={item.icon}></i></span>
                                    <span className='font-medium'>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                        <div className='px-4 pb-6 border-t border-gray-200 pt-4'>
                            <button
                                onClick={handleLogoutClick}
                                className='w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'
                            >
                                <span className='text-xl'><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                                <span className='font-medium'>Logout</span>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Navigation