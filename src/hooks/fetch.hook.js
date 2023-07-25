import axios from "axios";
import { useEffect, useState } from "react";
import { getUsername } from '../helper/helper'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;


/** custom hook */
export default function useFetch(query) {
    // Step 1: Initialize state using the `useState` hook with an initial state object
    // containing isLoading, apiData, status, and serverError properties.
    const [getData, setData] = useState({
      isLoading: false,
      apiData: undefined,
      status: null,
      serverError: null,
    });
  
    // Step 2: Use the `useEffect` hook to run the data fetching logic when the component mounts or when the `query` dependency changes.
    useEffect(() => {
      // Step 3: Define an asynchronous function `fetchData` to fetch data from the server.
      const fetchData = async () => {
        try {
          // Step 4: Set the `isLoading` property in the state to `true` to indicate that data is being fetched.
          setData((prev) => ({ ...prev, isLoading: true }));
  
          // Step 5: If `query` is not provided, fetch the username using the `getUsername` function.
          const { username } = !query ? await getUsername() : '';
  
          // Step 6: Fetch data from the server based on the `query` or the `username`.
          const { data, status } = !query
            ? await axios.get(`/api/user/${username}`)
            : await axios.get(`/api/${query}`);
  
          // Step 7: Check the status of the response. If status is 201, update the state with the fetched data and status.
          if (status === 201) {
            setData((prev) => ({ ...prev, isLoading: false }));
            setData((prev) => ({ ...prev, apiData: data, status: status }));
          }
  
          // Step 8: Set the `isLoading` property in the state to `false` to indicate that data fetching is complete.
          setData((prev) => ({ ...prev, isLoading: false }));
        } catch (error) {
          // Step 9: If there is an error while fetching data, update the state with the error information.
          setData((prev) => ({ ...prev, isLoading: false, serverError: error }));
        }
      };
      // Step 10: Call the `fetchData` function when the component mounts or when the `query` dependency changes.
      fetchData();
    }, [query]);
  
    // Step 11: Return the state and the `setData` function as an array so that they can be used in the component that uses this custom hook.
    return [getData, setData];
  }
  