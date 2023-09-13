import React, { useState } from 'react';

function EditActivity() {
  const [activityData, setActivityData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActivityData({ ...activityData, [name]: value });
  };

  const handleUpdate = () => {
    
    fetch(`http://127.0.0.1:3000/activities/:id`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activityData),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage('Activity was successfully updated.');
          setErrorMessage('');
        } else {
          throw new Error('Failed to update activity');
        }
      })
      .catch((error) => {
        setErrorMessage('Failed to update activity. Please check your input.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="edit-activity">
      <h2>Edit Activity</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={activityData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={activityData.description}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="date"
          name="date"
          value={activityData.date}
          onChange={handleInputChange}
        />
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
}

export default EditActivity;
