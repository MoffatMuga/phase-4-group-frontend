
import React from 'react';
import './Sidebar.css'; 

const Sidebar = ({ user, activities, onActivityClick }) => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <p>Welcome, {user.name}</p>
      </div>
      <div className="activity-list">
        <h2>Activities</h2>
        <ul>
          {activities.map(activity => (
            <li key={activity.id} onClick={() => onActivityClick(activity.id)}>
              {activity.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
