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
      <CardImage src="/images/inhaler.jpeg" alt="Blood Pressure Machine" />
  <CardHeader>Inhaler</CardHeader>
  <CardContent>
    <ol>
      <li>Prepare the Inhaler:
        <ul>
          <li>Remove the cap from the mouthpiece and check for any debris or foreign objects.</li>
          <li>Shake the inhaler well (usually for about 5-10 seconds) to mix the medication properly.</li>
          <li>If it’s a new inhaler or hasn’t been used in a while, you might need to prime it by spraying a few puffs into the air.</li>
        </ul>
      </li>
      <li>Position Yourself:
        <ul>
          <li>Sit up or stand up straight to ensure your lungs can fully expand.</li>
          <li>Breathe out fully to empty your lungs.</li>
        </ul>
      </li>
      <li>Position the Inhaler:
        <ul>
          <li>Without a Spacer:
            <ul>
              <li>Place the mouthpiece of the inhaler into your mouth, sealing your lips around it.</li>
            </ul>
          </li>
          <li>With a Spacer:
            <ul>
              <li>Attach the spacer to the inhaler and place the mouthpiece of the spacer into your mouth, sealing your lips around it.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Inhale the Medication:
        <ul>
          <li>Press down on the inhaler to release a dose of medication while simultaneously taking a slow, deep breath in.</li>
          <li>If using a spacer, press down on the inhaler and then take a slow, deep breath in through the spacer.</li>
          <li>Continue to inhale slowly and deeply to ensure the medication reaches your lungs.</li>
        </ul>
      </li>
      <li>Hold Your Breath:
        <ul>
          <li>Hold your breath for about 10 seconds to allow the medication to settle in your lungs.</li>
          <li>Exhale slowly through your mouth or nose.</li>
        </ul>
      </li>
      <li>Repeat if Necessary:
        <ul>
          <li>If you need a second dose, wait about 30 seconds to 1 minute between puffs.</li>
          <li>Shake the inhaler again and repeat the steps.</li>
        </ul>
      </li>
      <li>After Using the Inhaler:
        <ul>
          <li>Replace the cap on the inhaler.</li>
          <li>If the inhaler contains a steroid medication, rinse your mouth with water and spit it out to prevent oral thrush (a fungal infection).</li>
        </ul>
      </li>
    </ol>
    <h4>Tips for Using an Inhaler:</h4>
    <ul>
      <li>Use a Spacer: If you have difficulty coordinating the inhaler puff and your breath, use a spacer. It helps ensure more medication reaches your lungs.</li>
      <li>Check Dosage Counter: Some inhalers have a dosage counter. Keep track of the doses left to know when to get a refill.</li>
      <li>Clean the Inhaler: Regularly clean the mouthpiece and spacer to prevent medication buildup and ensure proper functioning.</li>
      <li>Practice Proper Technique: Make sure you are using the correct technique. Ask your healthcare provider to watch and guide you if needed.</li>
    </ul>
  </CardContent>
</Card>

<Card>
<CardImage src="/images/nebu2.jpg" alt="Blood Pressure Machine" />
  <CardHeader>Nebulizer</CardHeader>
  <CardContent>
    <ol>
      <li>Prepare the Equipment:
        <ul>
          <li>Wash your hands with soap and water to prevent contamination.</li>
          <li>Ensure all parts of the nebulizer are clean and dry before assembly.</li>
          <li>Plug in the nebulizer compressor or ensure it has sufficient battery charge if it's a portable model.</li>
        </ul>
      </li>
      <li>Assemble the Nebulizer:
        <ul>
          <li>Attach the air tubing to the air outlet on the compressor.</li>
          <li>Connect the other end of the tubing to the base of the nebulizer cup.</li>
          <li>Open the nebulizer cup and place the prescribed medication inside. Make sure you use the exact amount prescribed by your doctor.</li>
          <li>Reassemble the nebulizer cup securely.</li>
        </ul>
      </li>
      <li>Attach the Mouthpiece or Mask:
        <ul>
          <li>Attach the mouthpiece or mask to the top of the nebulizer cup. Use a mouthpiece if possible, as it delivers more medication to the lungs. Use a mask if the mouthpiece is not suitable, especially for young children or those who cannot hold the mouthpiece.</li>
        </ul>
      </li>
      <li>Position Yourself:
        <ul>
          <li>Sit in a comfortable, upright position to allow your lungs to fully expand.</li>
          <li>Place the mouthpiece in your mouth and close your lips around it. If using a mask, place it over your nose and mouth, securing it with the elastic band.</li>
        </ul>
      </li>
      <li>Turn on the Nebulizer:
        <ul>
          <li>Turn on the compressor by pressing the power button.</li>
          <li>You should see a fine mist coming from the mouthpiece or mask.</li>
        </ul>
      </li>
      <li>Inhale the Medication:
        <ul>
          <li>Breathe in slowly and deeply through your mouth if using a mouthpiece, or through your nose and mouth if using a mask.</li>
          <li>Hold each breath for 2-3 seconds before exhaling to allow the medication to settle in your lungs.</li>
          <li>Continue breathing slowly and deeply until all the medication in the nebulizer cup is used up. This usually takes about 10-15 minutes.</li>
        </ul>
      </li>
    </ol>
  </CardContent>
</Card>

<Card>
<CardImage src="/images/cpr.png" alt="Blood Pressure Machine" />
  <CardHeader>CPR</CardHeader>
  <CardContent>
    <ol>
      <li>Assess the Scene:
        <ul>
          <li>Ensure the area is safe for both you and the person needing CPR.</li>
          <li>Check for any hazards or dangers that could harm you or the person.</li>
        </ul>
      </li>
      <li>Check Responsiveness:
        <ul>
          <li>Tap the person on the shoulder and shout loudly, "Are you okay?" Check for any response, such as movement or sound.</li>
        </ul>
      </li>
      <li>Call for Help:
        <ul>
          <li>If there is no response, or if the person is not breathing normally (gasping or not breathing at all), immediately call emergency services (911 or local emergency number) for help.</li>
          <li>If there is someone nearby, ask them to call for help and bring an AED (Automated External Defibrillator), if available.</li>
        </ul>
      </li>
      <li>Open the Airway:
        <ul>
          <li>Gently tilt the person's head back and lift the chin to open the airway. This helps ensure clear passage for air to enter and exit the lungs.</li>
        </ul>
      </li>
      <li>Check for Breathing:
        <ul>
          <li>Look, listen, and feel for signs of normal breathing. Watch for chest rise, listen for breathing sounds, and feel for breath on your cheek.</li>
          <li>If the person is not breathing normally, proceed to CPR.</li>
        </ul>
      </li>
      <li>Begin Chest Compressions:
        <ul>
          <li>Place the heel of one hand on the center of the person's chest, between the nipples.</li>
          <li>Place your other hand on top of the first hand, interlocking your fingers.</li>
          <li>Position your shoulders directly above your hands, with elbows locked.</li>
          <li>Push down hard and fast, compressing the chest at least 2 inches (5 centimeters) deep for adult and adolescent victims. Allow the chest to recoil completely between compressions.</li>
          <li>Perform chest compressions at a rate of 100-120 compressions per minute, to the beat of a song like "Stayin' Alive" by the Bee Gees.</li>
        </ul>
      </li>
      <li>Perform Rescue Breaths:
        <ul>
          <li>After 30 chest compressions, give 2 rescue breaths.</li>
          <li>Pinch the person's nose shut and cover their mouth with yours, creating an airtight seal.</li>
          <li>Breathe into the person's mouth for about 1 second, watching for chest rise. If the chest does not rise, reposition the head and try again.</li>
          <li>Continue with cycles of 30 chest compressions and 2 rescue breaths until help arrives, an AED is available, or the person starts breathing normally.</li>
        </ul>
      </li>
    </ol>
  </CardContent>
</Card>

<Card>
<CardImage src="/images/ecg.jpeg" alt="Blood Pressure Machine" />
  <CardHeader>ECG</CardHeader>
  <CardContent>
    <ol>
      <li>Preparation:
        <ul>
          <li>Ensure the patient is relaxed and in a comfortable position, either sitting or lying down.</li>
          <li>Clean the skin where the electrodes will be placed to remove any oils or dirt. Use an alcohol wipe if necessary.</li>
        </ul>
      </li>
      <li>Electrode Placement:
        <ul>
          <li>Place the electrodes on the patient's skin as per the standard ECG lead placement (usually 10 electrodes: 4 limb leads and 6 precordial leads).</li>
          <li>Limb Leads:
            <ul>
              <li>Right arm (RA): On the right wrist or upper arm.</li>
              <li>Left arm (LA): On the left wrist or upper arm.</li>
              <li>Right leg (RL): On the right ankle or lower leg (ground lead).</li>
              <li>Left leg (LL): On the left ankle or lower leg.</li>
            </ul>
          </li>
          <li>Precordial Leads (V1-V6):
            <ul>
              <li>V1: Fourth intercostal space to the right of the sternum.</li>
              <li>V2: Fourth intercostal space to the left of the sternum.</li>
              <li>V3: Midway between V2 and V4.</li>
              <li>V4: Fifth intercostal space at the midclavicular line.</li>
              <li>V5: Level with V4 at the left anterior axillary line.</li>
              <li>V6: Level with V4 at the left midaxillary line.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Connect the Leads:
        <ul>
          <li>Attach the lead wires to the electrodes, ensuring each lead is connected to its corresponding electrode.</li>
        </ul>
      </li>
      <li>Start the ECG Recording:
        <ul>
          <li>Turn on the ECG machine or monitoring device.</li>
          <li>Ensure the machine is set to the appropriate mode (12-lead ECG, continuous monitoring, etc.).</li>
          <li>Press the start button to begin recording the ECG.</li>
          <li>Encourage the patient to remain still and avoid talking during the recording to reduce artifacts.</li>
        </ul>
      </li>
      <li>Monitor the ECG Trace:
        <ul>
          <li>Observe the ECG trace on the screen for any abnormalities or technical issues (e.g., loose electrodes, interference).</li>
          <li>If the trace is not clear, recheck the electrode placement and connections.</li>
        </ul>
      </li>
      <li>End the Recording:
        <ul>
          <li>Once the recording is complete, stop the ECG machine.</li>
          <li>Print or save the ECG trace as needed for further analysis or review by a healthcare professional.</li>
        </ul>
      </li>
      <li>Remove the Electrodes:
        <ul>
          <li>Gently remove the electrodes from the patient's skin.</li>
          <li>Clean any residue left by the electrodes with a mild soap and water or an alcohol wipe.</li>
        </ul>
      </li>
    </ol>
  </CardContent>
</Card>
      
      {/* New 4 cards */}
      <Card>
        <CardImage src="/images/bpm.jpg" alt="Blood Pressure Machine" />
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
        <CardImage src="/images/oximeter.jpg" alt="Oximeter" />
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
        <CardImage src="/images/ther.jpg" alt="Digital Thermometer" />
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
        <CardImage src="/images/oxycil.jpg" alt="Oxygen Cylinder" />
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
