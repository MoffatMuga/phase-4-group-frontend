import React, { useEffect, useState } from 'react';
import ActivityList from './ActivityList';
import CreateActivity from './CreateActivity';
import EditActivity from './EditActivity';
import DeleteActivity from './DeleteActivity';
import './Activity.css';

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [date, setDate] = useState('');
  const [editingActivity, setEditingActivity] = useState(null);
  const [deletingActivity, setDeletingActivity] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    
    /* fetch('http://127.0.0.1:3000/activities')
      .then(response => response.json())
      .then(data => setActivities(data)); */
      handleGetActivities()
  }, []);

  const handleGetActivities = () => {
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

  }
  const handleCreate = () => {
    
    const newActivity = { name: selectedActivity, date };
    // ...
    onCreate(newActivity);
    setSelectedActivity('');
    setDate('');
  };

  const handleUpdate = () => {
   
    const updatedActivity = { ...editingActivity, title: selectedActivity };
   
    onUpdate(updatedActivity);
    setEditingActivity(null);
    setSelectedActivity('');
  };

  const handleDelete = () => {
  
    const deletedActivityId = deletingActivity.id;
    
    onDelete(deletedActivityId);
    setDeletingActivity(null);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (editingActivity) {
      handleUpdate();
    } else if (deletingActivity) {
      handleDelete();
    } else {
      handleCreate();
    }
  };

  return (
    <div className="activity-page">
      <div className="activity-container">
        <ActivityList
          activities={activities}
          onEdit={activity => setEditingActivity(activity)}
          onDelete={activity => setDeletingActivity(activity)}
          errorMessage={errorMessage}
        />
        <CreateActivity
          selectedActivity={selectedActivity}
          date={date}
          onSelectActivity={activity => setSelectedActivity(activity)}
          onChangeDate={newDate => setDate(newDate)}
          onSubmit={handleSubmit}
          onCreate={handleGetActivities}
        />
        {editingActivity && (
          <EditActivity
            activity={editingActivity}
            selectedActivity={selectedActivity}
            onSelectActivity={activity => setSelectedActivity(activity)}
            onSubmit={handleSubmit}
          />
        )}
        {deletingActivity && (
          <DeleteActivity
            activity={deletingActivity}
            onCancel={() => setDeletingActivity(null)}
            onDelete={handleDelete}
          />
        )}
      </div>
      <div className="image-container">
        <img
          src="photo5.png.png"
          alt="Education Illustration by Storyset"
          className="image"
        />
      </div>
    </div>
  );
};

export default Activity;
