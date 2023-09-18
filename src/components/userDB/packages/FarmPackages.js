import React, { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const FarmPackages = ({ title }) => {
  const [accessToken, setAccessToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mMCI6eyJ1c2VySWQiOiI3MDg3YWUzYS0yOGQ0LTQ2M2UtOWQ5ZS1mM2NlOWNmM2QyMjAiLCJmdWxsbmFtZSI6IkFsbWFqaXJpIEF3d2FsIiwic3RhdHVzIjowfSwiaWF0IjoxNjkwNDYwODM1LCJleHAiOjE2OTEwNjU2MzV9.kQ4fg-6YwL4OjkZr6S0TL_TixVd6L8991EXOkk3ndd4');


  // const endpointUrl = 'https://btca.afribook.world/package/getPackages';
  // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mMCI6eyJ1c2VySWQiOiI3MDg3YWUzYS0yOGQ0LTQ2M2UtOWQ5ZS1mM2NlOWNmM2QyMjAiLCJmdWxsbmFtZSI6IkFsbWFqaXJpIEF3d2FsIiwic3RhdHVzIjowfSwiaWF0IjoxNjkwNDYwODM1LCJleHAiOjE2OTEwNjU2MzV9.kQ4fg-6YwL4OjkZr6S0TL_TixVd6L8991EXOkk3ndd4';

  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to refresh the access token
    const refreshAccessToken = async () => {
      try {
        const refreshTokenResponse = await fetch('https://btca.afribook.world/account/refreshToken', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        if (!refreshTokenResponse.ok) {
          throw new Error('Token refresh failed');
        }

        const refreshedToken = await refreshTokenResponse.json();
        const newAccessToken = refreshedToken.accessToken;

        setAccessToken(newAccessToken);

      } catch (error) {
        console.error('Error refreshing token:', error);
      }

    };

    // Fetch Packages items using the current access token
    const fetchData = async () => {
      try {
        const response = await fetch('https://btca.afribook.world/package/getPackages', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Refresh token and fetch data on component mount
    refreshAccessToken();
    fetchData();
  }, [accessToken]);

  return (
    <div className="bg-[#A020F0] rounded-lg overflow-hidden py-4 px-2 text-center text-white space-y-8">
      <div>
        <h2 className="font-bold text-base uppercase">{title}</h2>
      </div>
      <hr />
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id}>
            <h3 className="font-medium text-base">{item.value}</h3>
            <p className="font-medium text-base">{item.description}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex justify-center">
        <button className="flex flex-col items-center justify-center gap-2 px-20 py-1 font-medium text-base outline otline-1 outline-white">
          <AiOutlineStar />
          Activate
        </button>
      </div>
    </div>
  );
};

export default FarmPackages;
