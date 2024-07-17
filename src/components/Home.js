import React from 'react';
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
  margin-top: 40px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 4s;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DoctorImage = styled.img`
  flex: 1;
  max-width: 100%;
  height: auto;
  @media (max-width: 768px) {
    order: 2;
    margin-top: 20px;
  }
`;

const WhyChooseText = styled.div`
  flex: 2;
  padding-left: 20px;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const WhyChooseTitle = styled.h2`
  font-size: 2.5em;
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

const FreeTrialContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 4.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FreeTrialText = styled.p`
  font-size: 1.5em;
  color: #9933FF;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const FreeTrialButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2em;
  color: #fff;
  background-color: #9933FF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  @media (max-width: 768px) {
    font-size: 1em;
  }
  &:hover .popup {
    display: block;
  }
`;

const Popup = styled.div`
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 0.8em;
`;

const UserReviewHeader = styled.h2`
  font-size: 2.5em;
  color: #FF66CC;
  margin-top: 40px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
`;

const Home = ({ isDarkMode }) => {
  return (
    <HomeContainer isDarkMode={isDarkMode}>
      <ContentContainer>
        <TextContainer>
          <Title>Welcome 👋🏻</Title>
          <Subtitle>Presenting QCVSS: Quadra Care Vital Sync System</Subtitle>
          <Description>By TEAM ARAGYA</Description>
          <DetailedDescription>
            About the QCVSS: QUADRA CARE VITAL SYNC SYSTEM
            <br /><br />
            Designed for effortless patient care, Quadra Care Vital Sync System is a portable ventilator merged with ECG, pulse rate monitoring, and saline level monitoring system together in a single setup. It provides accurate respiratory support and continuous cardiovascular monitoring. The ventilator uses advanced sensors and controls the algorithms, while on the other hand, the ECG attributes detection of real-time cardiac issues, which is ideal for exigency as its compact design ensures easy transport and portability. The system includes an automated saline water monitoring system for real-time monitoring and precise administration of saline levels.
          </DetailedDescription>
          <Links>
            <Link href="#about" isDarkMode={isDarkMode}>About</Link>
            <Link href="#features" isDarkMode={isDarkMode}>Features</Link>
            <Link href="#contact" isDarkMode={isDarkMode}>Contact</Link>
          </Links>
        </TextContainer>
        <ImageContainer>
          <img src="https://www.shutterstock.com/image-vector/smartphone-application-online-doctor-consultation-2165210368" alt="Home Image" />
        </ImageContainer>
      </ContentContainer>
      <WhyChooseSection>
        <DoctorImage src="https://www.shutterstock.com/image-vector/mature-man-patient-clinician-looking-2097191994" alt="Doctor Image" />
        <WhyChooseText>
          <WhyChooseTitle>Why Choose QCVSS?</WhyChooseTitle>
          <WhyChooseDescription>
            Quadra Care Vital Sync System combines life-saving respiratory support with continuous cardiac monitoring and precise saline level management. Our portable design ensures that patients receive comprehensive care in any setting.
          </WhyChooseDescription>
        </WhyChooseText>
      </WhyChooseSection>
      <ReviewSection>
        <Card>
          <UserImage src="https://example.com/user1.jpg" alt="User 1" />
          <UserName>User 1</UserName>
          <ReviewText>Amazing device! It really helped me during a critical time.</ReviewText>
          <StarRating>
            <Star>★</Star>
            <Star>★</Star>
            <Star>★</Star>
            <Star>★</Star>
            <Star>★</Star>
          </StarRating>
        </Card>
        <Card>
          <UserImage src="https://example.com/user2.jpg" alt="User 2" />
          <UserName>User 2</UserName>
          <ReviewText>Highly recommend this product for its accuracy and reliability.</ReviewText>
          <StarRating>
            <Star>★</Star>
            <Star>★</Star>
            <Star>★</Star>
            <Star>★</Star>
            <Star>★</Star>
          </StarRating>
        </Card>
        <Card>
          <UserImage src="https://example.com/user3.jpg" alt="User 3" />
          <UserName>User 3</UserName>
          <ReviewText>The portable design makes it perfect for emergencies.</ReviewText>
          <StarRating>
            <Star>★</Star>
            <Star>★</Star>
            <Star>★</Star>
            <Star>★</Star>
            <Star>★</Star>
          </StarRating>
        </Card>
      </ReviewSection>
      <FreeTrialContainer>
        <FreeTrialText>Get your free trial today and experience the future of patient care!</FreeTrialText>
        <FreeTrialButton>
          Start Free Trial
          <Popup className="popup">Sign up for a free trial now!</Popup>
        </FreeTrialButton>
      </FreeTrialContainer>
      <UserReviewHeader>User Reviews</UserReviewHeader>
    </HomeContainer>
  );
};

export default Home;
