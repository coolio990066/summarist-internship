import React from 'react'
import Navigation from './Navigation'

export default function SearchBar() {
  return (
    <div className="p-4 border-b-4 flex justify-end items-center gap-4">
      <div className="relative flex items-center bg-gray-100 rounded-lg border-4 border-gray-200 shadow-sm w-full max-w-xs">
        <input 
          type="text" 
          placeholder="Search for books"
          className="flex-1 min-w-0 text-sm text-gray-600 bg-transparent border-none outline-none px-4 py-3 placeholder:text-gray-400"
        />
        <div className="h-full border-l-4 border-gray-300 flex-shrink-0">
          <button type="submit" className="px-4 py-3 flex-shrink-0">
            <i className="fa-solid fa-magnifying-glass text-base text-gray-600"></i>
          </button>
        </div>
      </div>
      <Navigation />
    </div>
  )
}
