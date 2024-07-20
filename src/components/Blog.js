import React from 'react';

const Blog = () => {
  const styles = {
    blog: {
      padding: '40px',
      maxWidth: '1000px',
      margin: 'auto',
    },
    h2: {
      fontSize: '2.5em',
      marginBottom: '20px',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      flex: '1 1 calc(33.333% - 20px)',
      boxSizing: 'border-box',
      padding: '20px',
      margin: '10px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px 8px 0 0',
    },
    cardTitle: {
      fontSize: '1.5em',
      margin: '20px 0 10px',
    },
    cardText: {
      fontSize: '1em',
    },
    '@media (max-width: 768px)': {
      card: {
        flex: '1 1 100%',
      },
    },
  };

  return (
    <div style={styles.blog}>
      <h2 style={styles.h2}>QUADRA VITAL CARE SYNC SYSTEM - COMPONENTS AND FEATURES</h2>
      
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <img src="/images/ecg-electrodes.png" alt="ECG Electrodes" style={styles.cardImage} />
          <h3 style={styles.cardTitle}>ECG Electrodes</h3>
          <p style={styles.cardText}>ECG electrodes are used to detect electrical activity of the heart. They are placed on the skin at specific locations to capture the electrical signals generated during each heartbeat. These signals are then sent to the AD8232 sensor for processing.</p>
        </div>
        
        <div style={styles.card}>
          <img src="/images/ad8232-sensor.png" alt="AD8232 Sensor" style={styles.cardImage} />
          <h3 style={styles.cardTitle}>ECG Mechanism (AD8232 Sensor)</h3>
          <p style={styles.cardText}>The AD8232 sensor is used to measure the electrical activity of the heart. It amplifies and filters the signals from the ECG electrodes, producing a clear and accurate ECG waveform that is displayed on the screen. This sensor helps in detecting arrhythmias and other heart conditions.</p>
        </div>
        
        <div style={styles.card}>
          <img src="/images/max30102-sensor.png" alt="MAX30102 Sensor" style={styles.cardImage} />
          <h3 style={styles.cardTitle}>Oximeter (MAX30102 Sensor)</h3>
          <p style={styles.cardText}>The MAX30102 sensor is used to measure blood oxygen levels and pulse rate. It works on the principle of photoplethysmography, where it emits light into the skin and measures the amount of light absorbed by the blood. Variations in light absorption are used to calculate oxygen saturation and heart rate.</p>
        </div>
        
        <div style={styles.card}>
          <img src="/images/ambu-bag.png" alt="Ambu Bag" style={styles.cardImage} />
          <h3 style={styles.cardTitle}>Ambu Bag with Stepper Motor and Hinge/Shaft Mechanism</h3>
          <p style={styles.cardText}>The Ambu bag, connected to a stepper motor and hinge/shaft mechanism, is used for providing artificial ventilation to patients. The stepper motor automates the compression and release of the Ambu bag, ensuring a steady and controlled airflow to the patient.</p>
        </div>
        
        <div style={styles.card}>
          <img src="/images/ultrasonic.png" alt="Ultrasonic Sensor" style={styles.cardImage} />
          <h3 style={styles.cardTitle}>Saline Level Monitoring System (Ultrasonic Sensor)</h3>
          <p style={styles.cardText}>The ultrasonic sensor is used to monitor the saline level in the drip bag. It works by emitting ultrasonic waves and measuring the time taken for the waves to reflect back. This time measurement is used to calculate the distance to the saline surface, thus determining the saline level.</p>
        </div>
        
        <div style={styles.card}>
          <img src="/images/display-screen.png" alt="Display Screen" style={styles.cardImage} />
          <h3 style={styles.cardTitle}>Viewing Display Screens</h3>
          <p style={styles.cardText}>The display screens show the real-time data from the ECG and oximeter sensors. The ECG screen displays the heart's electrical activity in the form of a waveform, while the oximeter screen shows the oxygen level and pulse rate. These visual representations help in continuous monitoring and analysis of the patient's condition.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;