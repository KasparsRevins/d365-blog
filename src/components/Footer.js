import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#f5f5f5',
      borderTop: '1px solid #e0e0e0',
      padding: '0.75rem 2rem',
    }}>
      <style>{`
        .footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-bar a {
          font-size: 0.8rem;
          color: #444;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .footer-bar a:hover {
          color: #0078d4;
          text-decoration: underline;
        }
        .footer-copyright {
          font-size: 0.8rem;
          color: #444;
          white-space: nowrap;
        }
        .footer-divider {
          width: 1px;
          height: 12px;
          background: #ccc;
        }

        @media (max-width: 1024px) {
          .footer-bar {
            gap: 1rem;
          }
          .footer-left,
          .footer-right {
            gap: 1rem;
          }
        }

        /* Mobile: match the reference screenshot layout */
        @media (max-width: 768px) {
          footer {
            padding: 1.25rem 1.25rem 1.5rem;
          }
          .footer-bar {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.75rem;
          }

          /* Top group: left-side links stacked vertically */
          .footer-left {
            flex-direction: column;
            align-items: center;
            gap: 0.85rem;
            width: 100%;
            padding-bottom: 1rem;
          }

          /* Bottom group: right-side links in a single wrapping row */
          .footer-right {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem 1rem;
            width: 100%;
            padding-top: 0.85rem;
            border-top: 1px solid #e0e0e0;
          }

          .footer-divider {
            display: none;
          }

          .footer-bar a {
            font-size: 0.82rem;
          }

          .footer-copyright {
            font-size: 0.82rem;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .footer-bar a,
          .footer-copyright {
            font-size: 0.78rem;
          }
        }
      `}</style>

      <div className="footer-bar">
        <div className="footer-right">
          <span className="footer-copyright">© {currentYear} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;