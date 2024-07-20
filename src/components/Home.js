import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  background-color: ${props => (props.isDarkMode ? 'rgba(8, 10, 9, 0.8)' : 'rgba(255, 255, 255, 0)')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  transition: all 0.3s;
  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  @media (max-width: 1024px) {
    padding-right: 0;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 140px;
  @media (max-width: 1024px) {
    padding-top: 20px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    background-color: transparent;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0 0 20px 0;
  color: #FF66CC;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.5em;
  margin: 20px 0;
  background: linear-gradient(270deg, #FF66CC, #CC33FF, #9933FF);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 2s forwards, ${gradientAnimation} 8s ease infinite;
  animation-delay: 1s;
  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Description = styled.h3`
  font-size: 2em;
  margin: 20px 0;
  color: #9933FF;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 2s;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const DetailedDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 3s;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Links = styled.div`
  margin-top: 20px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 3.5s;
`;

const Link = styled.a`
  margin-right: 20px;
  text-decoration: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  font-weight: 500;
  transition: color 0.3s;
`;

const WhyChooseSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 4s;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const DoctorImage = styled.img`
  flex: 1;
  max-width: 100%;
  height: auto;
`;

const WhyChooseText = styled.div`
  flex: 2;
  padding-left: 20px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const WhyChooseTitle = styled.h2`
  font-size: 3em;
  color: #9933FF;
  margin: 0 0 20px 0;
`;

const WhyChooseDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
`;

const ReviewSection = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 10px;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.h4`
  margin: 0;
  font-size: 1.2em;
`;

const ReviewText = styled.p`
  font-size: 1em;
  margin: 10px 0;
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  color: #FFD700;
  margin-right: 5px;
`;


const UserReviewHeader = styled.h2`
  font-size: 2.5em;
  color: #FF66CC;
  margin-top: 40px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  text-align: center;
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }
`;

const MenuIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  margin: 6px 0;
  transition: 0.4s;
  transform-origin: 1px;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? 'rgba(8, 10, 9, 0.8)' : 'rgba(255, 255, 255, 0.9)')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 10;
`;

const NavLink = styled.a`
  padding: 10px 20px;
  text-decoration: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  font-weight: 500;
  transition: color 0.3s;
  &:hover {
    color: #9933FF;
  }
`;

const Home = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomeContainer isDarkMode={isDarkMode}>
      <HamburgerMenu onClick={toggleMenu}>
        <MenuIcon isDarkMode={isDarkMode} style={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }} />
        <MenuIcon isDarkMode={isDarkMode} style={{ opacity: isOpen ? 0 : 1 }} />
        <MenuIcon isDarkMode={isDarkMode} style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }} />
      </HamburgerMenu>
      <NavMenu isDarkMode={isDarkMode} isOpen={isOpen}>
        <NavLink isDarkMode={isDarkMode} href="#">Home</NavLink>
        <NavLink isDarkMode={isDarkMode} href="#">About</NavLink>
        <NavLink isDarkMode={isDarkMode} href="#">Services</NavLink>
        <NavLink isDarkMode={isDarkMode} href="#">Contact</NavLink>
      </NavMenu>
      <ContentContainer>
        <TextContainer>
          <Title>Welcome👋🏻</Title>
          <Subtitle>Presenting QCVSS: Quadra Care Vital Sync System</Subtitle>
          <Description>By TEAM ARAGYA</Description>
          <DetailedDescription>
            About the QCVSS: QUADRA CARE VITAL SYNC SYSTEM
            Designed for effortless patient care, Quadra Care Vital Sync System is a portable ventilator merged with ECG, pulse rate monitoring, and saline level monitoring system together in a single setup. It provides accurate respiratory support and continuous cardiovascular monitoring. The ventilator uses advanced sensors and controls algorithms, while on the other hand, the ECG attributes detection of real-life cardiac issues. The system is ideal for exigency as its compact design ensures easy transport and portability. Apart from that, an automated saline water monitoring system is also included to ensure the safe administration of saline monitoring solutions to patients. Sensors are utilized in the system to measure the saline level in the bottle, which will timely alert whenever the bottle is going to be empty and need a replacement. Integrated data loggers and transmitters collect and send real-time data to monitoring stations or cloud-based platforms for analysis, allowing healthcare providers to make decisions. The system enhances patient care and safety in medical treatment by ensuring precise delivery and continuous monitoring.
          </DetailedDescription>
          <Links>
            
          </Links>
        </TextContainer>
        <ImageContainer>
          <img src="https://via.placeholder.com/400" alt="Medical Illustration" />
        </ImageContainer>
      </ContentContainer>
      <WhyChooseSection>
        <DoctorImage src="https://via.placeholder.com/200" alt="Doctor" />
        <WhyChooseText>
          <WhyChooseTitle>WHY CHOOSE QVCSS</WhyChooseTitle>
          <WhyChooseDescription>
            Quadra Care Vital Sync System integrates the latest technology with healthcare to provide a seamless experience for both patients and doctors. Our system is designed to ensure the highest level of care and monitoring, making it the best choice for medical professionals worldwide.
          </WhyChooseDescription>
        </WhyChooseText>
      </WhyChooseSection>
      <UserReviewHeader>USER REVIEWS</UserReviewHeader>
      <ReviewSection>
        <Card>
          <UserImage src="https://via.placeholder.com/50" alt="User" />
          <UserName>John Doe</UserName>
          <ReviewText>QCVSS has revolutionized our patient care approach. The continuous monitoring and data logging capabilities are top-notch.</ReviewText>
          <StarRating>
            <Star>★</Star><Star>★</Star><Star>★</Star><Star>★</Star><Star>☆</Star>
          </StarRating>
        </Card>
        <Card>
          <UserImage src="https://via.placeholder.com/50" alt="User" />
          <UserName>Jane Smith</UserName>
          <ReviewText>The portability and accuracy of QCVSS are unmatched. It's an indispensable tool in our healthcare facility.</ReviewText>
          <StarRating>
            <Star>★</Star><Star>★</Star><Star>★</Star><Star>★</Star><Star>★</Star>
          </StarRating>
        </Card>
      </ReviewSection>
      
    </HomeContainer>
  );
};

export default Home;
