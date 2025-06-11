// src/Home.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import EmailForm from '../EXP7/EmailForm';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>  
      <EmailForm />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;

