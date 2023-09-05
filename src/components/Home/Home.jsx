
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Your Study Assistant App</h1>
      <Link to="/authentication">
          <button className='Button'>Book Now</button>
      </Link>

            <div className="container">
                <div className="info-item">
                    <p>Subscribe to our newsletter</p>
                    <form className="newsletter-form">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" />
                    <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="image-container">
                    <img src="photo1.png.webp" alt="student studying" />
                </div>
            </div>

        <footer className="footer-container">
        <div className="footer-social">
          <div className="social-icons">
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
      <br />
        
      </footer>
    </div>
  );
};

export default Home;
