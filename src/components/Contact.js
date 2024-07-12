import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const styles = {
    contact: {
      padding: '40px',
      textAlign: 'center',
    },
    h2: {
      fontSize: '2.5em',
      marginBottom: '20px',
    },
    p: {
      fontSize: '1.2em',
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
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '10px',
      textAlign: 'center',
      margin: '10px',
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
    icon: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      width: '20px',
      height: '20px',
    },
  };

  const people = [
    {
      name: 'Sandipan Dubey (Leader)',
      img: '/images/sandipan.jpg',
      linkedin: 'https://www.linkedin.com/in/sandipan-dubey-2314442ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Soham Aich',
      img: '/images/soham.jpg',
      linkedin: 'https://www.linkedin.com/in/soham-aich-36a712292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Ritam Das',
      img: '/images/ritam.jpg',
      linkedin: 'https://www.linkedin.com/in/ritam-das-30874628a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Srijeeta Das',
      img: '/images/srijeeta.jpg',
      linkedin: 'https://www.linkedin.com/in/srijeeta-das-0a6a33292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
    },
  ];

  return (
    <div style={styles.contact}>
      <h2 style={styles.h2}>TEAM ARAGYA</h2>
      <p style={styles.p}>PRESENTING THE MEMBERS, WHOSE CONTRIBUTIONS HAVE MADE THE PROJECT A GRAND SUCCESS</p>
      <div style={styles.cardContainer}>
        {people.map((person, index) => (
          <div key={index} style={styles.card}>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={styles.icon} /> 
            </a>
            <img src={person.img} alt={person.name} style={styles.img} />
            <div style={styles.name}>{person.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
