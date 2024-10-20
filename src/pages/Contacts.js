import React, { useState } from 'react';


const Contacts = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Message sent from ${formData.name}!`);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
    
    <p>
      We would love to hear from you!
      <br></br>
      Please fill out the form below or reach us at the contact information provided.
    </p>
    
    <h3>Contact Form</h3>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control" // Apply form-control class
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control" // Apply form-control class
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          className="form-control" // Apply form-control class
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn">Send Message</button>
    </form>

    <div className="contact-info">
      <p>
        <strong>Dance Studio</strong><br />
        123 Dance Street<br />
        Dance City, DC 12345<br />
        Email: info@dancestudio.com<br />
        Phone: (123) 456-7890
      </p>
    </div>

  </div>
  );  
};
  
export default Contacts;