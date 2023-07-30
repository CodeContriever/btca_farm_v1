import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of Navigate
import { useAuth } from '../utils/auth';

const ProfilePage = () => {
  const auth = useAuth();
  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleLogout = () => {
    auth.logout();
    navigate('/'); // Use navigate to redirect to the desired route
  };

  const WelcomeMessage = ({ fullname }) => {
    return <h1>Welcome, {fullname}!</h1>;
  };

  return (
    <div>
      {auth.user && <WelcomeMessage fullname={auth.user.fullname} />}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
