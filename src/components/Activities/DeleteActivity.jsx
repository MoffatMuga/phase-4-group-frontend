
import React from 'react';

const DeleteActivity = ({ activity, onDelete }) => {
  const handleDelete = () => {
    
    fetch(`/activities/${activity.id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => onDelete(activity.id));
  };

  return (
    <div className="delete-activity">
      <h2>Delete Activity</h2>
      <p>Are you sure you want to delete the activity "{activity.title}"?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteActivity;
