// src/pages/Signin.jsx
import React, { useState } from 'react';
import './Signin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log('Form submitted'); // Debugging log
    console.log('Username:', username); // Log username
    console.log('Password:', password); // Log password

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      if (response.data) {
        console.log("Hi there");
        localStorage.setItem('authToken', response.data.token);
        setErrorMessage('');
        alert('Login successful!');
        navigate('/'); // Navigate to the home page
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong, try again.');
      console.error('Error logging in:', error); // Log error details for debugging
    }
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <h2 className="title">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn">Login</button>
          <p className="toggle-message">
            Don't have an account?{' '}
            <span onClick={() => navigate('/register')} className="toggle-link">Register</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
