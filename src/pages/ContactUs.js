import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, submit to API
    setSubmitted(true);
  };

  return (
    <div className="contact-us">
      <section className="hero">
        <h1>Contact Us</h1>
        <p>If you'd like to discuss Dynamics 365 solutions, please reach out and we'll connect shortly.</p>
      </section>

      <section className="contact-content">
        <div className="contact-details" style={{ marginBottom: '1.5rem' }}>
          <h2>Contact Information</h2>
          <ul>
            <li>Phone: +1 800 555 1234</li>
            <li>Email: support@d365insights.example</li>
            <li>Address: 123 Dynamics Way, Cloud City, WA</li>
          </ul>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          {submitted ? (
            <p style={{ color: 'green' }}>Thanks for your message! We will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: '600px' }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows="5"
                required
              />
              <button type="submit" className="cta-button">Submit</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
