// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import General from './components/General';
import Navbar from './components/Navbar';

const AppContainer = styled.div`
  background-image: url('/images/images.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw; 
  min-height: 100vh; 
  overflow: hidden; 
  transition: all 0.3s;
  position: relative;
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
    background-color: rgba(255, 255, 255, 0.6); 
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2; 
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto; 
`;

const PageContainer = styled.div`
  transition: all 0.3s;
  padding: 20px; 
`;

const App = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <AppContainer>
      <ContentWrapper>
        <Navbar />
        <ScrollableContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PageContainer><About /></PageContainer>} />
            <Route path="/blog" element={<PageContainer><Blog /></PageContainer>} />
            <Route path="/contact" element={<PageContainer><Contact /></PageContainer>} />
            <Route path="/general" element={<PageContainer><General /></PageContainer>} />
          </Routes>
        </ScrollableContent>
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
