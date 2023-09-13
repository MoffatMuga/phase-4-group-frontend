import React, { useState, useEffect } from 'react';
import './ActivityList.css'

function ActivityList() {
  const [activities, setActivities] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch the list of activities from the backend
    fetch('http://127.0.0.1:3000/activities')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch activities');
        }
      })
      .then((data) => {
        setActivities(data);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Failed to fetch activities from the server.');
      });
  }, []);

  return (
    <div className="activity-list">
      <h2>Activity List</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.title}</td>
              <td>{activity.description}</td>
              <td>{activity.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivityList;
