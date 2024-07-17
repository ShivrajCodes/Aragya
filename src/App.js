import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';  // Import Home component

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
  background-image: url('/images/images.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  transition: all 0.3s;
  position: relative;
  animation: ${fadeInUp} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6); /* White overlay with 60% opacity */
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2; /* Ensure the content is above the overlay */
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
  animation: ${fadeInUp} 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
  }
`;

const Navlink = styled(NavLink)`
  margin: 0 20px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  &.active {
    color: red;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const MenuButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: #000000;
  margin: 4px 0;
`;

const PageContainer = styled.div`
  transition: all 0.3s;
  animation: ${fadeInUp} 0.5s ease-in-out;
`;

const App = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = async (e, path) => {
    e.preventDefault();
    setIsTransitioning(true);
    await new Promise(r => setTimeout(r, 200));
    setIsTransitioning(false);
    navigate(path);
  };

  return (
    <AppContainer>
      <ContentWrapper>
        <MenuButton onClick={toggleMenu}>
          <MenuIcon />
          <MenuIcon />
          <MenuIcon />
        </MenuButton>
        <Navbar isMenuOpen={isMenuOpen}>
          <Navlink to="/" onClick={(e) => handleNavigation(e, '/')}>
            Home
          </Navlink>
          <Navlink to="/about" onClick={(e) => handleNavigation(e, '/about')}>
            Instructions
          </Navlink>
          <Navlink to="/blog" onClick={(e) => handleNavigation(e, '/blog')}>
            Components Used
          </Navlink>
          <Navlink to="/contact" onClick={(e) => handleNavigation(e, '/contact')}>
            About Us
          </Navlink>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PageContainer><About /></PageContainer>} />
          <Route path="/blog" element={<PageContainer><Blog /></PageContainer>} />
          <Route path="/contact" element={<PageContainer><Contact /></PageContainer>} />
        </Routes>
      </ContentWrapper>
    </AppContainer>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
