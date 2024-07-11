import React from 'react';

const Blog = () => {
  const styles = {
    blog: {
      padding: '40px',
    },
    h2: {
      fontSize: '2.5em',
      marginBottom: '20px',
    },
    componentSection: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '40px',
    },
    textLeft: {
      flex: 1,
      paddingRight: '20px',
    },
    textRight: {
      flex: 1,
      paddingLeft: '20px',
    },
    image: {
      flex: 1,
      width: '350px', 
      height: '450px', 
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.blog}>
      <h2 style={styles.h2}>QUADRA VITAL CARE SYNC SYSTEM-COMPONENTS AND ITS FEATURES</h2>
      
      <div style={styles.componentSection}>
        <div style={styles.textLeft}>
          <h3>ECG Electrodes</h3>
          <p>ECG electrodes are used to detect electrical activity of the heart. They are placed on the skin at specific locations to capture the electrical signals generated during each heartbeat. These signals are then sent to the AD8232 sensor for processing.</p>
        </div>
        <img src="/images/ecg-electrodes.png" alt="ECG Electrodes" style={styles.image} />
      </div>
      
      <div style={styles.componentSection}>
        <img src="/images/ad8232-sensor.png" alt="AD8232 Sensor" style={styles.image} />
        <div style={styles.textRight}>
          <h3>ECG Mechanism (AD8232 Sensor)</h3>
          <p>The AD8232 sensor is used to measure the electrical activity of the heart. It amplifies and filters the signals from the ECG electrodes, producing a clear and accurate ECG waveform that is displayed on the screen. This sensor helps in detecting arrhythmias and other heart conditions.</p>
        </div>
      </div>
      
      <div style={styles.componentSection}>
        <div style={styles.textLeft}>
          <h3>Oximeter (MAX30102 Sensor)</h3>
          <p>The MAX30102 sensor is used to measure blood oxygen levels and pulse rate. It works on the principle of photoplethysmography, where it emits light into the skin and measures the amount of light absorbed by the blood. Variations in light absorption are used to calculate oxygen saturation and heart rate.</p>
        </div>
        <img src="/images/max30102-sensor.png" alt="MAX30102 Sensor" style={styles.image} />
      </div>
      
      <div style={styles.componentSection}>
        <img src="/images/ambu-bag.png" alt="Ambu Bag" style={styles.image} />
        <div style={styles.textRight}>
          <h3>Ambu Bag with Stepper Motor and Hinge/Shaft Mechanism</h3>
          <p>The Ambu bag, connected to a stepper motor and hinge/shaft mechanism, is used for providing artificial ventilation to patients. The stepper motor automates the compression and release of the Ambu bag, ensuring a steady and controlled airflow to the patient.</p>
        </div>
      </div>
      
      <div style={styles.componentSection}>
        <div style={styles.textLeft}>
          <h3>Saline Level Monitoring System (Ultrasonic Sensor)</h3>
          <p>The ultrasonic sensor is used to monitor the saline level in the drip bag. It works by emitting ultrasonic waves and measuring the time taken for the waves to reflect back. This time measurement is used to calculate the distance to the saline surface, thus determining the saline level.</p>
        </div>
        <img src="/images/ultrasonic.png" alt="Ultrasonic Sensor" style={styles.image} />
      </div>
      
      <div style={styles.componentSection}>
        <img src="/images/display-screen.png" alt="Display Screen" style={styles.image} />
        <div style={styles.textRight}>
          <h3>Viewing Display Screens</h3>
          <p>The display screens show the real-time data from the ECG and oximeter sensors. The ECG screen displays the heart's electrical activity in the form of a waveform, while the oximeter screen shows the oxygen level and pulse rate. These visual representations help in continuous monitoring and analysis of the patient's condition.</p>
        </div>
      </div>

      <h3 style={styles.h2}>Maintenance and Troubleshooting</h3>
      <p style={styles.p}>
        Regularly check all connections and sensors to ensure they are functioning correctly. Clean the electrodes and sensors after each use to maintain hygiene and sensor accuracy. If any sensor fails to display data, check the power supply and connections. Refer to the sensor’s manual for specific troubleshooting steps.
      </p>

      <h3 style={styles.h2}>Safety Precautions</h3>
      <p style={styles.p}>
        Ensure all components are securely connected to avoid accidental disconnections during monitoring. Ensure the machine is properly insulated to prevent electrical hazards. Have an emergency protocol in place in case of any abnormal readings or equipment failure.
      </p>
    </div>
  );
};

export default Blog;
