import React from 'react';
import styled from 'styled-components';
import '../App.css';



export const Container = styled.div`
  margin-top: 100px;
  min-width: 1100px;
  overflow: auto;
  z-index: 1;
`;

export const MainContainer = styled.div`
  background-attachment: fixed;
  background-size: cover;
  backdrop-filter: blur(20px) brightness(120%);
  padding: 1.5vw;
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-position: 50% 30%; 
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.5);
    background-blend-mode: screen;
    background-repeat: repeat;
    mix-blend-mode: overlay;
    filter: blur(20px);
  }

  @media only screen and (max-width: 1400px) {
    width: 1400px;
    height: 805px;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media only screen and (max-width: 1400px) {
    flex-direction: column;
    width: 1400px;
    height: 400px;
  }
`;


export const ReactionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 60%;
  justify-content: center;
  .keyWordTag {
    row-gap: 10px;
    column-gap: 1vh;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 85vh;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 20rem;
  right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 500px;
  border-radius: 70px;
  text-shadow: 0 0 10px #83e0aa, 0 0 20px rgba(59, 245, 252, 0.4),
               0 0 30px rgba(133, 250, 168, 0.3), 0 0 50px rgba(39, 255, 255, 0.233),
               0 0 100px rgba(0, 255, 98, 0.623);
  color: #ffffff;
  font-size: 3.3rem;
  font-weight: 800;
  z-index: 9999;
  animation: fade-in 1s ease-in-out, slide-in 2s forwards;
  animation-delay: 0s;
  transform: translateX(20px);
  opacity: 0;
  animation-fill-mode: forwards;
  font-family: 'Nanum Gothic', sans-serif;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in {
    from {
      transform: translateX(10);
    }
    to {
      transform: translateX(0);
    }
  }
`;
 


export const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const TopTitle = styled.span`
  display: block;
`;

export const BottomTitle = styled.span`
  display: block;
`;


export const TitleOfInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;



export const SubStoreList = styled.ul`
  list-style-type: square;
`;





export const IMGContainer = styled.div`
  color: rgb(255, 255, 255);
  background-image: linear-gradient(
        rgb(255, 255, 255),
        rgba(255, 255, 255, 0)
      ),url("./img/Result5.png");
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  text-align: center;
  text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.8), 
	  0px 0px 1px rgba(255, 255, 255, 0.8);
  position: absolute; 
  top: calc(10% - 0rem); 
//  right: calc(30% - 10rem);
  transform: translate(-50%, -50%); 
  width: 100%;
  height: 100%;
  z-index: -1;
  white-space: nowrap;
  &:before {
    content: '';
  color: rgb(255, 255, 255);
  background-image: linear-gradient(
        rgb(255, 255, 255),
        rgba(255, 255, 255, 0)
      ),url("./img/Result6.png");
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  position: absolute; 
  top: calc(10% - 0rem); 
//  right: calc(30% - 10rem);
  transform: translate(-50%, -50%); 
  width: 100%;
  height: 100%;
  z-index: -1;
  white-space: nowrap;
    mix-blend-mode: overlay;
    filter: blur(20px);
  }
`;


