
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/store";

//  Define a functional component `AuthorizeUser` that takes `children` as a prop.
export const AuthorizeUser = ({ children }) => {
    // Step 3: Retrieve the token from the local storage.
    const token = localStorage.getItem('token');
  
    // Step 4: Check if the token is present or not.
    if (!token) {
      // Step 5: If the token is not present, redirect the user to the home page using the `Navigate` component.
      // The `replace={true}` prop replaces the current entry in the history stack, preventing the user from going back to the protected route.
      return <Navigate to={'/'} replace={true}></Navigate>;
    }
  
    // Step 6: If the token is present, render the `children` (the components wrapped within `AuthorizeUser`).
    // These components represent the protected routes that should only be accessible to authenticated users.
    return children;
  }


//  Define a functional component `ProtectRoute` that takes `children` as a prop.
export const ProtectRoute = ({ children }) => {
    // Step 3: Get the `username` from the authentication store using the `useAuthStore` custom hook or store.
    const username = useAuthStore.getState().auth.username;
  
    // Step 4: Check if the `username` is present or not (which implies the user is authenticated).
    if (!username) {
      // Step 5: If the `username` is not present, redirect the user to the home page using the `Navigate` component.
      // The `replace={true}` prop replaces the current entry in the history stack, preventing the user from going back to the protected route.
      return <Navigate to={'/'} replace={true}></Navigate>;
    }
  
    // Step 6: If the `username` is present, render the `children` (the components wrapped within `ProtectRoute`).
    // These components represent the protected routes that should only be accessible to authenticated users.
    return children;
  }