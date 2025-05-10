import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaStar, FaUser, FaEnvelope } from 'react-icons/fa';
import './FeedbackForm.css';

const questions = [
  'How satisfied were you with the quality of the product you purchased?',
  'Was the price of the product reasonable?',
  'How likely are you to recommend our products and services to others?',
  'How would you rate your overall experience with our company?'
];

function FeedbackForm() {
  const [ratings, setRatings] = useState([0, 0, 0, 0]);
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (qIndex, star) => {
    const updated = [...ratings];
    updated[qIndex] = star;
    setRatings(updated);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ratings.every(r => r > 0) && form.name && form.email) {
      setSubmitted(true);
      setForm({ name: '', email: '' });
      setRatings([0, 0, 0, 0]);
    } else {
      alert('Please complete all fields and ratings.');
    }
  };

  return (
    <Container className="feedback-form mt-4">
      <h1 className="text-center">HELP US IMPROVE</h1>
      <p className="text-center text-muted">Thank you for your feedback</p>

      {questions.map((q, idx) => (
        <div key={idx} className="mb-4">
          <p className="question">{q}</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map(star => (
              <FaStar
                key={star}
                size={28}
                className="star"
                color={star <= ratings[idx] ? '#ffc107' : '#ccc'}
                onClick={() => handleStarClick(idx, star)}
              />
            ))}
          </div>
        </div>
      ))}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 input-with-icon">
          <FaUser className="form-icon" />
          <Form.Control
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 input-with-icon">
          <FaEnvelope className="form-icon" />
          <Form.Control
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" type="submit" className="px-5">Submit</Button>
        </div>
      </Form>

      {submitted && <p className="text-success text-center mt-3">Thanks for your feedback!</p>}
    </Container>
  );
}

export default FeedbackForm;
