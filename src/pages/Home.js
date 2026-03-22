const Home = () => {

  const splitOfferings = [
    {
      id: 5,
      title: "Custom Enhanced Email Templates",
      description: "Branded, responsive email templates built to deliver consistent communications across all touchpoints.",
      bg: "linear-gradient(135deg, #f3e8fd 0%, #dbb8f5 100%)",
      icon: (
        <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="24" width="52" height="36" rx="5" fill="#7b2fbe" opacity="0.2" />
          <rect x="18" y="28" width="44" height="28" rx="4" fill="#7b2fbe" opacity="0.85" />
          <path d="M18 32 L40 47 L62 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Training Documentation Videos",
      description: "Step-by-step video guides and documentation to onboard your team and maximize platform adoption.",
      bg: "linear-gradient(135deg, #fdecea 0%, #f5b8b0 100%)",
      icon: (
        <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="22" width="56" height="36" rx="6" fill="#d83b01" opacity="0.2" />
          <rect x="16" y="26" width="48" height="28" rx="5" fill="#d83b01" opacity="0.85" />
          <circle cx="40" cy="40" r="9" fill="white" opacity="0.25" />
          <path d="M37 35.5 L37 44.5 L46 40 Z" fill="white" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Data Migration Document Related Strategy",
      description: "Structured migration planning and documentation to ensure smooth, risk-free data transitions.",
      bg: "linear-gradient(135deg, #e8f6fd 0%, #a8d8f0 100%)",
      icon: (
        <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="28" rx="22" ry="9" fill="#0078d4" opacity="0.2" />
          <ellipse cx="40" cy="28" rx="22" ry="9" stroke="#0078d4" strokeWidth="2.5" fill="none" />
          <path d="M18 28 L18 52 Q18 61 40 61 Q62 61 62 52 L62 28" stroke="#0078d4" strokeWidth="2.5" fill="none" />
          <ellipse cx="40" cy="52" rx="22" ry="9" fill="#0078d4" opacity="0.15" />
          <path d="M34 40 L40 46 L46 40 M40 30 L40 46" stroke="#0078d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const offerings = [
    {
      id: 1,
      title: "End to End Output Document Solutions",
      description: "Comprehensive document solutions that cover every stage of your output workflow from start to finish.",
      bg: "linear-gradient(135deg, #e8f4fd 0%, #c9e4f5 100%)",
      icon: (
        <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="10" width="38" height="48" rx="4" fill="#0078d4" opacity="0.15" />
          <rect x="20" y="15" width="38" height="48" rx="4" fill="#0078d4" opacity="0.25" />
          <rect x="25" y="20" width="38" height="48" rx="4" fill="#0078d4" opacity="0.9" />
          <rect x="31" y="30" width="26" height="3" rx="1.5" fill="white" />
          <rect x="31" y="37" width="20" height="3" rx="1.5" fill="white" />
          <rect x="31" y="44" width="23" height="3" rx="1.5" fill="white" />
        </svg>
      )
    },
    {
      id: 2,
      title: "System Capabilities Document",
      description: "Detailed documentation outlining the full scope and capabilities of your Dynamics 365 system.",
      bg: "linear-gradient(135deg, #f0f7ff 0%, #d6eaf8 100%)",
      icon: (
        <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="28" fill="#0078d4" opacity="0.12" />
          <circle cx="40" cy="40" r="18" fill="#0078d4" opacity="0.2" />
          <circle cx="40" cy="40" r="10" fill="#0078d4" opacity="0.9" />
          <rect x="38.5" y="16" width="3" height="8" rx="1.5" fill="#0078d4" />
          <rect x="38.5" y="56" width="3" height="8" rx="1.5" fill="#0078d4" />
          <rect x="16" y="38.5" width="8" height="3" rx="1.5" fill="#0078d4" />
          <rect x="56" y="38.5" width="8" height="3" rx="1.5" fill="#0078d4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Ready Made Configuration Package",
      description: "Pre-built configuration bundles that accelerate your deployment and reduce setup time significantly.",
      bg: "linear-gradient(135deg, #eaf6ee 0%, #c8e6c9 100%)",
      icon: (
        <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="30" width="44" height="32" rx="4" fill="#107c41" opacity="0.2" />
          <rect x="22" y="34" width="36" height="24" rx="3" fill="#107c41" opacity="0.8" />
          <path d="M30 22 L40 18 L50 22 L50 32 L30 32 Z" fill="#107c41" />
          <rect x="33" y="40" width="14" height="2.5" rx="1.25" fill="white" />
          <rect x="33" y="46" width="10" height="2.5" rx="1.25" fill="white" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Custom Enhanced Document Templates",
      description: "Professionally designed document templates tailored to your brand and business requirements.",
      bg: "linear-gradient(135deg, #fef9e7 0%, #fde8a0 100%)",
      icon: (
        <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="15" width="40" height="50" rx="4" fill="#f59d00" opacity="0.2" />
          <rect x="24" y="19" width="32" height="42" rx="3" fill="#f59d00" opacity="0.85" />
          <rect x="29" y="27" width="22" height="2.5" rx="1.25" fill="white" />
          <rect x="29" y="33" width="18" height="2.5" rx="1.25" fill="white" />
          <rect x="29" y="39" width="20" height="2.5" rx="1.25" fill="white" />
          <circle cx="56" cy="56" r="10" fill="#f59d00" />
          <path d="M52 56 L55 59 L60 53" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="home">
      <style>{`
        .hero-section {
          background: #f5f5f5;
          padding: 5rem 2rem;
          text-align: center;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
        }
        .hero-section h1 {
          font-size: 4.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1.5rem 0;
          line-height: 1.15;
        }
        .hero-section p {
          font-size: 1.4rem;
          color: #444;
          max-width: 640px;
          margin: 0 auto 2rem auto;
          line-height: 1.65;
        }

        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem 3rem;
          padding: 3rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .offering-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .offering-card-image {
          border-radius: 12px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .offering-card h2 {
          font-size: 1.85rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }
        .offering-card p {
          font-size: 1.2rem;
          color: #444;
          margin: 0;
          line-height: 1.5;
        }

        .full-width-section {
          background: #f5f5f5;
          padding: 5rem 2rem;
          text-align: center;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
        }
        .full-width-section h2 {
          font-size: 4.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1.5rem 0;
          line-height: 1.15;
        }
        .full-width-section p {
          font-size: 1.2rem;
          color: #444;
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .split-section {
          padding: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .split-row {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .split-row.text-first { flex-direction: row; }
        .split-row.image-first { flex-direction: row-reverse; }
        .split-image {
          border-radius: 16px;
          flex: 1;
          min-height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .split-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
        }
        .split-text h2 {
          font-size: 1.85rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }
        .split-text p {
          font-size: 1.2rem;
          color: #444;
          margin: 0;
          line-height: 1.65;
        }

        .questions-section {
          background: #f5f5f5;
          padding: 5rem 2rem;
          text-align: center;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
        }
        .questions-section h2 {
          font-size: 4.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 3rem 0;
          line-height: 1.15;
        }
        .questions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
          text-align: left;
        }
        .question-card {
          background: white;
          border-radius: 8px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .question-card h3 {
          font-size: 1.85rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }
        .question-card p {
          font-size: 1.2rem;
          color: #444;
          margin: 0;
          line-height: 1.6;
          flex-grow: 1;
        }
        .question-card a {
          color: #0078d4;
          font-size: 0.9rem;
          text-decoration: none;
          font-weight: 500;
        }

        .mobile-inner {
          width: 100%;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-section h1,
          .full-width-section h2,
          .questions-section h2 {
            font-size: 3rem;
          }
          .offerings-grid { gap: 2rem; }
          .split-text h2,
          .offering-card h2,
          .question-card h3 {
            font-size: 1.5rem;
          }
          .questions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero-section,
          .full-width-section,
          .questions-section {
            padding: 3rem 0;
          }
          .mobile-inner {
            width: 65%;
            margin: 0 auto;
          }
          .hero-section h1,
          .full-width-section h2,
          .questions-section h2 {
            font-size: 2rem;
          }
          .hero-section p,
          .full-width-section p {
            font-size: 1rem;
          }

          /* Hide images on mobile */
          .offering-card-image {
            display: none;
          }
          .split-image {
            display: none;
          }

          /* Offerings grid — text only */
          .offerings-grid {
            grid-template-columns: 1fr;
            padding: 2rem 0;
            gap: 1.5rem;
            width: 65%;
            margin: 0 auto;
          }

          /* Split section — text only, full width */
          .split-section {
            padding: 1.25rem 0;
            width: 65%;
            margin: 0 auto;
          }
          .split-row.text-first,
          .split-row.image-first {
            flex-direction: column;
            margin-bottom: 1.5rem;
          }
          .split-text {
            padding: 0;
            width: 100%;
          }
          .split-text h2,
          .offering-card h2,
          .question-card h3 {
            font-size: 1.25rem;
          }
          .split-text p,
          .offering-card p,
          .question-card p {
            font-size: 1rem;
          }

          /* Questions grid */
          .questions-grid {
            grid-template-columns: 1fr;
            width: 65%;
            margin: 0 auto;
            text-align: left;
          }
          .questions-section h2 {
            font-size: 1.75rem;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .mobile-inner,
          .offerings-grid,
          .split-section,
          .questions-grid {
            width: 75%;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="hero-section">
        <div className="mobile-inner">
          <h1>Welcome to Dynamics 365</h1>
          <p>End to end document solutions built for your Dynamics 365 implementation.</p>
        </div>
      </section>

      {/* Offerings Grid — 4 cards */}
      <section className="offerings-grid">
        {offerings.map(item => (
          <div key={item.id} className="offering-card">
            <div className="offering-card-image" style={{ background: item.bg }}>
              {item.icon}
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      {/* Fraction of a cost */}
      <section className="full-width-section">
        <div className="mobile-inner">
          <h2>All for a fraction of a cost of standard implementation!</h2>
          <p>
            Get enterprise-grade Dynamics 365 documents, templates, and training resources —
            without the enterprise price tag.
          </p>
        </div>
      </section>

      {/* Split Layout — last 3 offerings */}
      <section className="split-section">
        {splitOfferings.map((item, index) => (
          <div
            key={item.id}
            className={`split-row ${index % 2 === 0 ? 'text-first' : 'image-first'}`}
          >
            <div className="split-image" style={{ background: item.bg }}>
              {item.icon}
            </div>
            <div className="split-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Questions */}
      <section className="questions-section">
        <div className="mobile-inner">
          <h2>Questions? We have answers</h2>
        </div>
        <div className="questions-grid">
          {[
            {
              title: 'Click for more details',
              description: 'Explore everything included in our Dynamics 365 document solutions and find the right fit for your business needs.',
              link: 'View details',
              href: '#details',
            },
            {
              title: 'Contact us',
              description: 'Have questions about our packages or need a custom quote? Reach out and our team will get back to you promptly.',
              link: 'Get in touch',
              href: '#contact',
            },
            {
              title: 'About us',
              description: 'Learn more about who we are, our expertise in Dynamics 365, and our mission to make implementations accessible.',
              link: 'Learn more',
              href: '#about',
            },
          ].map((card, i) => (
            <div key={i} className="question-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.href}>{card.link}</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;