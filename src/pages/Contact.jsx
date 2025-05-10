import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaUserShield,
} from 'react-icons/fa';
import './ContactUs.css'; // Import the CSS file

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Message sent!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <main className="container my-5">
        <h2 className="text-center mb-3">CONTACT US</h2>
        <p className="text-center mb-5">
          We would love to hear from you. Share your thoughts and queries with us!
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className="form-box shadow">
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-control"
                  rows="5"
                />
              </div>
          <center><button type="submit" className="btn btn-danger">Send Message</button></center>
            </form>
          </div>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="info-box shadow text-center h-100">
              <FaMapMarkerAlt className="info-icon text-danger" />
              <h5>Registered Address:</h5>
              <p className="mb-1">Cookies Cravings</p>
              <p>32/33 A, Deonar Village Road, Opp. Metal Box Company, Govandi East, Mumbai-400088, Maharashtra, India</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-box shadow text-center h-100">
              <FaUserShield className="info-icon text-danger" />
              <h5>Grievance & Nodal Officer:</h5>
              <p className="mb-1">Ms. Simantini Budukh</p>
              <p>General Counsel & Company Secretary</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-box shadow text-center h-100">
              <FaPhoneAlt className="info-icon text-danger" />
              <h5>Contact Details:</h5>
              <p><strong>Phone:</strong> +91 9478395934</p>
              <p><strong>Email:</strong> contact@CookiesCravings.in</p>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default ContactPage;

