import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of Navigate
import { useAuth } from '../utils/auth';


const ProfilePage = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  const WelcomeMessage = ({ fullname }) => {
    return <h1>Welcome, {fullname}!</h1>;
  };

  return (
    <div>
      {auth.user && <WelcomeMessage fullname={auth.user.fullname} />}
      {auth.hasRole('user') && <button>User Button</button>}
      {auth.hasRole('admin') && <button>Admin Button</button>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default ProfilePage;