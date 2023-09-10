import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="landing">
        <div className="content">
          <div className="text">
            <h1>
              <span className="welcome">Welcome</span>
              <br /> <span className='sentence'>to Our Study Assistant App</span>
            </h1>
            <Link to="/authentication" className="center-button">
              <div className="arrow-button">GET STARTED HERE</div>
            </Link>
          </div>
          <div className="icons">
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src="photo2.png.png" alt="student studying" />
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <h2 className='header'>Why We Have High Active Users</h2>
          <p>The website has an intuitive and easy-to-navigate user interface.This keeps users engaged by tailoring the experience to their needs.</p>
        </div>
        <div className="card">
          <h2 className='header'>Why We Have a High Rate of Approvals</h2>
          <p> Offering a free tier with valuable features and content that attracts a broad user base, users can experience the platform's benefits without a financial commitment.</p>
        </div>
        <div className="card">
          <h2 className='header'>Why We Have a High Rate of Referrals</h2>
          <p> We promise to demonstrate a commitment to ongoing improvement and addressing user feedback.</p>
        </div>
      </div>

      <div className="percentage-container">
      <div className="percentage-item">
          <div className="percentage-label">DAILY ACTIVE USERS</div>
          <div className="percentage-progress">
            <div className="percentage-fill" style={{ width: '90%' }}>90%</div>
          </div>
        </div>
        <div className="percentage-item">
          <div className="percentage-label">APPROVALS</div>
          <div className="percentage-progress">
            <div className="percentage-fill" style={{ width: '92%' }}>92%</div>
          </div>
        </div>
        <div className="percentage-item">
          <div className="percentage-label">REFERRALS</div>
          <div className="percentage-progress">
            <div className="percentage-fill" style={{ width: '87%' }}>87%</div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
