import React from "react";
import { useSelector } from "react-redux";
import { selectRegistrationData } from '../store/registration';

function RegistrationDetails() {
  // Use the useSelector hook to access the registrationData from the Redux store
  const registrationData = useSelector(selectRegistrationData);

  // Check if registrationData is available before rendering
  if (!registrationData) {
    console.log("Registration Data is loading...");
    return <div>Loading...</div>;
  }

  // Destructure the data object from registrationData
  const {
    dateCreated,
    dateModified,
    email,
    fullname,
    isAccountVerified,
    isEmailVerified,
    isPhoneNumberVerified,
    phoneNumber,
    pin,
    referredBy,
    referrerCode,
    status,
    userId,
  } = registrationData.data;

  // console.log("User Registration Data:", registrationData);


  // console.log("Destructured Data:", {
  //   dateCreated,
  //   dateModified,
  //   email,
  //   fullname,
  //   isAccountVerified,
  //   isEmailVerified,
  //   isPhoneNumberVerified,
  //   phoneNumber,
  //   pin,
  //   referredBy,
  //   referrerCode,
  //   status,
  //   userId,
  // }); // Log the destructured data

  return (
    <div>
      <h2>Registration Details</h2>
      <p>Date Created: {dateCreated}</p>
      <p>Date Modified: {dateModified}</p>
      <p>Email: {email}</p>
      <p>Full Name: {fullname}</p>
      <p>Is Account Verified: {isAccountVerified}</p>
      <p>Is Email Verified: {isEmailVerified}</p>
      <p>Is Phone Number Verified: {isPhoneNumberVerified}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>PIN: {pin}</p>
      <p>Referred By: {referredBy}</p>
      <p>Referrer Code: {referrerCode}</p>
      <p>Status: {status}</p>
      <p>User ID: {userId}</p>
      {/* Add more HTML elements to display other properties */}
    </div>
  );
}

export default RegistrationDetails;
