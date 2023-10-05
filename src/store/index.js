// store.js (Redux store setup)

import { createStore, combineReducers } from 'redux';
import registrationReducer from './registration'; // Adjust the import path for your registration reducer
// Import other reducers if you have them

// Combine reducers
const rootReducer = combineReducers({
  registration: registrationReducer, // Use the correct key ('registration') for your reducer
  // Add other reducers here if needed
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
