import React, { useState } from 'react';

import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  const [formData, setFormData] = useState({name:'', email:'', feedback:''});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData ({...setFormData, [name]: value});
  };

// handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // creating the confirmation message to be displayed
    const confirmationMessage =`
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}`;

    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({name: '', email:'', feedback:''});
      alert('Thank you for your valuable feedback!');
    }
  };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name} // state variable name is for this input (integrating 'state' with the input)
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Feedback</button>
        
      </form>
    </>
  );
};

export default FeedbackForm;
