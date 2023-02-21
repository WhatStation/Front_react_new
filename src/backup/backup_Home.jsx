import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

/*
  background-image: url(./img/naver_bg.png);
*/


const Container = styled.div`
  height: 80vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: white;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(20px);
  overflow: hidden;
  z-index: 3;
  
`;

const Button = styled(Link)`
  display: block;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  border-color: #1DD991;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;

  &:hover {
    background-color: #1DD991;
    color: white;
    box-shadow: 2px 2px 5px #1DD991;
  }
`;

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100) translateX(-10%);
  }
  15% {
    opacity: 0;
    transform: translateY(5%) translateX(-15%);
  }
  100% {
    opacity: 1;
    transform: translateY(13%) translateX(-20%);
  }
`;

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  font-size: 3rem;
  text-align: center;
  text-shadow: 0px 0px 2px rgba(66, 70, 66, 0.8), 
	  0px 0px 1px rgba(3, 3, 3, 0.8);
  position: absolute; 
  top: calc(50% - 2.65rem); 
  left: calc(50% - 10rem);
  transform: translate(-50%, -50%); 
  animation: ${fadeUp} 3s ease-in-out forwards;
  animation-fill-mode: forwards;
  z-index: 3;
`;

/*  text-shadow: 3px 0px 5px rgba(8, 14, 11, 0.8), 
  -3px 0px 5px rgba(206, 133, 49, 0.8), 
  0px 4px 4px rgba(53, 136, 101, 0.8);

    text-shadow: 3px 0px 2px rgba(66, 70, 66, 0.8), 
	  -3px 0px 1px rgba(234, 241, 230, 0.8), 
	  0px 3px 4px rgba(50, 51, 50, 0.8);


  */


/*
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
*/

/*
animation-duration: 3s;
animation-fill-mode: forwards;
animation: ${fadeIn} 3s forwards, ${moveIn} 3s forwards;
 animation-fill-mode: forwards; 
*/



const fadeIn2 = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  60% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

/*
const moveIn = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

*/

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 30%;
  right: 30%;
  width: 50%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  animation: ${fadeIn2} 3s forwards;
  animation-fill-mode: forwards;
  z-index: 2
`;

const Image2 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;

  z-index: 1;
`;

/*
animation-duration: 3s;
animation-fill-mode: forwards;
animation: ${fadeIn} 3s forwards, ${moveIn} 3s forwards;
 animation-fill-mode: forwards; 
*/

function Home() {
  return (
    <Container className="App">
      <Wrapper>
        <Image src="/img/main_img.png" alt="Main" />
        <Button to="/Search">검색하러 출발!</Button>
        <Image2 src="/img/main_img2.png" alt="Main_background" />
      </Wrapper>
      <Title className='fontBold'>오늘, 어떤 장소로 떠날까요?</Title>
    </Container>
  );
}

export default Home;

/*

import React from 'react'
import styled from 'styled-components';

function Home() {
  return (
    <div className="App">
          <img
            src={'/img/main_img.png'}
            //src={'/img/naver_bg.png'}
            className='mainImg'
            alt='Main'
          />
    </div>
  )
}

export default Home;

*/