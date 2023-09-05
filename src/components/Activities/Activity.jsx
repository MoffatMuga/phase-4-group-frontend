import React, { useEffect, useState } from 'react';
import ActivityList from './ActivityList';
import CreateActivity from './CreateActivity';
import EditActivity from './EditActivity';
import DeleteActivity from './DeleteActivity';

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [date, setDate] = useState('');
  const [editingActivity, setEditingActivity] = useState(null);
  const [deletingActivity, setDeletingActivity] = useState(null);

  useEffect(() => {
    // Fetch activity data or perform any initial setup
    // Example fetch:
    fetch('/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  const handleCreate = () => {
    // Mock creation logic (replace with actual API call)
    const newActivity = { name: selectedActivity, date };
    // ...
    onCreate(newActivity);
    setSelectedActivity('');
    setDate('');
  };

  const handleUpdate = () => {
    // Mock update logic (replace with actual API call)
    const updatedActivity = { ...editingActivity, title: selectedActivity };
    // ...
    onUpdate(updatedActivity);
    setEditingActivity(null);
    setSelectedActivity('');
  };

  const handleDelete = () => {
    // Mock delete logic (replace with actual API call)
    const deletedActivityId = deletingActivity.id;
    // ...
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
    <div className="activity-container">
      <h2>Activities</h2>
      <ActivityList
        activities={activities}
        onEdit={activity => setEditingActivity(activity)}
        onDelete={activity => setDeletingActivity(activity)}
      />
      <CreateActivity
        selectedActivity={selectedActivity}
        date={date}
        onSelectActivity={activity => setSelectedActivity(activity)}
        onChangeDate={newDate => setDate(newDate)}
        onSubmit={handleSubmit}
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
  );
};

export default Activity;
