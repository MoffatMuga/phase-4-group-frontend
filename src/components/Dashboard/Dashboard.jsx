// Dashboard/Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ActivityGraph from './ActivityGraph';
//import CreateActivity from '../Activities/CreateActivity'; 
import './Dashboard.css'; 

const activitiesData = [
  {
    id: 1,
    name: 'Codility',
    // ... Other properties
  },
  {
    id: 2,
    name: 'Code Challenge',
    // ... Other properties
  },
  {
    id: 3,
    name: 'Labs',
    // ... Other properties 
  },

];

const Dashboard = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivityClick = activityId => {
    setSelectedActivity(activityId);
  };

  const selectedActivityData = activitiesData.find(activity => activity.id === selectedActivity);

  return (
    <div className="dashboard">
      <Sidebar user={{ name: 'User Name' }} activities={activitiesData} onActivityClick={handleActivityClick} />
      <div className="content">
        <div className="graph-container">
          <h2 className='activity-h2'>YOUR ACTIVITY GRAPH</h2>
          {selectedActivityData ? (
            <ActivityGraph data={selectedActivityData} />
          ) : (
            <p>Select an activity from the sidebar or create a new activity.</p>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
