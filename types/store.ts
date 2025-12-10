import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { bookApi } from './bookapi'

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    // Add other application-specific reducers here if you have them
  },
  // CRITICAL: Add the middleware required for RTK Query to fetch data,
  // manage caching, polling, and side effects.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
})

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch