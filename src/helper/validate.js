import toast from 'react-hot-toast'
import { authenticate } from './helper'

/** validate login page username */
export async function usernameValidate(values) {
    // Step 1: Call the `usernameVerify` function to perform basic validation on the `values.username`
    const errors = usernameVerify({}, values);
  
    // Step 2: Check if the `values.username` is not empty or falsy (e.g., null, undefined, empty string)
    if (values.username) {
      // Step 3: If the `values.username` is not empty, call the `authenticate` function to check if the user exists
      // Note: The `authenticate` function likely makes an API call to the server to check if the user exists.
      const { status } = await authenticate(values.username);
  
      // Step 4: If the user does not exist (i.e., the status is not 200), set an error message in the `errors` object
      // to indicate that the user does not exist.
      if (status !== 200) {
        errors.exist = toast.error('User does not exist...!');
      }
    }
  
    // Step 5: Return the `errors` object, which may contain the 'exist' error message if the user does not exist.
    return errors;
  }


/** validate password */
export async function passwordValidate(values) {
  // Step 1: Call the `passwordVerify` function to perform validation on the `values.password`
  const errors = passwordVerify({}, values);

  // Step 2: Return the `errors` object, which may contain error messages based on the validation rules
  return errors;
}


/** validate reset password */
export async function resetPasswordValidation(values) {
    // Step 1: Call the `passwordVerify` function to perform validation on the `values.password`
    const errors = passwordVerify({}, values);
  
    // Step 2: Check if the `values.password` and `values.confirm_pwd` are not equal
    if (values.password !== values.confirm_pwd) {
      // Step 3: If they are not equal, set an error message in the `errors` object
      // to indicate that the passwords do not match.
      errors.exist = toast.error("Password not match...!");
    }
  
    // Step 4: Return the `errors` object, which may contain error messages based on the validation rules
    // and whether the passwords match or not.
    return errors;
  }
  

/** validate register form */
export async function registerValidation(values) {
    // Step 1: Call the `usernameVerify` function to perform validation on the `values.username`
    const errors = usernameVerify({}, values);
  
    // Step 2: Call the `passwordVerify` function to perform validation on the `values.password`
    // The `errors` object is passed as a reference to accumulate any validation errors related to the password.
    passwordVerify(errors, values);
  
    // Step 3: Call the `emailVerify` function to perform validation on the `values.email`
    // The `errors` object is passed as a reference to accumulate any validation errors related to the email.
    emailVerify(errors, values);
  
    // Step 4: Return the `errors` object, which may contain error messages based on the validation rules
    // for the username, password, and email fields.
    return errors;
  }
  

/** validate profile page */
export async function profileValidation(values) {
    // Step 1: Call the `emailVerify` function to perform validation on the `values.email`
    const errors = emailVerify({}, values);
  
    // Step 2: Return the `errors` object, which may contain error messages based on the validation rules
    // for the email field.
    return errors;
  }
  


/** ************************************************* */

/** validate password */
function passwordVerify(errors = {}, values) {
    // Step 1: Create a regular expression to match special characters
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  
    // Step 2: Check if the `values.password` is empty or not provided
    if (!values.password) {
      // If `values.password` is empty, add an error message to the `errors` object
      // indicating that the password is required.
      errors.password = toast.error("Password Required...!");
    }
    // Step 3: Check if the `values.password` contains any spaces
    else if (values.password.includes(" ")) {
      // If `values.password` contains spaces, add an error message to the `errors` object
      // indicating that the password is invalid (e.g., no spaces allowed).
      errors.password = toast.error("Wrong Password...!");
    }
    // Step 4: Check if the length of `values.password` is less than 4 characters
    else if (values.password.length < 4) {
      // If the length of `values.password` is less than 4 characters, add an error message
      // to the `errors` object indicating that the password must be at least 4 characters long.
      errors.password = toast.error("Password must be more than 4 characters long");
    }
    // Step 5: Check if the `values.password` contains at least one special character
    else if (!specialChars.test(values.password)) {
      // If the `values.password` does not contain any special character, add an error message
      // to the `errors` object indicating that the password must have at least one special character.
      errors.password = toast.error("Password must have a special character");
    }
  
    // Step 6: Return the `errors` object, which may contain error messages based on the validation rules
    // for the password field.
    return errors;
  }
  


/** validate username */
function usernameVerify(error = {}, values) {
    // Step 1: Check if the `values.username` is empty or not provided
    if (!values.username) {
      // If `values.username` is empty, add an error message to the `error` object
      // indicating that the username is required.
      error.username = toast.error('Username Required...!');
    }
    // Step 2: Check if the `values.username` contains any spaces
    else if (values.username.includes(" ")) {
      // If `values.username` contains spaces, add an error message to the `error` object
      // indicating that the username is invalid (e.g., no spaces allowed).
      error.username = toast.error('Invalid Username...!');
    }
  
    // Step 3: Return the `error` object, which may contain error messages based on the validation rules
    // for the username field.
    return error;
  }
  

/** validate email */
function emailVerify(error = {}, values) {
    // Step 1: Check if the `values.email` is empty or not provided
    if (!values.email) {
      // If `values.email` is empty, add an error message to the `error` object
      // indicating that the email is required.
      error.email = toast.error("Email Required...!");
    }
    // Step 2: Check if the `values.email` contains any spaces
    else if (values.email.includes(" ")) {
      // If `values.email` contains spaces, add an error message to the `error` object
      // indicating that the email is invalid (e.g., no spaces allowed in an email).
      error.email = toast.error("Wrong Email...!");
    }
    // Step 3: Check if the `values.email` matches the regular expression for a valid email address
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      // If the `values.email` does not match the regular expression, add an error message
      // to the `error` object indicating that the email is an invalid email address.
      error.email = toast.error("Invalid email address...!");
    }
  
    // Step 4: Return the `error` object, which may contain error messages based on the validation rules
    // for the email field.
    return error;
  }
  