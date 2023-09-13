import React, { useState, useEffect } from 'react';
import './CreateActivity.css';

function CreateActivity({onCreate}) {
  const [activityData, setActivityData] = useState({
    title: '',
    description: '',
    date: '',
    user_id: 2,  //Update this to make user id dynammic
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sessionToken = localStorage.getItem('sessionToken');
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(sessionToken));

  useEffect(() => {
    setIsAuthenticated(Boolean(sessionToken));
    if (!sessionToken) {
      setErrorMessage('User is not authenticated. Please log in to continue.');
    }
  }, [sessionToken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActivityData({ ...activityData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      console.error('User is not authenticated.');
      setErrorMessage('User is not authenticated. Please log in to continue.');
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionToken}`,
    };

    fetch('https://study-helper-api1.onrender.com/activities', {
      method: 'POST',
      headers,
      body: JSON.stringify(activityData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to create activity');
        }
      })
      .then((data) => {
        setActivityData({
          title: '',
          description: '',
          date: '',
          user_id: 2, //Update this to make user id dynammic
        });
        onCreate()
        setSuccessMessage('Activity was successfully created.');
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Failed to create activity. Please check your input.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="create-activity">
      <h2>Create Activity</h2>
      {!isAuthenticated ? (
        <div className="error-message">{errorMessage}</div>
      ) : (
        <>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Create</button>
          </form>
        </>
      )}
    </div>
  );
}

export default CreateActivity;