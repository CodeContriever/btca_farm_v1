// index.js
import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './registration';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});

export default store;
