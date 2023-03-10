import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import userReducer from './slices/userSlice'


const persistConfig = {
  key: "hos-enterprise",
  storage,
  version: 1,
  // whitelist: [],
}
const rootReducer = combineReducers({
  user: userReducer,
});


export function makeStore() {
  return configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
}

export default  makeStore();