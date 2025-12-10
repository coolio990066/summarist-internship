'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { handleLogout } from '../utils/auth'

export default function Sidebar() {
  const router = useRouter()
  return (
    <div className='hidden md:flex'>
    <div className='fixed top-0 left-0 w-52 h-screen bg-gray-50 border-r border-gray-200 flex flex-col z-10 '>
      {/* Logo */}
      <div className='p-6'>
        <img className='w-40' src="/assets/logo.png" alt="Summarist Logo" />
      </div>
      
      {/* Main Navigation */}
      <nav className='flex-1 px-4 space-y-2 mt-6'>
        <a href='/for-you' className='flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
          <span className='text-xl'><i className="fa-regular fa-house"></i></span>
          <span className='font-medium'>For you</span>
        </a>
        <a href='/library' className='flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
          <span className='text-xl'><i className="fa-regular fa-bookmark"></i></span>
          <span className='font-medium'>My Library</span>
        </a>
        <a href='/highlights' className='cursor-not-allowed flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
          <span className='text-xl'><i className="fa-solid fa-pencil"></i></span>
          <span className='font-medium'>Highlights</span>
        </a>
        <a href='/search' className='cursor-not-allowed flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
          <span className='text-xl'><i className="fa-solid fa-magnifying-glass"></i></span>
          <span className='font-medium'>Search</span>
        </a>
      </nav>
      
      {/* Bottom Navigation */}
      <div className='px-4 pb-6 space-y-1 pt-4'>
        <a href='/settings' className='flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
          <span className='text-xl'><i className="fa-solid fa-gear"></i></span>
          <span className='font-medium'>Settings</span>
        </a>
        <a href='/help' className='cursor-not-allowed flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
          <span className='text-xl'><i className="fa-regular fa-circle-question"></i></span>
          <span className='font-medium'>Help & Support</span>
        </a>
        <button onClick={() => handleLogout(router)} className='w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
          <span className='text-xl'><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
          <span className='font-medium'>Logout</span>
        </button>
      </div>
    </div>
    </div>
  )
}
