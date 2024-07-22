import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: left;
`;

const CardHeader = styled.div`
  background-color: #0070f3;
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  font-size: 16px;
`;

const General = () => {
  return (
    <CardContainer>
      {/* Existing 4 cards */}
      <Card>
        <CardImage src="path/to/existing-device1-image.jpg" alt="Existing Device 1" />
        <CardHeader>Existing Device 1</CardHeader>
        <CardContent>
          {/* Content for existing device 1 */}
        </CardContent>
      </Card>
      <Card>
        <CardImage src="path/to/existing-device2-image.jpg" alt="Existing Device 2" />
        <CardHeader>Existing Device 2</CardHeader>
        <CardContent>
          {/* Content for existing device 2 */}
        </CardContent>
      </Card>
      <Card>
        <CardImage src="path/to/existing-device3-image.jpg" alt="Existing Device 3" />
        <CardHeader>Existing Device 3</CardHeader>
        <CardContent>
          {/* Content for existing device 3 */}
        </CardContent>
      </Card>
      <Card>
        <CardImage src="path/to/existing-device4-image.jpg" alt="Existing Device 4" />
        <CardHeader>Existing Device 4</CardHeader>
        <CardContent>
          {/* Content for existing device 4 */}
        </CardContent>
      </Card>
      
      {/* New 4 cards */}
      <Card>
        <CardImage src="path/to/blood-pressure-machine-image.jpg" alt="Blood Pressure Machine" />
        <CardHeader>Blood Pressure Machine</CardHeader>
        <CardContent>
          <ol>
            <li><strong>Prepare Yourself:</strong>
              <ul>
                <li>Rest quietly for 5-10 minutes before measuring your blood pressure.</li>
                <li>Avoid caffeine, exercise, and smoking for at least 30 minutes prior.</li>
                <li>Ensure you have an empty bladder.</li>
                <li>Sit comfortably with your back supported and feet flat on the floor. Do not cross your legs.</li>
                <li>Rest your arm on a table at heart level.</li>
              </ul>
            </li>
            <li><strong>Prepare the Machine:</strong>
              <ul>
                <li>Ensure the monitor is properly charged or has fresh batteries.</li>
                <li>Attach the cuff to the machine if it's not already connected.</li>
              </ul>
            </li>
            <li><strong>Position the Cuff:</strong>
              <ul>
                <li>Remove any tight clothing or thick fabric from your upper arm.</li>
                <li>Wrap the cuff snugly around your upper arm, about 1 inch (2.5 cm) above the bend of your elbow. The cuff should be at heart level.</li>
                <li>Ensure the cuff's tube is aligned with the center of your arm (usually in line with your middle finger).</li>
              </ul>
            </li>
            <li><strong>Take the Measurement:</strong>
              <ul>
                <li>Turn on the blood pressure monitor by pressing the power/start button.</li>
                <li>Stay still and quiet as the cuff inflates and then gradually deflates. Avoid talking or moving during the measurement.</li>
                <li>The machine will display your systolic and diastolic blood pressure readings, along with your pulse rate, once the measurement is complete.</li>
              </ul>
            </li>
            <li><strong>Read the Results:</strong>
              <ul>
                <li>Note the systolic pressure (the higher number), diastolic pressure (the lower number), and pulse rate displayed on the screen.</li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>
      <Card>
        <CardImage src="path/to/oximeter-image.jpg" alt="Oximeter" />
        <CardHeader>Oximeter</CardHeader>
        <CardContent>
          <ol>
            <li><strong>Prepare Yourself:</strong>
              <ul>
                <li>Sit down and relax for a few minutes before taking a measurement.</li>
                <li>Ensure your hands are warm, relaxed, and clean. Cold or dirty hands can affect the accuracy.</li>
              </ul>
            </li>
            <li><strong>Prepare the Device:</strong>
              <ul>
                <li>Turn on the pulse oximeter by pressing the power button.</li>
              </ul>
            </li>
            <li><strong>Position the Device:</strong>
              <ul>
                <li>Open the clamp of the pulse oximeter.</li>
                <li>Insert your index finger (you can also use your middle or ring finger) into the device, ensuring that your fingertip is positioned correctly on the sensor.</li>
                <li>The display screen should be facing you so you can read it easily.</li>
              </ul>
            </li>
            <li><strong>Take the Measurement:</strong>
              <ul>
                <li>Keep your hand steady and the pulse oximeter in place while it takes the measurement.</li>
                <li>Remain still and avoid moving or talking during the measurement to ensure accuracy.</li>
                <li>Wait for the oximeter to display your reading. This typically takes a few seconds.</li>
              </ul>
            </li>
            <li><strong>Read the Results:</strong>
              <ul>
                <li>The pulse oximeter will display two important numbers:
                  <ul>
                    <li>SpO2: The oxygen saturation level in your blood, usually represented as a percentage.</li>
                    <li>Pulse Rate: Your heart rate, usually represented in beats per minute (BPM).</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>
      <Card>
        <CardImage src="path/to/thermometer-image.jpg" alt="Digital Thermometer" />
        <CardHeader>Digital Thermometer</CardHeader>
        <CardContent>
          <ol>
            <li><strong>Prepare the Thermometer:</strong>
              <ul>
                <li>Ensure the thermometer is clean and disinfected. You can use an alcohol wipe to clean the probe before use.</li>
                <li>Turn on the thermometer by pressing the power button. Wait for the thermometer to indicate it is ready for use (usually a beep or a display change).</li>
              </ul>
            </li>
            <li><strong>Position the Thermometer:</strong>
              <ul>
                <li>Oral Use:
                  <ul>
                    <li>Place the tip of the thermometer under your tongue.</li>
                    <li>Close your lips around the thermometer to hold it in place.</li>
                  </ul>
                </li>
                <li>Axillary (Underarm) Use:
                  <ul>
                    <li>Place the tip of the thermometer in the center of your armpit.</li>
                    <li>Lower your arm and hold it close to your body to ensure the thermometer stays in place.</li>
                  </ul>
                </li>
                <li>Rectal Use:
                  <ul>
                    <li>Apply a small amount of lubricant (like petroleum jelly) to the tip of the thermometer.</li>
                    <li>Gently insert the tip of the thermometer into the rectum (about 1/2 to 1 inch for infants, up to 1 inch for adults). This method is often used for infants or very young children.</li>
                  </ul>
                </li>
                <li>Tympanic (Ear) Use:
                  <ul>
                    <li>Attach the protective cover (if applicable).</li>
                    <li>Gently pull the ear back to straighten the ear canal and insert the thermometer tip into the ear canal.</li>
                  </ul>
                </li>
                <li>Temporal (Forehead) Use:
                  <ul>
                    <li>Place the thermometer's probe flat on the center of the forehead, press and hold the scan button, and then move the thermometer across the forehead to the hairline.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><strong>Take the Measurement:</strong>
              <ul>
                <li>Follow the thermometer’s instructions for the specific type of measurement.</li>
                <li>Stay still and avoid moving the thermometer while it takes the reading. This usually takes a few seconds to a minute, depending on the type and model of the thermometer.</li>
                <li>Wait for the beep or signal indicating that the measurement is complete.</li>
              </ul>
            </li>
            <li><strong>Read the Results:</strong>
              <ul>
                <li>The temperature reading will be displayed on the screen.</li>
                <li>Note the temperature and any other indicators shown on the display (such as a fever alert).</li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>
      <Card>
        <CardImage src="path/to/oxygen-cylinder-image.jpg" alt="Oxygen Cylinder" />
        <CardHeader>Oxygen Cylinder</CardHeader>
        <CardContent>
          <ol>
            <li><strong>Prepare the Equipment:</strong>
              <ul>
                <li>Ensure you have an emergency oxygen kit, which typically includes an oxygen cylinder, regulator, tubing, and mask or nasal cannula.</li>
                <li>Check the oxygen cylinder to make sure it has enough oxygen. The pressure gauge should show an adequate level (usually above 200 psi).</li>
              </ul>
            </li>
            <li><strong>Assemble the Equipment:</strong>
              <ul>
                <li>Attach the regulator to the oxygen cylinder by aligning the pins and tightening the screw clamp until it is secure.</li>
                <li>Attach the oxygen tubing to the regulator’s outlet.</li>
              </ul>
            </li>
            <li><strong>Turn On the Oxygen:</strong>
              <ul>
                <li>Turn the cylinder valve counterclockwise to open it slowly. You should hear a hissing sound as the oxygen flows into the regulator.</li>
                <li>Set the flow rate on the regulator according to the manufacturer’s instructions or medical guidance. Common flow rates are 6-10 liters per minute (LPM) for a face mask and 1-6 LPM for a nasal cannula.</li>
              </ul>
            </li>
            <li><strong>Apply the Oxygen:</strong>
              <ul>
                <li>Using a Face Mask:
                  <ul>
                    <li>Place the mask over the person’s nose and mouth, ensuring a snug fit.</li>
                    <li>Secure the elastic band around the back of the person’s head.</li>
                    <li>Adjust the metal clip over the nose for a better fit, if necessary.</li>
                  </ul>
                </li>
                <li>Using a Nasal Cannula:
                  <ul>
                    <li>Place the nasal prongs into the person’s nostrils.</li>
                    <li>Loop the tubing over the ears and adjust the slider under the chin to hold the cannula in place.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><strong>Monitor the Person:</strong>
              <ul>
                <li>Check the person’s response to the oxygen. Look for signs of improved breathing and color (less bluish or pale skin).</li>
                <li>Ensure the oxygen is flowing continuously and the equipment is functioning properly.</li>
                <li>Reassure the person and keep them calm.</li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default General;
