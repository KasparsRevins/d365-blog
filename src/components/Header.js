import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useClickAway } from 'react-use';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setMenuOpen(false));

  const navLinks = [
    { title: 'Home', to: '/' },
    { title: 'Contact Us', to: '/contact' },
    { title: 'About Us', to: '/about' },
  ];

  return (
    <header className="header">
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: white;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          height: 64px;
          overflow: visible;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: nowrap;
          position: relative;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-text {
          white-space: nowrap;
          font-size: 0.95rem;
        }
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-links-desktop a {
          text-decoration: none;
          color: #444;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links-desktop a:hover,
        .nav-links-desktop a.active {
          color: #0078d4;
        }
        .hamburger-wrapper {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1010;
        }
        .mobile-menu {
          position: absolute;
          left: 0;
          right: 0;
          top: 64px;
          background: white;
          border-bottom: 1px solid #f0f0f0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 999;
          padding: 0.5rem 0;
        }
        .mobile-menu ul {
          list-style: none;
          margin: 0;
          padding: 0.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-menu li {
          border-radius: 8px;
          border: 1px solid #f0f0f0;
        }
        .mobile-menu a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          text-decoration: none;
          color: #1a1a1a;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .mobile-menu a:hover {
          background: #f5f5f5;
        }
        .mobile-menu a.active {
          color: #0078d4;
        }
        @media (max-width: 768px) {
          .hamburger-wrapper {
            display: flex;
          }
          .nav-links-desktop {
            display: none;
          }
          .nav-container {
            justify-content: flex-start;
            padding: 0 1rem;
            position: relative;
          }
          .logo {
            margin-right: 0;
          }
        }
        @media (max-width: 480px) {
          .nav-container {
            padding: 0 0.75rem;
          }
        }
      `}</style>

      <div className="nav-container" ref={ref}>
        {/* Logo — always left */}
        <NavLink to="/" className="logo">
          <div className="logo-icon">D365</div>
          <div className="logo-text">Dynamics <span>365</span> Insights</div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="nav-links-desktop">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={link.to === '/'}
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger — mobile only, always right */}
        <div className="hamburger-wrapper">
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={20}
            color="#1a1a1a"
          />
        </div>
      </div>

      {/* Animated mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.to}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.05 + idx / 10,
                  }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                    end={link.to === '/'}
                  >
                    {link.title}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;