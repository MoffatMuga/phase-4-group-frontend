
import React, { useState, useEffect } from 'react';

const EditActivity = ({ activity, onUpdate }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(activity.title);
  }, [activity]);

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`/activities/${activity.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...activity, title }),
    })
      .then(response => response.json())
      .then(data => onUpdate(data));
  };

  return (
    <div className="edit-activity">
      <h2>Edit Activity</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Activity Title"
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditActivity;
