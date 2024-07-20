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
`;

const CardContent = styled.div`
  padding: 15px;
  font-size: 16px;
`;

const General = () => {
  return (
    <CardContainer>
      <Card>
        <CardHeader>Blood Glucose Meter</CardHeader>
        <CardContent>
          <ol>
            <li>Wash hands and prepare the device.</li>
            <li>Insert test strip and use the lancing device to draw blood.</li>
            <li>Apply blood to the test strip and read the results.</li>
          </ol>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Nebulizer</CardHeader>
        <CardContent>
          <ol>
            <li>
              <strong>Prepare the Equipment:</strong>
              <ul>
                <li>Wash your hands with soap and water to prevent contamination.</li>
                <li>Ensure all parts of the nebulizer are clean and dry before assembly.</li>
                <li>Plug in the nebulizer compressor or ensure it has sufficient battery charge if it's a portable model.</li>
              </ul>
            </li>
            <li>
              <strong>Assemble the Nebulizer:</strong>
              <ul>
                <li>Attach the air tubing to the air outlet on the compressor.</li>
                <li>Connect the other end of the tubing to the base of the nebulizer cup.</li>
                <li>Open the nebulizer cup and place the prescribed medication inside. Make sure you use the exact amount prescribed by your doctor.</li>
                <li>Reassemble the nebulizer cup securely.</li>
              </ul>
            </li>
            <li>
              <strong>Attach the Mouthpiece or Mask:</strong>
              <ul>
                <li>Attach the mouthpiece or mask to the top of the nebulizer cup. Use a mouthpiece if possible, as it delivers more medication to the lungs. Use a mask if the mouthpiece is not suitable, especially for young children or those who cannot hold the mouthpiece.</li>
              </ul>
            </li>
            <li>
              <strong>Position Yourself:</strong>
              <ul>
                <li>Sit in a comfortable, upright position to allow your lungs to fully expand.</li>
                <li>Place the mouthpiece in your mouth and close your lips around it. If using a mask, place it over your nose and mouth, securing it with the elastic band.</li>
              </ul>
            </li>
            <li>
              <strong>Turn on the Nebulizer:</strong>
              <ul>
                <li>Turn on the compressor by pressing the power button.</li>
                <li>You should see a fine mist coming from the mouthpiece or mask.</li>
              </ul>
            </li>
            <li>
              <strong>Inhale the Medication:</strong>
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
        <CardHeader>CPR</CardHeader>
        <CardContent>
          <ol>
            <li>
              <strong>Assess the Scene:</strong>
              <ul>
                <li>Ensure the area is safe for both you and the person needing CPR.</li>
                <li>Check for any hazards or dangers that could harm you or the person.</li>
              </ul>
            </li>
            <li>
              <strong>Check Responsiveness:</strong>
              <ul>
                <li>Tap the person on the shoulder and shout loudly, "Are you okay?" Check for any response, such as movement or sound.</li>
              </ul>
            </li>
            <li>
              <strong>Call for Help:</strong>
              <ul>
                <li>If there is no response, or if the person is not breathing normally (gasping or not breathing at all), immediately call emergency services (911 or local emergency number) for help.</li>
                <li>If there is someone nearby, ask them to call for help and bring an AED (Automated External Defibrillator), if available.</li>
              </ul>
            </li>
            <li>
              <strong>Open the Airway:</strong>
              <ul>
                <li>Gently tilt the person's head back and lift the chin to open the airway. This helps ensure clear passage for air to enter and exit the lungs.</li>
              </ul>
            </li>
            <li>
              <strong>Check for Breathing:</strong>
              <ul>
                <li>Look, listen, and feel for signs of normal breathing. Watch for chest rise, listen for breathing sounds, and feel for breath on your cheek.</li>
                <li>If the person is not breathing normally, proceed to CPR.</li>
              </ul>
            </li>
            <li>
              <strong>Begin Chest Compressions:</strong>
              <ul>
                <li>Place the heel of one hand on the center of the person's chest, between the nipples.</li>
                <li>Place your other hand on top of the first hand, interlocking your fingers.</li>
                <li>Position your shoulders directly above your hands, with elbows locked.</li>
                <li>Push down hard and fast, compressing the chest at least 2 inches (5 centimeters) deep for adult and adolescent victims. Allow the chest to recoil completely between compressions.</li>
                <li>Perform chest compressions at a rate of 100-120 compressions per minute, to the beat of the song "Stayin' Alive" by the Bee Gees or using a metronome for guidance.</li>
              </ul>
            </li>
            <li>
              <strong>Give Rescue Breaths (if trained and willing):</strong>
              <ul>
                <li>Tilt the person's head back and lift the chin again to open the airway.</li>
                <li>Pinch the person's nose shut.</li>
                <li>Give two rescue breaths, each lasting about 1 second and making sure the chest rises with each breath.</li>
                <li>If rescue breaths do not go in, reposition the head and try again.</li>
              </ul>
            </li>
            <li>
              <strong>Continue CPR:</strong>
              <ul>
                <li>Perform cycles of 30 chest compressions followed by 2 rescue breaths (if giving breaths).</li>
                <li>Continue CPR until:
                  <ul>
                    <li>Help arrives and takes over.</li>
                    <li>An AED becomes available and is ready to use.</li>
                    <li>You are too exhausted to continue.</li>
                    <li>The person starts breathing normally.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Use an AED (if available):</strong>
              <ul>
                <li>Follow the prompts and instructions provided by the AED.</li>
                <li>Apply the pads to the person's bare chest as shown in the diagrams on the pads.</li>
                <li>Allow the AED to analyze the heart rhythm. If a shock is advised, make sure no one is touching the person and press the shock button as directed.</li>
                <li>Resume CPR immediately after delivering the shock, following the AED prompts.</li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>First Aid</CardHeader>
        <CardContent>
          <ol>
            <li>
              <strong>Assess the Scene:</strong>
              <ul>
                <li>Ensure the area is safe for both you and the injured person. Check for any hazards or dangers.</li>
                <li>Put on gloves if available to protect yourself from bodily fluids and potential infections.</li>
              </ul>
            </li>
            <li>
              <strong>Check the Person:</strong>
              <ul>
                <li>Assess the person’s level of consciousness. Tap their shoulders and ask loudly, "Are you okay?"</li>
                <li>If there is no response, shout for help and call emergency services (911 or local emergency number).</li>
              </ul>
            </li>
            <li>
              <strong>Provide Comfort:</strong>
              <ul>
                <li>Reassure the person and keep them calm. Let them know help is on the way.</li>
              </ul>
            </li>
            <li>
              <strong>Perform Initial Assessment (ABCs):</strong>
              <ul>
                <li><strong>Airway:</strong> Ensure the person's airway is open and clear. If not, tilt their head back and lift the chin to open the airway.</li>
                <li><strong>Breathing:</strong> Check for breathing. Look, listen, and feel for chest rise and breaths for up to 10 seconds.</li>
                <li><strong>Circulation:</strong> Check for signs of circulation (pulse or movement) and severe bleeding.</li>
              </ul>
            </li>
          </ol>
          <ul>
            <li><strong>CPR (Cardiopulmonary Resuscitation):</strong>
              <ul>
                <li>If the person is unconscious and not breathing normally, begin CPR immediately. Perform chest compressions and rescue breaths (if trained) until help arrives.</li>
                <li>Follow the steps outlined earlier for CPR.</li>
              </ul>
            </li>
            <li><strong>Choking:</strong>
              <ul>
                <li>If the person is conscious but choking and unable to speak or breathe, perform abdominal thrusts (Heimlich maneuver).</li>
                <li>Stand behind the person, wrap your arms around their waist, and make a fist with one hand.</li>
                <li>Place the thumb side of your fist against the person's abdomen, slightly above the navel and below the rib cage.</li>
                <li>Grasp your fist with your other hand and quickly pull inward and upward in a series of thrusts until the object is expelled or the person can breathe.</li>
              </ul>
            </li>
            <li><strong>Severe Bleeding:</strong>
              <ul>
                <li>Apply direct pressure to the wound using a clean cloth or bandage.</li>
                <li>Elevate the injured limb above the level of the heart if possible.</li>
                <li>Maintain pressure until bleeding stops or help arrives.</li>
                <li>If bleeding cannot be controlled, apply a tourniquet (if trained) several inches above the wound, but do this only as a last resort.</li>
              </ul>
            </li>
            <li><strong>Burns:</strong>
              <ul>
                <li>Remove the person from the source of heat or chemical causing the burn.</li>
                <li>Cool the burn with cool running water for at least 10 minutes, or until the pain subsides.</li>
                <li>Cover the burn loosely with a sterile, nonstick bandage or clean cloth.</li>
              </ul>
            </li>
            <li><strong>Fractures and Sprains:</strong>
              <ul>
                <li>Immobilize the injured area with a splint or sling to prevent further injury.</li>
                <li>Apply ice wrapped in a cloth to reduce swelling and pain.</li>
              </ul>
            </li>
            <li><strong>Seizures:</strong>
              <ul>
                <li>Keep the person safe from injury by clearing away objects that could cause harm.</li>
                <li>Do not restrain the person; instead, protect their head and move objects away from them.</li>
                <li>After the seizure ends, turn the person onto their side to help keep their airway clear.</li>
              </ul>
            </li>
            <li><strong>Poisoning:</strong>
              <ul>
                <li>Call Poison Control (1-800-222-1222) immediately for guidance.</li>
                <li>If the person is conscious, try to identify the substance ingested and provide this information to medical professionals.</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li><strong>Additional Tips:</strong>
              <ul>
                <li><strong>Stay Calm:</strong> Your demeanor can help reassure the injured person and keep the situation under control.</li>
                <li><strong>Do No Harm:</strong> Only perform first aid techniques you are trained to do to avoid causing further harm.</li>
                <li><strong>Monitor:</strong> Continuously monitor the person’s condition until professional help arrives.</li>
              </ul>
            </li>
          </ul>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default General;
