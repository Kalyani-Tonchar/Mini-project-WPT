import React from 'react';
import './Aboutus.css'; // ✅ Import the CSS file
import aboutUsImage from '../assets/aboutusimg.png';

import Team from './Team';

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <img
        src={aboutUsImage}
        alt="About Us Illustration"
        className="aboutus-image"
      />

      {/* Our Promise Section */}
      <section className="promise-section">
        <h2 className="promise-heading">Our Promise</h2>
        <div className="promise-cards">
          {[
            {
              icon: '🧁',
              title: 'AUTHENTIC RECIPES',
              text: 'Our products are based on traditional home-style recipes, using fresh ingredients.',
            },
            {
              icon: '❤️',
              title: 'BAKED WITH LOVE',
              text: 'Our passion for baking is poured into every recipe, serving smiles on a plate everyday.',
            },
            {
              icon: '📦',
              title: 'HONESTLY PRICED',
              text: 'We constantly strive to offer the best products at the right prices.',
            },
            {
              icon: '🥇',
              title: 'COMMITTED TO QUALITY',
              text: 'From our ingredients to our kitchen operations & guest services, we always prioritize quality.',
            },
          ].map((item, idx) => (
            <div key={idx} className="promise-card">
              <div className="promise-card-icon">{item.icon}</div>
              <h4 className="promise-card-title">{item.title}</h4>
              <p className="promise-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <h2>Meet Our Team</h2>
      <section className="team-section">
     
        <Team />
      </section>
    </div>
  );
};

export default Aboutus;
