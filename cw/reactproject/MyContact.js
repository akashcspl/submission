import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyContact() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // pretend contact logic here
    navigate('/'); // redirect to home after login
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <button onClick={handleLogin}>Home</button>
    </div>
  );
}

export default MyContact;
