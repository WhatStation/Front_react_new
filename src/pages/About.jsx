import React from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';
import '../App.css';



const AboutPageBackground = styled.div`
  background-image:  url(./img/Result5.png);
  position: absolute;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  height: 100vh;
  z-index: -1;
`;

const AboutPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #00DE63, #1DC9E6);
  height: 100vh;
  z-index: 2;
`;

const AboutPageWorkingArea = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  border:none;
  margin-top: 100px;
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
  width: 1250px;
  display: flex;
  flex-direction: column;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutPageMembersZone = styled.div`
  height: 800px;
  width: 100%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 40px;
  backdrop-filter: blur(15px) brightness(110%);
  //background: linear-gradient(180deg,linear-gradient(to right, #00DE63, #1DC9E6));
  box-shadow: 2px 5px 50px 10px rgba(0, 0, 0, 0.1);
  .RecommendInfoContainer::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 40px;
    backdrop-filter: blur(50px) brightness(100%);
    box-shadow: 2px 5px 50px 20px rgba(255, 255, 255, 0.1);
    background: linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
    z-index: 1;
  }
`;

const AboutPageMembersZoneTitle = styled.div`
  height: 80px;
  width: 100%;
  background-color: green;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
`;

const AboutPageMembersInfoContainer = styled.div`
  height: 300px;
  width: 100%;
  background-color: red;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
//  row-gap: 10px;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
`;

const AboutPageMembersInfoElements = styled.div`
  height: 250px;
  width: 250px;
  background-color: #b37878;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutPageMemberPhoto = styled.div`
  height: 100px;
  width: 100px;
  background-color: blue;
  border-radius: 50%;
  z-index: 99;
`

function About() {
  return (
    <div>
    <AboutPageBackground />
    <AboutPageMainContainer name="AboutPageMainContainer" >
      <AboutPageWorkingArea name="AboutPageWorkingArea">
        <AboutPageMembersZone name="AboutPageMembersZone">
          <AboutPageMembersZoneTitle>
                  <div className="member-title">Title here</div>
                  <div className="member-subtitle">Subtitle here</div>
          </AboutPageMembersZoneTitle>
          <AboutPageMembersInfoContainer>
            <AboutPageMembersInfoElements className='fontSet'>
                   <AboutPageMemberPhoto
                    src={`${process.env.PUBLIC_URL}/img/logo_white.png`}
                    className='Logo_white'
                    alt='logoWhite'
                    />
                      <div className="profile-name">전지원</div>
                      <div className="profile-position"Product Manager />
                      <div className="profile-position" Frontend Developer />
                      <div className="profile-info">info here</div>
                      <button className="profile-link"
                              type="button"
                              onclick="location.href='https://github.com/journey-ai'">
                          <div className="profile-logo"
                          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                          height="20px"/>
                      </button>
            </AboutPageMembersInfoElements>
            <AboutPageMembersInfoElements>
            </AboutPageMembersInfoElements>
            <AboutPageMembersInfoElements>
            </AboutPageMembersInfoElements>
            <AboutPageMembersInfoElements>
            </AboutPageMembersInfoElements>

          </AboutPageMembersInfoContainer>
        </AboutPageMembersZone>
      </AboutPageWorkingArea>
    </AboutPageMainContainer>
    </div>
  )
}

export default About;


//grid 공부는 여기서 https://studiomeal.com/archives/533

/*
const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  animation: ${fadeIn} 3s forwards;
  animation-fill-mode: forwards;
`;

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