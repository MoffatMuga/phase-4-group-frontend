
import React, { useState } from 'react';
import './CreateActivity.css'; 

const CreateActivity = ({ onCreate }) => {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [date, setDate] = useState('');

  const activityOptions = ['Codility', 'Code Challenge', 'Labs']; 

  const handleSubmit = event => {
    event.preventDefault();
    
    fetch('/activities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: selectedActivity, date }),
    })
      .then(response => response.json())
      .then(data => {
        onCreate(data);
        setSelectedActivity('');
        setDate('');
      });
  };

  return (
    <div className="create-activity">
      <h2>Create New Activity</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedActivity}
          onChange={event => setSelectedActivity(event.target.value)}
          placeholder="Select Activity"
        >
          <option value="">Select an activity</option>
          {activityOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
          placeholder="Activity Date"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateActivity;
