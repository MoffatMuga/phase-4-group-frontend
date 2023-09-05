
import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <div className="user-avatar">
        <img src={user.avatarUrl} alt={user.name} />
      </div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
