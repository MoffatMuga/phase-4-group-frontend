import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home/Home';
import Authentication from './components/Authentication/Authentication';
import Dashboard from './components/Dashboard/Dashboard';
import UserProfile from './components/UserProfile/UserProfile';

import Activity from './components/Activities/Activity';

const App = () => {
  const user = {
    name: 'User Name',
    bio: 'Bio information',
    avatarUrl: 'URL_to_user_avatar_image',
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/authentication">LOG IN</Link></li>
            <li><Link to="/activities">ACTIVITIES</Link></li>
            <li><Link to="/dashboard">DASHBOARD</Link></li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/activities/*" element={<Activity />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/user-profile" element={<UserProfile user={user} />} />
        </Routes>
        <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </Router>
  );
};

export default App;
