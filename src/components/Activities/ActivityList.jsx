
import React, { useEffect, useState } from 'react';

const ActivityList = ({ onEdit, onDelete }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    
    fetch('/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

    return (
      <div className="activity-list">
        <h2>Previous Activities</h2>
        <table className="activity-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity.id}>
                <td>{activity.title}</td>
                <td>
                  <button onClick={() => onEdit(activity)}>Edit</button>
                  <button onClick={() => onDelete(activity.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default ActivityList;
