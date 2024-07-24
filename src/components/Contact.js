import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const styles = {
    contact: {
      padding: '40px',
      textAlign: 'center',
      maxWidth: '1000px',
      margin: 'auto',
    },
    h2: {
      fontSize: '2.5em',
      marginBottom: '20px',
    },
    p: {
      fontSize: '1.2em',
      marginBottom: '20px',
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginTop: '20px',
    },
    card: {
      position: 'relative',
      width: '200px',
      padding: '20px',
      backgroundColor: 'blue',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '10px',
      textAlign: 'center',
      margin: '10px',
      transition: 'transform 0.3s',
      color: 'white',
      overflow: 'hidden',
    },
    img: {
      width: '80%',
      borderRadius: '50%',
    },
    name: {
      marginTop: '10px',
      fontSize: '1.2em',
      fontWeight: 'bold',
    },
    role: {
      fontSize: '1em',
      fontStyle: 'italic',
    },
    handle: {
      fontSize: '0.8em',
      color: 'lightgray',
    },
    iconBox: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      display: 'flex',
      gap: '5px',
    },
    icon: {
      width: '20px',
      height: '20px',
      color: 'white',
    },
    badge: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      backgroundColor: 'orange',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '0.8em',
    },
    '@media (max-width: 768px)': {
      h2: {
        fontSize: '1.8em',
      },
      p: {
        fontSize: '1em',
      },
      card: {
        width: '150px',
        padding: '15px',
      },
      name: {
        fontSize: '1em',
      },
    },
  };

  const people = [
    {
      name: 'Sandipan Dubey',
      role: 'Leader',
      handle: '@Aragya',
      img: '/images/sandipan.jpg',
      linkedin: 'https://www.linkedin.com/in/sandipan-dubey-2314442ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      twitter: 'https://twitter.com/sandipan',
      instagram: 'https://www.instagram.com/lucifercount004/?hl=en',
    },
    {
      name: 'Soham Aich',
      role: 'Co-Leader',
      handle: '@Aragya',
      img: '/images/soham.jpg',
      linkedin: 'https://www.linkedin.com/in/soham-aich-36a712292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      twitter: 'https://twitter.com/soham',
      instagram: 'https://www.instagram.com/aich__soham/?hl=en',
    },
    {
      name: 'Ritam Das',
      role: 'Developer',
      handle: '@Aragya',
      img: '/images/ritam.jpg',
      linkedin: 'https://www.instagram.com/r_1_d_x_codec/?hl=en',
      twitter: 'https://twitter.com/ritam',
      instagram: 'https://instagram.com/ritam',
    },
    {
      name: 'Srijeeta Das',
      role: 'Designer',
      handle: '@Aragya',
      img: '/images/srijeeta.jpg',
      linkedin: 'https://www.linkedin.com/in/srijeeta-das-0a6a33292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      twitter: 'https://twitter.com/srijeeta',
      instagram: 'https://www.instagram.com/_insane_soul.___/?hl=en',
    },
  ];

  return (
    <div style={styles.contact}>
      <h2 style={styles.h2}>TEAM ARAGYA</h2>
      <p style={styles.p}>PRESENTING THE MEMBERS, WHOSE CONTRIBUTIONS HAVE MADE THE PROJECT A GRAND SUCCESS</p>
      <div style={styles.cardContainer}>
        {people.map((person, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.badge}>{person.role}</div>
            <div style={styles.iconBox}>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={styles.icon} />
              </a>
              <a href={person.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter style={styles.icon} />
              </a>
              <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram style={styles.icon} />
              </a>
            </div>
            <img src={person.img} alt={person.name} style={styles.img} />
            <div style={styles.name}>{person.name}</div>
            <div style={styles.role}>{person.role}</div>
            <div style={styles.handle}>{person.handle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
