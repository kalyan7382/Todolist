import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    phone: '',
    message: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate("/MultiStepForm");

  };

  return (
    <div className="contact-form-container">
      <div className="form-section">
        <h2>Let's work together</h2>
        <p>We’re a full-service agency dedicated to helping you go from MVP to industry leader. Let our team bring your goals to life.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
          />
          <div className="form-group">
            <select name="countryCode" required>
              <option value="US">US +1</option>
              <option value="CA">CA +1</option>
              {/* Add other country codes as needed */}
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">Continue</button>
        </form>
      </div>
      <div className="testimonial-section">
        <div className="testimonial-content">
          
            "There's no doubt we wouldn’t have achieved our level of success without Untitled UI, especially with our iOS app."
          
          <p className="testimonial-details">
            Partner: Powersurge <br />
            Year: August 2025 <br />
            Services: Brand Strategy, Website Design, Marketing Assets, Pitch Deck Design, Webflow Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
