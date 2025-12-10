'use client'

import { useState, useEffect } from 'react'
import { Book } from '../types/book'

export default function SelectedBook() {
  const [book, setBook] = useState<Book | null>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
        const data = await response.json()
        
        // Get the first selected book
        if (data && data.length > 0) {
          setBook(data[0])
        }
        setLoading(false)
      } catch (error) {
        console.error('Error fetching books:', error)
        setLoading(false)
      }
    }
    
    fetchBooks()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }

  if (!book) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Selected just for you</h2>
      
      <div className="bg-[#fbefd6] rounded-lg p-8 flex items-center gap-8">
        {/* Left side - Book subtitle */}
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed">
            {book.subTitle || book.title}
          </p>
        </div>
        
        {/* Center - Book cover */}
        <div className="flex-shrink-0 border-l border-gray-300 pl-6">
          <img 
            src={book.imageLink} 
            alt={book.title}
            className="w-32 h-48 object-cover shadow-lg rounded"
          />
        </div>
        
        {/* Right side - Book details */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
          <p className="text-gray-600 mb-4">{book.author}</p>
          
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
            <span className="text-sm font-medium">{book.audioLink ? `3 mins 23 secs` : 'Read now'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Example function with TypeScript
function calculateAverageRating(books: Book[]): number {
  if (books.length === 0) return 0
  
  const total = books.reduce((sum, book) => sum + book.averageRating, 0)
  return total / books.length
}

// Filter books by type
function getBooksByType(books: Book[], type: 'fiction' | 'non-fiction'): Book[] {
  return books.filter(book => book.type === type)
}

// TypeScript will throw error if you try to pass wrong type
// getBooksByType(books, 'mystery') // ❌ Error! Only 'fiction' or 'non-fiction' allowed
