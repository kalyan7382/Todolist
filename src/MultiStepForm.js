import React, { useState } from 'react';
// Import CSS file for custom styling
 
const MultiStepForm = () => {
  const [teamSize, setTeamSize] = useState([10, 20]);
  const [budget, setBudget] = useState([1000, 5000]);
  const [selectedServices, setSelectedServices] = useState([]);
 
  const services = [
    'Web Design', 'UI/UX Design', 'App Design',
    'Development', 'Technical SEO', 'Content Writing',
    'Strategy', 'Research', 'Other'
  ];
 
  const handleServiceClick = (service) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };
 
  const handleTeamSizeChange = (event) => {
    setTeamSize([event.target.value[0], event.target.value[1]]);
  };
 
  const handleBudgetChange = (event) => {
    setBudget([event.target.value[0], event.target.value[1]]);
  };
 
  return (
<div className="multi-step-form">
<div className="form-section">
<h2>Let's work together</h2>
<p>We’re a full-service agency dedicated to helping you go from MVP to industry leader. Let our team bring your goals to life.</p>

<label>Team size</label>
<span>{`${teamSize[0]} - ${teamSize[1]} people`}</span>
<input
          type="range"
          min="1"
          max="100"
          step="1"
          value={teamSize}
          onChange={handleTeamSizeChange}
        />

<label >Budget
<span>{`$${budget[0]} - $${budget[1]} USD`}</span></label>
<input
          type="range"
          min="1000"
          max="100000"
          step="1000"
          value={budget}
          onChange={handleBudgetChange}
        />
<label>What do you need help with?</label>
<div className="services-grid">
          {services.map(service => (
<button
              key={service}
              className={`service-button ${selectedServices.includes(service) ? 'selected' : ''}`}
              onClick={() => handleServiceClick(service)}
>
              {service}
</button>
          ))}
</div>
<div className="navigation-buttons">
<button className="submit-button">Let's create!</button>
</div>
</div>
 
    <div className="testimonial-section1">
        <img src="image1.jpg"  className="test" />
    <footer>
        <div className="testimonial-text">
        <p>"We teamed up with Untitled UI to completely rebrand and launch, which helped us secure over $40M in funding."</p>
    </div>
    <ul>
        <li><a href="#">Partner</a>
        <p>Powersunge</p>
        </li>
        <li><a href="#">Website</a>
        <p>Powersunge.com</p>
        </li>
        <li><a href="#">Year</a>
        <p>August 2025</p>
        </li>
        <li><a href="#">Investment</a>
        <p>$40,000,000</p>
        </li>
      </ul>
</footer>
</div>

</div>

  );
};
 
export default MultiStepForm;