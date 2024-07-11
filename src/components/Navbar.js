import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '15px 30px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    brand: {
      fontSize: '1.8em',
      fontWeight: 'bold',
      color: '#000000',
    },
    link: {
      margin: '0 15px',
      textDecoration: 'none',
      color: '#000000',
      fontWeight: 500,
      transition: 'color 0.3s',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>Chetan.</div>
      <div>
        <Link to="/" style={styles.link}>Work</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/blog" style={styles.link}>Blog</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
