import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phoneNumber: '',
    email: '',
    password: '',
    referredBy: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Define your custom headers here
      const headers = {
        'ngrok-skip-browser-warning': '69420',
      };

      // Make a POST request to the provided endpoint with the headers
      const response = await axios.post(
        'https://0516-154-118-24-214.ngrok-free.app/',
        formData,
        { headers }
      );

      console.log('Response:', response.data);

      // Handle successful response here, e.g., show a success message to the user
    } catch (error) {
      console.error('Error:', error);

      // Handle error, e.g., show an error message to the user
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="referredBy"
          placeholder="Referred By"
          value={formData.referredBy}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
