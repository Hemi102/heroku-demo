import storage from 'redux-persist/lib/storage';
import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export default store;
