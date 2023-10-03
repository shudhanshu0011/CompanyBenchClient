import { configureStore } from '@reduxjs/toolkit'
import refDataReducer from './reducer/refDataReducer'

export const store = configureStore({
  reducer: {
    appData: refDataReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch