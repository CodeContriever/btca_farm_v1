import React, { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const FarmPackages = ({ title }) => {
  const [accessToken, setAccessToken] = useState(''); // Initialize with an empty token
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to refresh the access token
    const refreshAccessToken = async () => {
      try {
        const refreshResponse = await fetch('https://btca.afribook.world/account/refreshToken', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}` // Send your current access token
          }
        });

        if (!refreshResponse.ok) {
          throw new Error('Token refresh failed');
        }

        const refreshData = await refreshResponse.json();
        const newAccessToken = refreshData.accessToken;

        // Update the access token in your state
        setAccessToken(newAccessToken);
      } catch (error) {
        console.error('Error refreshing token:', error);
      }
    };

    // Fetch data using the current access token
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
  }, [accessToken]); // Add accessToken as a dependency to refresh it when it changes

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
