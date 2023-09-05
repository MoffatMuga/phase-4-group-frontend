import React, { useState } from 'react';
import './Authentication.css'; // Import your CSS file

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSignUp = async () => {
    // Check if the email is already registered
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      console.error('Email is already registered.');
    } else {
      // Register the user by making a POST request to your backend API
      const newUser = { name, email, password, age };
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          // Registration successful, handle the response if needed
          setUser(newUser);

          // After successful registration, reset the form and switch back to login
          setEmail('');
          setPassword('');
          setName('');
          setAge('');
          setIsRegistering(false);
        } else {
          console.error('Registration failed.');
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    }
  };

  const handleLogin = async () => {
    // Make a POST request to your backend API for authentication
    const credentials = { email, password };
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Authentication successful, handle the response if needed
        const userData = await response.json();
        setUser(userData);
      } else {
        console.error('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="authentication-container">
      <h2>Authentication</h2>
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
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="input-field"
                type="text"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
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
                Don't have an account, register
              </button>
            </div>
          )}
    </div>
  );
};

export default Authentication;
