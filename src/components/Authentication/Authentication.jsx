import React, { useState } from 'react';
import './Authentication.css';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSignUp = async () => {
    // Register the user by making a POST request to your backend API
    const newUser = { name, email, password, age };
    try {
      const response = await fetch('https://study-helper-rbkb.onrender.com/users', {
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
  };

  const handleLogin = async () => {
    // Make a POST request to your backend API for authentication
    const credentials = { email, password };
    try {
      const response = await fetch('https://study-helper-rbkb.onrender.com/login', {
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

  const handleLogout = async () => {
    try {
      const response = await fetch('https://study-helper-rbkb.onrender.com/logout', {
        method: 'DELETE',
      });

      if (response.ok) {
        // Logout was successful on the server, clear the user state
        setUser(null);
      } else {
        console.error('Logout failed.');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="authentication-container">
      <h2 className='log'>LOG IN/SIGN UP</h2>
      {user ? (
        <div>
          {/* If a user is logged in */}
          <p className="welcome-message">Welcome, {user.name}</p>
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          {isRegistering ? (
            <div>
              {/* If the user is in registration mode */}
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
              <button className="action-button" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
          ) : (
            <div>
              {/* If the user is in login mode */}
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
      )}
    </div>
  );
};

export default Authentication;
