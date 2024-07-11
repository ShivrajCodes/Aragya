import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${props => (props.isDarkMode ? '#333333' : '#ffffff')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  transition: all 0.3s;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0 0 20px 0;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin: 20px 0;
`;

const Links = styled.div`
  margin-top: 20px;
`;

const Link = styled.a`
  margin-right: 20px;
  text-decoration: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  font-weight: 500;
  transition: color 0.3s;
`;

const Home = ({ isDarkMode }) => {
  return (
    <HomeContainer isDarkMode={isDarkMode}>
      <Title>Hello <span role="img" aria-label="wave">👋</span></Title>
      <Description>I'm Chetan Verma - curious designer and developer based in New Delhi, India.</Description>
      <Links>
        <Link href="https://github.com" isDarkMode={isDarkMode}>Github</Link>
        <Link href="https://linkedin.com" isDarkMode={isDarkMode}>LinkedIn</Link>
        <Link href="https://twitter.com" isDarkMode={isDarkMode}>Twitter</Link>
        <Link href="https://blog.com" isDarkMode={isDarkMode}>Blog</Link>
        <Link href="mailto:chetan@example.com" isDarkMode={isDarkMode}>Email</Link>
      </Links>
    </HomeContainer>
  );
};

export default Home;
