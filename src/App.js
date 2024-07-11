import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import styled, { keyframes } from 'styled-components';
import './App.css'; // Create this CSS file for custom styles
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AppContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#080a09' : '#ffffff')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  min-height: 100vh;
  transition: all 0.3s;
  position: relative;
  animation: ${fadeInUp} 0.5s ease-in-out;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom: ${props => (props.isDarkMode ? 'none' : '1px solid #eaeaea')};
  background-color: ${props => (props.isDarkMode ? '#080a09' : '#ffffff')};
  animation: ${fadeInUp} 0.5s ease-in-out;
`;

const Navlink = styled(NavLink)`
  margin: 0 20px;
  text-decoration: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  font-size: 18px;
  font-weight: 500;
  position: relative;
  &.active {
    text-decoration: underline;
    text-decoration-color: red;
    text-decoration-thickness: 3px;
  }
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#080a09' : '#ffffff')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  transition: all 0.3s;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 400px;
  background-color: ${props => (props.isDarkMode ? '#080a09' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top:140px;
`;

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const Title = styled.h1`
  font-size: 4em;
  margin: 0 0 20px 0;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 0s;
`;

const Subtitle = styled.h2`
  font-size: 3em;
  margin: 20px 0;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 1s;
`;

const Description = styled.h3`
  font-size: 2em;
  margin: 20px 0;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 2s;
`;

const DetailedDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 3s;
`;

const Home = ({ isDarkMode }) => {
  return (
    <HomeContainer isDarkMode={isDarkMode}>
      <TextContainer>
        <Title>Welcome 👋🏻</Title>
        <Subtitle>Presenting QCVSS: Quadra Care Vital Sync System</Subtitle>
        <Description>By TEAM ARAGYA</Description>
        <DetailedDescription>
          About the QCVSS: QUADRA CARE VITAL SYNC SYSTEM
          <br /><br />
          Designed for effortless patient care, Quadra Care Vital Sync System is a portable ventilator merged with ECG, pulse rate monitoring, and saline level monitoring system together in a single setup. It provides accurate respiratory support and continuous cardiovascular monitoring. The ventilator uses advanced sensors and controls the algorithms, while on the other hand, the ECG attributes detection of real-life cardiac issues. The system is ideal for exigency as its compact design ensures easy transport and portability. Apart from that, an automated saline water monitoring system is also included to ensure the safe administration of saline monitoring solution to patients. Sensors are utilized in the system to measure the saline level in the bottle, which will timely alert whenever the bottle is going to be empty and need a replacement. Integrated data loggers and transmitters collect and send real-time data to monitoring stations or cloud-based platforms for analysis, allowing healthcare providers to make decisions. The system enhances patient care and safety in medical treatment by ensuring precise delivery and continuous monitoring.
        </DetailedDescription>
      </TextContainer>
      <ImageContainer isDarkMode={isDarkMode}>
        <img src="/images/QVCSS.png" alt="QVCSS" style={{ maxWidth: '100%', maxHeight: '100%', backgroundColor: isDarkMode ? '#080a09' : '#ffffff' }} />
      </ImageContainer>
    </HomeContainer>
  );
};

const PageContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#080a09' : '#ffffff')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  min-height: 100vh;
  transition: all 0.3s;
  animation: ${fadeInUp} 0.5s ease-in-out;
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavigation = async (e, path) => {
    e.preventDefault();
    setIsTransitioning(true);
    await new Promise(r => setTimeout(r, 200));
    setIsTransitioning(false);
    navigate(path);
  };

  return (
    <AppContainer isDarkMode={isDarkMode}>
      <ToggleButton>
        <Toggle
          checked={isDarkMode}
          onChange={toggleDarkMode}
          aria-label="Dark mode toggle"
        />
      </ToggleButton>
      <Navbar isDarkMode={isDarkMode}>
        <Navlink
          to="/"
          isDarkMode={isDarkMode}
          onClick={(e) => handleNavigation(e, '/')}
        >
          Home
        </Navlink>
        <Navlink
          to="/about"
          isDarkMode={isDarkMode}
          onClick={(e) => handleNavigation(e, '/about')}
        >
          Instruction
        </Navlink>
        <Navlink
          to="/blog"
          isDarkMode={isDarkMode}
          onClick={(e) => handleNavigation(e, '/blog')}
        >
          Components
        </Navlink>
        <Navlink
          to="/contact"
          isDarkMode={isDarkMode}
          onClick={(e) => handleNavigation(e, '/contact')}
        >
          About Us
        </Navlink>
      </Navbar>
      {!isTransitioning && (
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<PageContainer isDarkMode={isDarkMode}><About /></PageContainer>} />
          <Route path="/blog" element={<PageContainer isDarkMode={isDarkMode}><Blog /></PageContainer>} />
          <Route path="/contact" element={<PageContainer isDarkMode={isDarkMode}><Contact /></PageContainer>} />
        </Routes>
      )}
    </AppContainer>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
