
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #020024; 
  border-bottom: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 20px;
`;

const BrandName = styled.span`
  color: #b3b3b3; 
  font-size: 24px;
  font-weight: 700;
  margin-left: 5px;
`;

const Navlink = styled(NavLink)`
  margin: 0 20px;
  text-decoration: none;
  color: #b3b3b3; 
  font-size: 18px;
  font-weight: 500;
  position: relative;

  &.active {
    color: red; 
  }

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const MenuButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1001;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin: 4px 0;
`;

const MenuItems = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleNavigation = async (e, path) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon />
        <MenuIcon />
        <MenuIcon />
      </MenuButton>
      <NavbarContainer>
        <LogoWrapper>
          <Logo src="/images/uem3.png" alt="UEM Logo" />
          <Logo src="/images/logo2.png" alt="ARAGYA Logo" />
          <BrandName>ARAGYA</BrandName>
        </LogoWrapper>
        <MenuItems isMenuOpen={isMenuOpen || window.innerWidth > 768}>
          <Navlink to="/" onClick={(e) => handleNavigation(e, '/')}>
            Home
          </Navlink>
          <Navlink to="/about" onClick={(e) => handleNavigation(e, '/about')}>
            Instructions
          </Navlink>
          <Navlink to="/blog" onClick={(e) => handleNavigation(e, '/blog')}>
            Components Used
          </Navlink>
          <Navlink to="/general" onClick={(e) => handleNavigation(e, '/general')}>
            General Information
          </Navlink>
          <Navlink to="/contact" onClick={(e) => handleNavigation(e, '/contact')}>
            About Us
          </Navlink>
        </MenuItems>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
