

import React from 'react';

const About = () => {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    padding: '20px',
    textAlign: 'left',
    flex: '1 1 calc(33.333% - 40px)',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '15px',
  };

  const contentStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>SOME COMMON HEALTH MEASURES AND INSTRUCTIONS</h1>
      <div style={cardContainerStyle}>
        {/* Card 1: Digital Blood Pressure Machine */}
        <div style={cardStyle}>
          <img src="digital-blood-pressure-machine.jpg" alt="Digital Blood Pressure Machine" style={imageStyle} />
          <div style={contentStyle}>
            <h3>Digital Blood Pressure Machine</h3>
            <p>Steps to Use an Automatic Digital Blood Pressure Monitor:</p>
            <ol>
              <li>
                <strong>Prepare Yourself:</strong>
                <ul>
                  <li>Rest quietly for 5-10 minutes before measuring your blood pressure.</li>
                  <li>Avoid caffeine, exercise, and smoking for at least 30 minutes prior.</li>
                  <li>Ensure you have an empty bladder.</li>
                  <li>Sit comfortably with your back supported and feet flat on the floor. Do not cross your legs.</li>
                  <li>Rest your arm on a table at heart level.</li>
                </ul>
              </li>
              <li>
                <strong>Prepare the Machine:</strong>
                <ul>
                  <li>Ensure the monitor is properly charged or has fresh batteries.</li>
                  <li>Attach the cuff to the machine if it's not already connected.</li>
                </ul>
              </li>
              <li>
                <strong>Position the Cuff:</strong>
                <ul>
                  <li>Remove any tight clothing or thick fabric from your upper arm.</li>
                  <li>Wrap the cuff snugly around your upper arm, about 1 inch (2.5 cm) above the bend of your elbow. The cuff should be at heart level.</li>
                  <li>Ensure the cuff's tube is aligned with the center of your arm (usually in line with your middle finger).</li>
                </ul>
              </li>
              <li>
                <strong>Take the Measurement:</strong>
                <ul>
                  <li>Turn on the blood pressure monitor by pressing the power/start button.</li>
                  <li>Stay still and quiet as the cuff inflates and then gradually deflates. Avoid talking or moving during the measurement.</li>
                  <li>The machine will display your systolic and diastolic blood pressure readings, along with your pulse rate, once the measurement is complete.</li>
                </ul>
              </li>
              <li>
                <strong>Read the Results:</strong>
                <ul>
                  <li>Note the systolic pressure (the higher number), diastolic pressure (the lower number), and pulse rate displayed on the screen.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        {/* Card 2: Oximeter */}
        <div style={cardStyle}>
          <img src="oximeter.jpg" alt="Oximeter" style={imageStyle} />
          <div style={contentStyle}>
            <h3>Oximeter</h3>
            <p>Steps to Use a Pulse Oximeter:</p>
            <ol>
              <li>
                <strong>Prepare Yourself:</strong>
                <ul>
                  <li>Sit down and relax for a few minutes before taking a measurement.</li>
                  <li>Ensure your hands are warm, relaxed, and clean. Cold or dirty hands can affect the accuracy.</li>
                </ul>
              </li>
              <li>
                <strong>Prepare the Device:</strong>
                <ul>
                  <li>Turn on the pulse oximeter by pressing the power button.</li>
                </ul>
              </li>
              <li>
                <strong>Position the Device:</strong>
                <ul>
                  <li>Open the clamp of the pulse oximeter.</li>
                  <li>Insert your index finger (you can also use your middle or ring finger) into the device, ensuring that your fingertip is positioned correctly on the sensor.</li>
                  <li>The display screen should be facing you so you can read it easily.</li>
                </ul>
              </li>
              <li>
                <strong>Take the Measurement:</strong>
                <ul>
                  <li>Keep your hand steady and the pulse oximeter in place while it takes the measurement.</li>
                  <li>Remain still and avoid moving or talking during the measurement to ensure accuracy.</li>
                  <li>Wait for the oximeter to display your reading. This typically takes a few seconds.</li>
                </ul>
              </li>
              <li>
                <strong>Read the Results:</strong>
                <ul>
                  <li>The pulse oximeter will display two important numbers:</li>
                  <li>SpO2: The oxygen saturation level in your blood, usually represented as a percentage.</li>
                  <li>Pulse Rate: Your heart rate, usually represented in beats per minute (BPM).</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        {/* Card 3: Thermometer (Digital) */}
        <div style={cardStyle}>
          <img src="digital-thermometer.jpg" alt="Digital Thermometer" style={imageStyle} />
          <div style={contentStyle}>
            <h3>Thermometer (Digital)</h3>
            <p>Steps to Use a Digital Thermometer:</p>
            <ol>
              <li>
                <strong>Prepare the Thermometer:</strong>
                <ul>
                  <li>Ensure the thermometer is clean and disinfected. You can use an alcohol wipe to clean the probe before use.</li>
                  <li>Turn on the thermometer by pressing the power button. Wait for the thermometer to indicate it is ready for use (usually a beep or a display change).</li>
                </ul>
              </li>
              <li>
                <strong>Position the Thermometer:</strong>
                <ul>
                  <li>
                    <strong>Oral Use:</strong>
                    <ul>
                      <li>Place the tip of the thermometer under your tongue.</li>
                      <li>Close your lips around the thermometer to hold it in place.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Axillary (Underarm) Use:</strong>
                    <ul>
                      <li>Place the tip of the thermometer in the center of your armpit.</li>
                      <li>Lower your arm and hold it close to your body to ensure the thermometer stays in place.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Rectal Use:</strong>
                    <ul>
                      <li>Apply a small amount of lubricant (like petroleum jelly) to the tip of the thermometer.</li>
                      <li>Gently insert the tip of the thermometer into the rectum (about 1/2 to 1 inch for infants, up to 1 inch for adults). This method is often used for infants or very young children.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Tympanic (Ear) Use:</strong>
                    <ul>
                      <li>Attach the protective cover (if applicable).</li>
                      <li>Gently pull the ear back to straighten the ear canal and insert the thermometer tip into the ear canal.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Temporal (Forehead) Use:</strong>
                    <ul>
                      <li>Place the thermometer's probe flat on the center of the forehead, press and hold the scan button, and then move the thermometer across the forehead to the hairline.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Take the Measurement:</strong>
                <ul>
                  <li>Follow the thermometer’s instructions for the specific type of measurement.</li>
                  <li>Stay still and avoid moving the thermometer while it takes the reading. This usually takes a few seconds to a minute, depending on the type and model of the thermometer.</li>
                  <li>Wait for the beep or signal indicating that the measurement is complete.</li>
                </ul>
              </li>
              <li>
                <strong>Read the Results:</strong>
                <ul>
                  <li>The temperature reading will be displayed on the screen.</li>
                  <li>Note the temperature and any other indicators shown on the display (such as a fever alert).</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        {/* Card 4: Inhaler */}
        <div style={cardStyle}>
          <img src="inhaler.jpg" alt="Inhaler" style={imageStyle} />
          <div style={contentStyle}>
            <h3>Inhaler</h3>
            <p>Steps to Use a Metered-Dose Inhaler (MDI):</p>
            <ol>
              <li>
                <strong>Prepare the Inhaler:</strong>
                <ul>
                  <li>Remove the cap from the mouthpiece and check for any debris or foreign objects.</li>
                  <li>Shake the inhaler well (usually for about 5-10 seconds) to mix the medication properly.</li>
                  <li>If it’s a new inhaler or hasn’t been used in a while, you might need to prime it by spraying a few puffs into the air.</li>
                </ul>
              </li>
              <li>
                <strong>Position Yourself:</strong>
                <ul>
                  <li>Sit up or stand up straight to ensure your lungs can fully expand.</li>
                  <li>Breathe out fully to empty your lungs.</li>
                </ul>
              </li>
              <li>
                <strong>Position the Inhaler:</strong>
                <ul>
                  <li>
                    <strong>Without a Spacer:</strong>
                    <ul>
                      <li>Place the mouthpiece of the inhaler into your mouth, sealing your lips around it.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>With a Spacer:</strong>
                    <ul>
                      <li>Attach the spacer to the inhaler and place the mouthpiece of the spacer into your mouth, sealing your lips around it.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Inhale the Medication:</strong>
                <ul>
                  <li>Press down on the inhaler to release a dose of medication while simultaneously taking a slow, deep breath in.</li>
                  <li>If using a spacer, press down on the inhaler and then take a slow, deep breath in through the spacer.</li>
                  <li>Continue to inhale slowly and deeply to ensure the medication reaches your lungs.</li>
                </ul>
              </li>
              <li>
                <strong>Hold Your Breath:</strong>
                <ul>
                  <li>Hold your breath for about 10 seconds to allow the medication to settle in your lungs.</li>
                  <li>Exhale slowly through your mouth or nose.</li>
                </ul>
              </li>
              <li>
                <strong>Repeat if Necessary:</strong>
                <ul>
                  <li>If you need a second dose, wait about 30 seconds to 1 minute between puffs.</li>
                  <li>Shake the inhaler again and repeat the steps.</li>
                </ul>
              </li>
              <li>
                <strong>After Using the Inhaler:</strong>
                <ul>
                  <li>Replace the cap on the inhaler.</li>
                  <li>If the inhaler contains a steroid medication, rinse your mouth with water and spit it out to prevent oral thrush (a fungal infection).</li>
                </ul>
              </li>
            </ol>
            <h4>Tips for Using an Inhaler:</h4>
            <ul>
              <li><strong>Use a Spacer:</strong> If you have difficulty coordinating the inhaler puff and your breath, use a spacer. It helps ensure more medication reaches your lungs.</li>
              <li><strong>Check Dosage Counter:</strong> Some inhalers have a dosage counter. Keep track of the doses left to know when to get a refill.</li>
              <li><strong>Clean the Inhaler:</strong> Regularly clean the mouthpiece and spacer to prevent medication buildup and ensure proper functioning.</li>
              <li><strong>Practice Proper Technique:</strong> Make sure you are using the correct technique. Ask your healthcare provider to watch and guide you if needed.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
