import axios from 'axios';
import jwt_decode from 'jwt-decode';

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;


/** Make API Requests */


/** To get username from Token */
export async function getUsername() {
  try {
    // Step 1: Get the JWT token from the local storage
    const token = localStorage.getItem('token');

    // Step 2: Check if the token exists
    if (!token) {
      // Step 3: If the token doesn't exist, throw an error with a custom message
      throw new Error('Cannot find Token');
    }

    // Step 4: Decode the JWT token to get the user data
    const decode = jwt_decode(token);

    // Step 5: Return the decoded user data (username and other information)
    return decode;
  } catch (error) {
    // Step 6: If there is an error (token not found or decoding error), reject the promise
    // with the error message for the calling function to handle
    return Promise.reject(error.message);
  }
}

/** authenticate function */
export async function authenticate(username) {
  try {
    // Step 1: Send a POST request to the '/api/authenticate' endpoint with the provided username
    const response = await axios.post('/api/authenticate', { username });

    // Step 2: If the request is successful, return the response data (likely containing authentication information)
    return response;
  } catch (error) {
    // Step 3: If there is an error (e.g., username doesn't exist or server error), handle the error

    // Step 4: Extract the error message from the response, if available, using optional chaining (?.)
    const errorMessage = error.response?.data?.error || "Username doesn't exist...!";

    // Step 5: Return a rejected promise with an object containing the error message
    // The calling function can use this promise rejection to handle the error appropriately
    return Promise.reject({ error: errorMessage });
  }
}


/** register user function */
export async function registerUser(credentials) {
  try {
    // Step 1: Send a POST request to create a user account using the provided credentials
    const { data: { msg }, status } = await axios.post(
      'https://btca.afribook.world/account/createUserAccount',
      credentials
    );

    // Step 2: Destructure the credentials object to extract specific properties
    let { fullName, phoneNumber, email, username, password, referredBy } = credentials;

    // Step 3: Save the user credentials to the database by sending a POST request to the appropriate endpoint on the server-side
    await axios.post('https://your-server/api/saveUserCredentials', {
      fullName,
      phoneNumber,
      email,
      username,
      password,
      referredBy,
    });

    /** send email */
    // Step 4: If the user account creation was successful (status 201), send an email notification
    if (status === 201) {
      await axios.post('https://btca.afribook.world/api/registerMail', {
        username,
        userEmail: email,
        text: msg,
      });
    }

    // Step 5: Return the success message from the API response
    return msg;
  } catch (error) {
    // Step 6: Handle the error or return a custom error message
    console.error('AxiosError:', error.message);

    // Step 7: Rethrow the error to be caught in the onSubmit function
    throw error;
  }
}
  

  /** get User details */
  export async function getUser({ username }) {
    try {
      // Step 1: Send a GET request to fetch user data for the given username
      const response = await axios.get(`/api/user/${username}`);
  
      // Step 2: Return the user data from the response
      return response.data;
    } catch (error) {
      // Step 3: If there is an error (e.g., user data not found or server error), handle the error
  
      // Step 4: Extract the error message from the response, if available, using optional chaining (?.)
      const errorMessage = error.response?.data?.error || 'Error fetching user data';
  
      // Step 5: Return a rejected promise with an object containing the error message
      // The calling function can use this promise rejection to handle the error appropriately
      return Promise.reject({ error: errorMessage });
    }
  }


/** login function */
export async function verifyPassword({ username, password }) {
  try {
    // Step 1: Check if the username is provided
    if (username) {
      // Step 2: If the username is provided, send a POST request to verify the password
      const response = await axios.post('https://btca.afribook.world/account/loginWithPasswordAndEmail', { username, password });

      // Step 3: Return the data from the response (likely containing verification information)
      return response.data;
    } else {
      // Step 4: If the username is not provided, throw an error with a custom message
      throw new Error('Username is required');
    }
  } catch (error) {
    // Step 5: If there is an error during the request (e.g., username not provided or server error), handle the error

    // Step 6: Extract the error message from the response, if available, using optional chaining (?.)
    const errorMessage = error.response?.data?.error || 'Password verification failed';

    // Step 7: Return a rejected promise with an object containing the error message
    // The calling function can use this promise rejection to handle the error appropriately
    return Promise.reject({ error: errorMessage });
  }
}


/** update user profile function */
export async function updateUser(response) {
  try {
    // Step 1: Retrieve the token from localStorage
    const token = localStorage.getItem('token');

    // Step 2: Check if the token is available
    if (!token) {
      // Step 3: If the token is not found, throw an error with a custom message
      throw new Error('Token not found. Please log in again.');
    }

    // Step 4: Create the request headers with the token for authentication
    const headers = { Authorization: `Bearer ${token}` };

    // Step 5: Send a PUT request to update the user's profile data
    const { data } = await axios.put('/api/updateuser', response, { headers });

    // Step 6: Return the updated data from the response
    return data;
  } catch (error) {
    // Step 7: If there is an error during the request (e.g., token not found or server error), handle the error

    // Step 8: Extract the error message from the response, if available, using optional chaining (?.)
    const errorMessage = error.response?.data?.error || "Couldn't update profile.";

    // Step 9: Return a rejected promise with an object containing the error message
    // The calling function can use this promise rejection to handle the error appropriately
    return Promise.reject({ error: errorMessage });
  }
}

/** generate OTP */
export async function generateOTP(username) {
  try {
    // Step 1: Send a GET request to generate an OTP (One-Time Password) for the provided username
    const { data: { code }, status } = await axios.get('/api/generateOTP', {
      params: { username },
    });

    // Step 2: Send mail with the OTP if OTP generation is successful (status code 201)
    if (status === 201) {
      // Step 3: Get the user's email associated with the provided username
      const { data: { email } } = await getUser({ username });

      // Step 4: Compose the text of the email containing the OTP
      const text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;

      // Step 5: Send a POST request to the '/api/registerMail' endpoint to send the email
      await axios.post('/api/registerMail', {
        username,
        userEmail: email,
        text,
        subject: "Password Recovery OTP",
      });
    }

    // Step 6: Return the generated OTP
    return code;
  } catch (error) {
    // Step 7: If there is an error during OTP generation, handle the error

    // Step 8: Return a rejected promise with an object containing the error message
    // The calling function can use this promise rejection to handle the error appropriately
    return Promise.reject({ error: "Error generating OTP." });
  }
}


/** verify OTP */
export async function verifyOTP({ username, code }) {
  try {
    // Step 1: Send a GET request to verify the OTP (One-Time Password) for the provided username and code
    const { data, status } = await axios.get('/api/verifyOTP', { params: { username, code } });

    // Step 2: Return an object containing the data and status from the response
    return { data, status };
  } catch (error) {
    // Step 3: If there is an error during OTP verification, handle the error

    // Step 4: Return a rejected promise with the error
    // The calling function can use this promise rejection to handle the error appropriately
    return Promise.reject(error);
  }
}


/** reset password */
export async function resetPassword({ username, password }) {
  try {
    // Step 1: Send a PUT request to reset the password with the provided username and password
    const { data, status } = await axios.put('/api/resetPassword', { username, password });

    // Step 2: Return an object containing the data and status from the response
    return { data, status };
  } catch (error) {
    // Step 3: If there is an error during password reset, handle the error

    // Step 4: Return a rejected promise with the error message from the response, if available,
    // using optional chaining (?.). If the error message is not available in the response,
    // return a default error message 'Error resetting password.'
    // The calling function can use this promise rejection to handle the error appropriately
    return Promise.reject(error.response?.data?.error || 'Error resetting password.');
  }
}