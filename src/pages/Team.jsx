import React from 'react';
import './Team.css'; 
import krutikaImage from '../assets/KRUTIKA_PATIL__KH.jpg';
import kalyaniImage from '../assets/Kalyani_Tonchar__KH.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  return (
    <div className="team-section">
      <div className="team-member-card">
        <img
          src={krutikaImage}
          alt="Krutika Patil"
          className="team-photo"
        />
        <div className="team-info">
          <h3>Krutika Patil</h3>
          <p>
            Kimay is our co-founder and has developed search strategies for a
            variety of clients from international brands to medium sized
            businesses for over five years.
          </p>
          <div className="social-links">
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
         <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
      </div>

      <div className="team-member-card">
        <img
          src={kalyaniImage}
          alt="Kalyani Tonchar"
          className="team-photo"
        />
        <div className="team-info">
          <h3>Kalyani Tonchar</h3>
          <p>
            Graduating with a degree in Spanish and English, Vrushali has always
            loved writing and now she’s lucky enough to do it as part of her new
            job inside our agency.
          </p>
          <div className="social-links">
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
      </div>

      <div className="team-member-card">
        <img
          src="https://via.placeholder.com/150"
          alt="Rushikesh Ramteke"
          className="team-photo"
        />
        <div className="team-info">
          <h3>Himanshu Lokhande</h3>
          <p>
            Rushikesh first fell in love with digital marketing at the university.
            He loves to learn, and looks forward to being part of this new
            exciting industry for many years.
          </p>
          <div className="social-links">
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
