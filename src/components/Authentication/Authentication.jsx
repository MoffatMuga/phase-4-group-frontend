// Authentication.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authentication.css';

const Authentication = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    const newUser = { user: { name, email, password, age } };
    try {
      const response = await fetch('http://127.0.0.1:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
        setAge('');
        setIsRegistering(false);
        // Optionally, you can also navigate to the login page after successful registration
        navigate('/login');
      } else {
        console.error('Registration failed.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleLogin = async () => {
    const credentials = { user: { email, password } };

    try {
      const response = await fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('sessionToken', userData.token);
        navigate('/activities');
      } else {
        console.error('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="authentication-container">
      <h2 className='log'>LOG IN/SIGN UP</h2>
      {isRegistering ? (
        <div>
          <input
            className="input-field"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {!passwordMatch && <p>Passwords do not match.</p>}
          <button className="action-button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      ) : (
        <div>
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="action-button" onClick={handleLogin}>
            Log In
          </button>
          <button className="action-button" onClick={toggleRegister}>
            Don't have an account? Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Authentication;