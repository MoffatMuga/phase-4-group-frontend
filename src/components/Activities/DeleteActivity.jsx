import React, { useState } from 'react';


function DeleteActivity() {
  const [activityId, setActivityId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    setActivityId(e.target.value);
  };

  const handleDelete = () => {
    
    fetch(`http://127.0.0.1:3000/activities/${activityId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage('Activity was successfully deleted.');
          setErrorMessage('');
        } else {
          throw new Error('Failed to delete activity');
        }
      })
      .catch((error) => {
        setErrorMessage('Failed to delete activity. Please check the activity ID.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="delete-activity">
      <h2>Delete Activity</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <input
        type="text"
        name="activityId"
        placeholder="Activity ID"
        value={activityId}
        onChange={handleInputChange}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteActivity;
