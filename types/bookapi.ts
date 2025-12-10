// Define the shape of a book object


import { fetchBaseQuery, createApi  } from "@reduxjs/toolkit/query/react";
import { Book } from "./booktype";





export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
     // Endpoint 1: Fetches selected books
    getSelectedBooks: builder.query<Book[], void>({
      // The query function defines the specific URL relative to the base URL (if any)
      query: () => 'https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected',
    }),

    // Endpoint 2: Fetches recommended books
    getRecommendedBooks: builder.query<Book[], void>({
      // The query function defines the specific URL
      query: () => 'https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetSelectedBooksQuery, 
    useGetRecommendedBooksQuery 
} = bookApi;