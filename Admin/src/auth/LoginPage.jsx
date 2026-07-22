import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic stub for login logic
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input type="text" placeholder="admin" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;