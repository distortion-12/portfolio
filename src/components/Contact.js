import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if(formData.name && formData.email && formData.subject && formData.message) {
        alert('Thank you for your message!');
        // Clear form
        setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
        alert('Please fill out all fields.');
    }
  };

  return (
    <div className="contact-wrapper">
      <div id="contact">
        <div className="contact-heading">
          <h1>Contact Me</h1>
          <p>Questions, Thoughts, Or Just Want To Say Hello?</p>
        </div>
        <div className="contact-input-form">
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Enter your subject" value={formData.subject} onChange={handleChange} />
          <textarea name="message" cols="30" rows="10" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
          <button className="contact-me-button" onClick={handleSubmit}>
            Send Message <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;