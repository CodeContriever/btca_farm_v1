// registration.js (Reducer file)

// Initial state
const initialState = {
  registrationData: null, // Initial state for registrationData
  // Other initial state properties...
};

// Action types
const SET_REGISTRATION_DATA = 'SET_REGISTRATION_DATA';

// Action creators
export const setRegistrationData = (data) => ({
  type: SET_REGISTRATION_DATA,
  payload: data,
});

// Reducer function
const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTRATION_DATA:
      return {
        ...state,
        registrationData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectRegistrationData = (state) => state.registration.registrationData; // Corrected selector

// Export the reducer and selector
export default registrationReducer;
