import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3%);
  }
  60% {
    opacity: 0.6;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutContainer = styled.div`
  background-image:  url(./img/Result10.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 2;
`;

const Square = styled.div`
  height: 100px;
  width: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
`;


const Bigfriend = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  background-color: #FFFFFF;
  border:none;
  border-radius: 20px;
  color: black;
  backdrop-filter: blur(10px);
  padding: 20px 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  height: 500px;
  width: 800px;
  display: flex;
  flex-direction: column;
  z-index: 3;
`;

const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  animation: ${fadeIn} 3s forwards;
  animation-fill-mode: forwards;
`;

function About() {
  return (
    <AboutContainer>
      <Bigfriend>
        <Square />
        <div>About</div>
      </Bigfriend>
    </AboutContainer>
  )
}

export default About;