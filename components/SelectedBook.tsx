'use client'

import { useGetSelectedBooksQuery } from '../types/bookapi'

export default function SelectedBook() {
  const { data : selectedBooks, error, isLoading } = useGetSelectedBooksQuery()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }

  if (!selectedBooks || selectedBooks.length === 0) {
    return null
  }

  const book = selectedBooks[0]

  return (
    <div className="max-w-4xl mx-auto px-6 py-4 mt-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Selected just for you</h2>
      
      <div className="bg-[#fbefd6] rounded-lg p-8 flex items-center gap-8">
        {/* Left side - Book subtitle */}
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed">
            {book.subTitle || book.title}
          </p>
        </div>
        
        {/* Center - Book cover */}
        <div className="flex-shrink-0 border-l border-gray-300 pl-6 ">
          <img 
            src={book.imageLink} 
            alt={book.title}
            className="w-48 h-48 rounded overflow-hidden"
          />
        </div>
        
        {/* Right side - Book details */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
          <p className="text-gray-600 mb-4">{book.author}</p>
          
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <i className="fa-solid fa-play"></i>
            </div>
            <span className="text-sm font-medium">{book.audioLink ? `3 mins 23 secs` : 'Read now'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}



