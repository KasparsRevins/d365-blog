import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  const services = [
    { id: 1, title: "Document Solutions", icon: "📄", description: "End-to-end output document solutions for every stage of your workflow." },
    { id: 2, title: "System Capabilities", icon: "⚙️", description: "Detailed documentation of your Dynamics 365 system capabilities." },
    { id: 3, title: "Configuration Packages", icon: "📦", description: "Ready-made configuration bundles to accelerate your deployment." },
    { id: 4, title: "Training & Videos", icon: "🎬", description: "Step-by-step training documentation and onboarding video guides." }
  ];

  const stats = [
    { value: "50+", label: "Clients Served" },
    { value: "200+", label: "Documents Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Years Experience" }
  ];

  return (
    <div className="about">
      <style>{`
        /* ── Hero ── */
        .about-hero {
          background: #f5f5f5;
          padding: 5rem 2rem;
          text-align: center;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
        }
        .about-hero h1 {
          font-size: 4.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1.5rem 0;
          line-height: 1.15;
        }
        .about-hero p {
          font-size: 1.4rem;
          color: #444;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Stats bar ── */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          max-width: 1100px;
          margin: 3rem auto;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          background: white;
        }
        .stat-item {
          padding: 2rem;
          text-align: center;
          border-right: 1px solid #e0e0e0;
        }
        .stat-item:last-child { border-right: none; }
        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0078d4;
          display: block;
        }
        .stat-label {
          font-size: 0.9rem;
          color: #666;
          margin-top: 0.25rem;
        }

        /* ── Content wrapper ── */
        .about-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Mission section ── */
        .mission-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding: 4rem 0;
          border-bottom: 1px solid #e0e0e0;
        }
        .mission-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
          line-height: 1.2;
        }
        .mission-text p {
          font-size: 1.1rem;
          color: #444;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .mission-image {
          background: linear-gradient(135deg, #e8f4fd 0%, #c9e4f5 100%);
          border-radius: 16px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
        }

        /* ── Services grid ── */
        .services-section {
          padding: 4rem 0;
          border-bottom: 1px solid #e0e0e0;
        }
        .services-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.75rem 0;
        }
        .services-section > p {
          font-size: 1.1rem;
          color: #444;
          margin: 0 0 2.5rem 0;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .service-card {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 1.75rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          transition: box-shadow 0.2s;
        }
        .service-card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        .service-icon {
          font-size: 2rem;
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          background: #f0f7ff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 0.4rem 0;
        }
        .service-card p {
          font-size: 0.95rem;
          color: #555;
          margin: 0;
          line-height: 1.5;
        }

        /* ── Full-width callout ── */
        .callout-section {
          background: #f5f5f5;
          padding: 5rem 2rem;
          text-align: center;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
        }
        .callout-section h2 {
          font-size: 3rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
        }
        .callout-section p {
          font-size: 1.2rem;
          color: #444;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Contact form ── */
        .contact-section {
          padding: 4rem 0;
        }
        .contact-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.75rem 0;
        }
        .contact-section > p {
          font-size: 1.1rem;
          color: #444;
          margin: 0 0 2.5rem 0;
        }
        .form-card {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 2.5rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: #1a1a1a;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.95rem;
          background: white;
          box-sizing: border-box;
          transition: border-color 0.2s;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #0078d4;
        }
        .radio-group {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .radio-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 400;
          cursor: pointer;
        }
        .submit-btn {
          width: 100%;
          padding: 0.9rem;
          background: #0078d4;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .submit-btn:hover:not(:disabled) { background: #006cbf; }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .form-disclaimer {
          margin-top: 1rem;
          font-size: 0.82rem;
          color: #888;
          text-align: center;
        }

        /* ── Connect cards ── */
        .connect-section {
          padding: 4rem 0 2rem;
        }
        .connect-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.75rem 0;
          text-align: center;
        }
        .connect-section > p {
          font-size: 1.1rem;
          color: #444;
          text-align: center;
          margin: 0 0 2.5rem 0;
        }
        .connect-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .connect-card {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: box-shadow 0.2s;
        }
        .connect-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        .connect-card .icon { font-size: 2.25rem; margin-bottom: 0.75rem; }
        .connect-card h4 { font-size: 1.05rem; font-weight: 600; margin: 0 0 0.5rem 0; color: #1a1a1a; }
        .connect-card a { color: #0078d4; text-decoration: none; font-size: 0.9rem; }
        .connect-card a:hover { text-decoration: underline; }
        .connect-card p { color: #555; font-size: 0.9rem; margin: 0; line-height: 1.5; }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .about-hero h1 { font-size: 3rem; }
          .about-hero p { font-size: 1.2rem; }
          .mission-text h2,
          .services-section h2,
          .contact-section h2,
          .connect-section h2 { font-size: 2rem; }
          .callout-section h2 { font-size: 2.5rem; }
          .stat-value { font-size: 2rem; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .about-hero { padding: 3rem 0; }
          .about-hero h1 { font-size: 2rem; }
          .about-hero p { font-size: 1rem; width: 65%; margin: 0 auto; }

          .stats-bar {
            grid-template-columns: repeat(2, 1fr);
            margin: 2rem 1.25rem;
          }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(3),
          .stat-item:nth-child(4) { border-top: 1px solid #e0e0e0; }
          .stat-item:nth-child(4) { border-right: none; }

          .about-content { padding: 0 1.25rem; }

          .mission-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2.5rem 0;
          }
          .mission-image { display: none; }
          .mission-text h2 { font-size: 1.5rem; }

          .services-section { padding: 2.5rem 0; }
          .services-section h2 { font-size: 1.5rem; }
          .services-grid { grid-template-columns: 1fr; }

          .callout-section {
            padding: 3rem 0;
          }
          .callout-section h2 { font-size: 1.75rem; }
          .callout-section p { font-size: 1rem; width: 65%; }

          .contact-section { padding: 2.5rem 0; }
          .contact-section h2 { font-size: 1.5rem; }
          .form-card { padding: 1.5rem; }
          .form-row { grid-template-columns: 1fr; }

          .radio-group { flex-direction: column; gap: 0.75rem; }

          .connect-section { padding: 2.5rem 0 1.5rem; }
          .connect-section h2 { font-size: 1.5rem; }
          .connect-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .about-hero p,
          .callout-section p { width: 75%; }
          .stats-bar { margin: 2rem 0; border-radius: 0; border-left: none; border-right: none; }
        }
      `}</style>

      <ToastContainer position="top-right" autoClose={5000} />

      {/* Hero */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Microsoft-certified experts helping organisations maximise their
          Dynamics 365 investment — from implementation to ongoing optimisation.
        </p>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="about-content">

        {/* Mission */}
        <div className="mission-section">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              We exist to make enterprise-grade Dynamics 365 document solutions accessible
              to every organisation — without the enterprise price tag or complexity.
            </p>
            <p>
              From system capability documentation to fully branded email templates and
              data migration strategies, we deliver the artefacts your team needs to
              deploy confidently and operate efficiently.
            </p>
            <p>
              As a Microsoft Gold Partner, we have direct access to engineering teams,
              early previews, and specialised training to ensure our deliverables always
              reflect best practice.
            </p>
          </div>
          <div className="mission-image">🏢</div>
        </div>

        {/* Services */}
        <div className="services-section">
          <h2>What We Deliver</h2>
          <p>Every engagement is scoped, priced, and delivered to a fixed standard.</p>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.id} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div className="connect-section">
          <h2>Other Ways to Connect</h2>
          <p>Prefer a different channel? We're easy to reach.</p>
          <div className="connect-grid">
            <div className="connect-card">
              <div className="icon">📧</div>
              <h4>Email Us</h4>
              <a href="mailto:contact@dynamics365insights.com">contact@dynamics365insights.com</a>
            </div>
            <div className="connect-card">
              <div className="icon">📞</div>
              <h4>Call Us</h4>
              <p>+1 (555) 123-4567<br />Mon–Fri, 9AM–6PM EST</p>
            </div>
            <div className="connect-card">
              <div className="icon">💼</div>
              <h4>LinkedIn</h4>
              <a href="https://linkedin.com/company/dynamics365insights" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom callout */}
      <section className="callout-section" style={{ marginTop: '3rem' }}>
        <h2>All for a fraction of a standard implementation cost</h2>
        <p>
          Enterprise-grade Dynamics 365 documents, templates, and training resources —
          without the enterprise price tag.
        </p>
      </section>

    </div>
  );
};

export default About;