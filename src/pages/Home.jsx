import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 88vh;
  margin-top: 12vh;
  width: 100vw;
  position: relative;
  background: linear-gradient(to right, #00DE63, #1DC9E6);
  object-fit: contain;
  z-index: -9999;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  min-width : 1000px;
  min-height : 1000px;
`;


const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(20px);
  overflow: hidden;
  z-index: -9999;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  
`;

const glitter = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.5);
  }
  60% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1.3);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Button = styled(Link)`
  font-weight: 600;
  display: block;
  margin: 0 auto;
  padding: 0.8rem 1.8rem;
  font-size: 1.3rem;
  text-align: center;
  backdrop-filter: blur(10px);
  color: #ffffff;
  border: 2px solid #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 10px;
  box-shadow: 3px 3px 4px rgba(252, 251, 251, 0.2);
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: calc(65% - 2.5rem); 
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 98;

  @media only screen and (max-width: 1100px) {
    font-size: 2rem;
    top: calc(69% - 4rem);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 50%;
    opacity: 0;
    z-index: 98;
    animation: ${glitter} 1s infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(to right, #ceecc5, #68fcf2);
    border-radius: 10px;
    z-index: 98;
    opacity: 0;
    transition: opacity 0.65s ease-in-out;
  }

  &:hover {
    background: linear-gradient(to right, #51e795, #4cc4da);
    color: white;
    box-shadow: 2px 2px 5px #1DD991;
    z-index: 98;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const fadeUp = keyframes`
  0% {
    opacity: 0.3;
    transform: translateY(0) translateX(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(19%) translateX(0%);
  }
`;


const LogoFadeUp = styled.img`
  animation: ${fadeUp} 1s ease-in-out forwards;
  animation-fill-mode: forwards;
  position: absolute;
  top: calc(18% - 5rem);
  z-index: 1;

  @media only screen and (max-width: 1100px) {
    height: 30vh;
    top: calc(20% - 4rem);
  }
`;


const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 3.3rem;
  text-align: center;
  text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.8), 
	  0px 0px 1px rgba(255, 255, 255, 0.8);
  position: absolute; 
  top: calc(50% - 2.5rem); 
  left: calc(30% - 10rem);
  right: calc(30% - 10rem);
  transform: translate(-50%, -50%); 
  animation: ${fadeUp} 1s ease-in-out forwards;
  animation-fill-mode: forwards;
  z-index: 3;
  white-space: nowrap;

  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
    top: calc(54% - 4rem);
  }
`;

const circleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(-80%, -30%) scale(2.8);
  }
  40% {
    opacity: 1;
    transform: translate(100%, 80%) scale(3.2);
  }
  60% {
    opacity: 0.5;
    transform: translate(-20%, -30%) scale(4.5);
  }
  100% {
    opacity: 0;
    transform: translate(60%, 100%) scale(3.0);
  }
`;


const Circle = styled.div`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 40%;
  background: linear-gradient(to right, #1eff83, #4cc4da);
  filter: blur(10px);
  animation: ${circleAnimation} 13s ease-in-out infinite;
  z-index: -9999;
`;


function Home() {
  return (
    <Container name="container" className="App">
      <Wrapper name="Wrapper">
        {Array.from({ length: 35 }).map((_, i) => (
          <Circle name ="circle"
            key={i}
            top={Math.random() * 240}
            left={Math.random() * 350}
            size={Math.random() * 250 + 50}
            style={{ animationDelay: `${0}s` }}
          />
        ))}
        <LogoFadeUp name="LogoFadeUp "
          src={`${process.env.PUBLIC_URL}/img/logo_white.PNG`}
          className='Logo_white'
          alt='logoWhite'
        />
        <Button name = "Button" to="/Search">네, 알려드릴게요</Button>
        <Title className='fontBold'>Place AI, 감성 맞춤 홍대 식당 알려줘</Title>
      </Wrapper>
    </Container>
  );
}

export default Home;

