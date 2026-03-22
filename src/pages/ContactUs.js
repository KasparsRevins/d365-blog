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
    <div className="contact-us" style={{ padding: '2rem 1rem' }}>
      <style>{`
        .contact-hero { text-align: center; max-width: 920px; margin: 0 auto 2rem; }
        .contact-hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 0.6rem; }
        .contact-hero p { font-size: 1.2rem; color: #555; margin-bottom: 2rem; }

        .features-grid { display: grid; gap: 1rem; grid-template-columns: repeat(2, minmax(0,1fr)); margin-bottom: 2rem; }
        .feature-card { background: #f3f9ff; border: 1px solid #e3f1ff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 8px 20px rgba(6,55,136,0.08); }
        .feature-card .icon { width: 46px; height: 46px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(135deg,#0078d4,#50a7ff); color: white; font-size: 1.2rem; margin-bottom: 0.9rem; }
        .feature-card h3 { margin: 0 0 0.6rem; font-size: 1.05rem; }
        .feature-card p { margin: 0; color: #444; }

        .contact-panel {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin: 2rem auto 0;
          width: min(560px, 100%);
          padding: 0 0.5rem;
        }
        .contact-panel .form-wrap {
          width: 100%;
          background: white;
          border: 1px solid #e8ebee;
          border-radius: 12px;
          padding: 1.25rem;
          box-shadow: 0 3px 10px rgba(57,96,128,0.08);
        }
        .contact-panel h2 { margin-top: 0; }

        .contact-form-group { display: flex; flex-direction: column; gap: 0.75rem; }
        .contact-form-group input,.contact-form-group textarea { width: 100%; padding: 0.75rem 0.85rem; border: 1px solid #cbd5dd; border-radius: 8px; outline: none; }
        .contact-form-group textarea { resize: vertical; min-height: 120px; }
        .contact-form-submit { background: #0078d4; color: white; border: none; padding: 0.75rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 600; }

        @media (max-width: 980px) {
          .features-grid { grid-template-columns: 1fr; }
          .contact-panel { width: 100%; }
          .contact-panel .form-wrap { max-width: 100%; }
        }
      `}</style>

      <main className="contact-hero">
        <h1>Welcome to Dynamics 365</h1>
        <p>End to end document solutions built for your Dynamics 365 implementation.</p>
      </main>

      <section className="contact-panel">

        <div className="form-wrap">
          <h2>Send us a message</h2>
          {submitted ? (
            <div style={{ color: '#107c10', fontWeight: 600 }}>Thanks! Your inquiry has been sent. We’ll get in touch soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-group">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" required />
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company (optional)" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help" required />
              <button type="submit" className="contact-form-submit">Submit</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
