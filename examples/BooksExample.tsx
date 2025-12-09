'use client'

import { useState, useEffect } from 'react'
import { Book } from '../types/book'

export default function BooksExample() {
  // TypeScript knows books is an array of Book objects
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Fetch books from API
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://summaristt.herokuapp.com/books')
        const data = await response.json()
        
        // TypeScript will check that data matches Book[] structure
        setBooks(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching books:', error)
        setLoading(false)
      }
    }
    
    fetchBooks()
  }, [])

  if (loading) {
    return <div>Loading books...</div>
  }

  return (
    <div className="books-container">
      <h1>Book Library</h1>
      
      {books.map((book) => (
        // TypeScript gives you autocomplete for book properties!
        <div key={book.id} className="book-card">
          <img src={book.imageLink} alt={book.title} />
          <h3>{book.title}</h3>
          <p>by {book.author}</p>
          
          {/* TypeScript knows subTitle might be undefined */}
          {book.subTitle && <p className="subtitle">{book.subTitle}</p>}
          
          <div className="book-stats">
            <span>⭐ {book.averageRating}</span>
            <span>💡 {book.keyIdeas} Key Ideas</span>
          </div>
          
          {/* TypeScript ensures type is only 'fiction' or 'non-fiction' */}
          <span className="book-type">{book.type}</span>
          
          {book.subscriptionRequired && (
            <span className="premium-badge">Premium</span>
          )}
        </div>
      ))}
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
