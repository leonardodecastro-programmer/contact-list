import { configureStore } from '@reduxjs/toolkit'

import contactReducer from './reducers/contact'

const store = configureStore({
  reducer: {
    contacts: contactReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
