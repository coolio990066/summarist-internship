"use client"

import { useGetRecommendedBooksQuery } from '../types/bookapi';


export default function RecommendedBooks() {

    const { data: recommendedBooks, error, isLoading } = useGetRecommendedBooksQuery();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="animate-pulse">Loading...</div>
            </div>
        );
    }


  return (
    
    <div className='ml-0 md:ml-52 lg:ml-64 px-6 py-8'>
      <div className='max-w-[1280px]'>
        <h2 className='font-bold text-2xl mb-2'>Recommended for you</h2>
        <p className='text-gray-600 mb-6'>We think you'll like these</p>
        
        <div className='overflow-x-auto scrollbar-hide -mx-6 px-6'>
          <div className='flex gap-16 pb-4'>
            {recommendedBooks && recommendedBooks.slice(0, 5).map((book) => (
              <div key={book.id} className="w-[200px] flex-shrink-0 cursor-pointer hover:scale-105 transition-transform">
                <div className='mb-3 rounded overflow-hidden shadow-md'>
                  <img 
                    src={book.imageLink} 
                    alt={book.title} 
                    className='w-full h-[300px] object-cover'
                  />
                </div>
                <h3 className='font-bold text-base mb-1 line-clamp-2'>{book.title}</h3>
                <p className='text-gray-600 text-sm mb-1'>{book.author}</p>
                <p className='text-gray-500 text-sm line-clamp-2'>{book.subTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}
