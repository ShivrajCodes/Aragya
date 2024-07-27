import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 500px; 
  height: 500px; 
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ModalButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1001;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalButton onClick={toggleModal}>
        <img src="/images/modal.png" alt="Open Modal" />
      </ModalButton>
      <ModalContainer isOpen={isOpen}>
        <Iframe src="http://127.0.0.1:500" />
      </ModalContainer>
    </>
  );
};

export default Modal;
