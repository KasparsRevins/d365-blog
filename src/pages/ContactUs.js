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
         /* ── Hero ── */
        .contact-hero {
          background: #f5f5f5;
          padding: 5rem 2rem;
          text-align: center;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
        }
        .contact-hero h1 {
          font-size: 4.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1.5rem 0;
          line-height: 1.15;
        }
        .contact-hero p {
          font-size: 1.4rem;
          color: #444;
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Form section ── */
        .contact-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* ── Left: info ── */
        .contact-info h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
        }
        .contact-info p {
          font-size: 1.05rem;
          color: #444;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          padding: 1.1rem 1.25rem;
        }
        .contact-detail-icon {
          font-size: 1.4rem;
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          background: #f0f7ff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-detail-item h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.2rem 0;
        }
        .contact-detail-item p {
          font-size: 0.9rem;
          color: #555;
          margin: 0;
          line-height: 1.4;
        }
        .contact-detail-item a {
          font-size: 0.9rem;
          color: #0078d4;
          text-decoration: none;
        }
        .contact-detail-item a:hover {
          text-decoration: underline;
        }

        /* ── Centered contact panel ── */
        .contact-panel {
          display: flex;
          justify-content: center;
        }
        .form-wrap {
          width: 50%;
          max-width: 560px;
          min-width: 320px;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 2.5rem;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .form-wrap h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1.75rem 0;
        }
        .contact-form-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form-group input,
        .contact-form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.95rem;
          box-sizing: border-box;
          transition: border-color 0.2s;
          outline: none;
        }
        .contact-form-group input:focus,
        .contact-form-group textarea:focus {
          border-color: #0078d4;
        }
        .contact-form-group textarea {
          resize: vertical;
          min-height: 130px;
        }
        .contact-form-submit {
          background: #0078d4;
          color: white;
          border: none;
          padding: 0.85rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: background 0.2s;
        }
        .contact-form-submit:hover {
          background: #006cbf;
        }
        .form-success {
          color: #107c10;
          font-weight: 600;
          font-size: 1rem;
          padding: 1rem;
          background: #f0fff0;
          border: 1px solid #c3e6cb;
          border-radius: 6px;
        }
        .form-disclaimer {
          font-size: 0.8rem;
          color: #888;
          text-align: center;
          margin-top: 0.5rem;
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .contact-hero h1 { font-size: 3rem; }
          .contact-hero p  { font-size: 1.2rem; }
          .contact-body    { gap: 2.5rem; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .contact-hero {
            padding: 3rem 0;
          }
          .contact-hero h1 { font-size: 2rem; }
          .contact-hero p  { font-size: 1rem; width: 65%; margin: 0 auto; }

          .contact-body {
            grid-template-columns: 1fr;
            padding: 2.5rem 1.25rem;
            gap: 2rem;
          }
          .contact-info h2 { font-size: 1.5rem; }
          .contact-form-card { padding: 1.5rem; }
        }

        @media (max-width: 480px) {
          .contact-hero p { width: 75%; }
        }
      `}</style>

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have a question or ready to start a project? We'd love to hear from you.</p>
      </section>

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
