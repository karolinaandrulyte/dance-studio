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
      We would love to hear from you! Please fill out the form below or reach us at the contact information provided.
    </p>
    <div className="contact-info">
      <h2>Our Contact Information:</h2>
      <p>
        <strong>Dance Studio Name</strong><br />
        123 Dance Street<br />
        Dance City, DC 12345<br />
        Email: info@dancestudio.com<br />
        Phone: (123) 456-7890
      </p>
    </div>

    <h2>Contact Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
  );  
};
  
export default Contacts;