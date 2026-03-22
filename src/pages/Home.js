
const Home = () => {

  const splitOfferings = [
    {
      id: 5,
      title: "Custom Enhanced Email Templates",
      description: "Branded, responsive email templates built to deliver consistent communications across all touchpoints.",
      imagePosition: "right", // image on right, text on left
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
      imagePosition: "left", // image on left, text on right
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
      imagePosition: "right", // image on right, text on left  — last item: image left, no right column
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
      <section style={{
        background: '#f5f5f5',
        padding: '5rem 2rem',
        textAlign: 'center',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw',
      }}>
        <h1 style={{
          fontSize: '4.5rem',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0 0 1.5rem 0',
          lineHeight: '1.15',
        }}>
          Welcome to Dynamics 365
        </h1>
        <p style={{
          fontSize: '1.4rem',
          color: '#444',
          maxWidth: '640px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.65',
        }}>
          End to end document solutions built for your Dynamics 365 implementation.
        </p>
      </section>

      {/* Offerings Section — Microsoft-style card grid */}
      <section style={{ padding: '3rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem 3rem',
        }}>
          {offerings.map(item => (
            <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Image / Illustration card */}
              <div style={{
                background: item.bg,
                borderRadius: '12px',
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                {item.icon}
              </div>
              {/* Text below the card */}
              <h2 style={{
                fontSize: '1.85rem',
                fontWeight: '600',
                color: '#1a1a1a',
                margin: 0,
              }}>
                {item.title}
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#444',
                margin: 0,
                lineHeight: '1.5',
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* "Fraction of a cost" Section */}
      <section style={{
        background: '#f5f5f5',
        padding: '5rem 2rem',
        textAlign: 'center',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw',
      }}>
        <h2 style={{
          fontSize: '4.5rem',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0 0 1.5rem 0',
          lineHeight: '1.15',
        }}>
          All for a fraction of a cost of standard implementation!
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#444',
          maxWidth: '640px',
          margin: '0 auto',
          lineHeight: '1.65',
        }}>
          Get enterprise-grade Dynamics 365 documents, templates, and training resources —
          without the enterprise price tag.
        </p>
      </section>

      {/* Split Layout Section — last 3 offerings */}
      <section style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
        {splitOfferings.map((item, index) => {
          const imageBlock = (
            <div style={{
              background: item.bg,
              borderRadius: '16px',
              flex: 1,
              minHeight: '220px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {item.icon}
            </div>
          );

          const textBlock = (
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
            }}>
              <h2 style={{
                fontSize: '1.85rem',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: 0,
              }}>
                {item.title}
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#444',
                margin: 0,
                lineHeight: '1.65',
              }}>
                {item.description}
              </p>
            </div>
          );

          const isTextFirst = index % 2 === 0;

          return (
            <div key={item.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginBottom: '3rem',
              flexDirection: isTextFirst ? 'row' : 'row-reverse',
            }}>
              {imageBlock}
              {textBlock}
            </div>
          );
        })}
      </section>

      {/* Questions Section */}
      <section style={{
        background: '#f5f5f5',
        padding: '5rem 2rem',
        textAlign: 'center',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw',
      }}>
        <h2 style={{
          fontSize: '4.5rem',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0 0 3rem 0',
          lineHeight: '1.15',
        }}>
          Questions? We have answers
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'left',
        }}>
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
            <div key={i} style={{
              background: 'white',
              borderRadius: '8px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}>
              <h3 style={{
                fontSize: '1.85rem',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: 0,
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: '1.2rem',
                color: '#444',
                margin: 0,
                lineHeight: '1.6',
                flexGrow: 1,
              }}>
                {card.description}
              </p>
              <a href={card.href} style={{
                color: '#0078d4',
                fontSize: '0.9rem',
                textDecoration: 'none',
                fontWeight: '500',
              }}>
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;