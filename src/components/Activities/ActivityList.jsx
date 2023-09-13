import React, { useState, useEffect } from 'react';
import './ActivityList.css'

  function ActivityList({activities, errorMessage}) {
  //const [activities, setActivities] = useState([]);
  //const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    




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
