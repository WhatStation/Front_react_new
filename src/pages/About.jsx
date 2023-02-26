import React from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';
import '../App.css';
import { RiGithubFill,RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";



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
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 40px;
  backdrop-filter: blur(15px) brightness(130%);
  //background: linear-gradient(180deg,linear-gradient(to right, #00DE63, #1DC9E6));
  box-shadow: 2px 5px 50px 10px rgba(0, 0, 0, 0.1);
  .AboutPageMembersZone::before {
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
  color: white;
  //box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
`;

const AboutPageMembersInfoContainer = styled.div`
  height: 500px;
  width: 100%;
//  background-color: red;
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
//  row-gap: 10px;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
`;

const AboutPageMembersInfoElements = styled.div`
  height: 400px;
  width: 250px;
  background-color: #ffffffb3;
  box-shadow: 1px 1px 30px 6px rgba(117, 230, 196, 0.842);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 40px;
`;

const AboutPageMemberPhoto = styled.div`
  height: 100px;
  width: 100px;
  backdrop-filter: blur(50px) brightness(100%);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  background-color: #8c8ca797;
  border-radius: 50%;
  z-index: 99;
  margin-bottom: 10px;
`

function About() {
  return (
    <div>
    <AboutPageBackground />
    <AboutPageMainContainer name="AboutPageMainContainer" >
      <AboutPageWorkingArea name="AboutPageWorkingArea">
        <AboutPageMembersZone name="AboutPageMembersZone">
          <AboutPageMembersZoneTitle>
                  <div className="member-title">ABOUT</div>
                  <div className="member-subtitle">Place AI, 누가 만들었나요?</div>
          </AboutPageMembersZoneTitle>
          <AboutPageMembersInfoContainer>
            <AboutPageMembersInfoElements className='fontSet'>
                   <AboutPageMemberPhoto style={{ marginTop: "10px"}}
                    src={`${process.env.PUBLIC_URL}/img/logo_white.png`}
                    className='Logo_white'
                    alt='logoWhite'
                    />
                      <div className="profile-name">전지원</div>
                      <div className='alignRow' style={{ marginTop: "5px"}}>
                      <div className="profile-position" style={{ marginRight: "2px", backgroundColor: "white" }}>기획/PM</div>
                        <div className="profile-position" style={{ backgroundColor: "BLUE", color:"white" }}> FE</div>
                      </div>
                      <div className="profile-info">
                        <RiDoubleQuotesL /> AIoT 좋 아 요 <RiDoubleQuotesR />
                      </div>
                      <button className="gitButton"
                        type="button"
                        onclick="location.href='https://github.com/journey-ai'">
                          <RiGithubFill  className="gitLogo"/>
                      </button>
            </AboutPageMembersInfoElements>
            <AboutPageMembersInfoElements>
            <AboutPageMemberPhoto style={{ marginTop: "10px"}}
                    src={`${process.env.PUBLIC_URL}/img/logo_white.png`}
                    className='Logo_white'
                    alt='logoWhite'
                    />
                      <div className="profile-name">오유림</div>
                      <div className='alignRow' style={{ marginTop: "5px"}}>
                      <div className="profile-position" style={{ marginRight: "2px", backgroundColor: "purple", color:"orange" }}>BE</div>
                        <div className="profile-position" style={{ backgroundColor: "orange", color:"white" }}> DE</div>
                      </div>
                      <div className="profile-info">
                      <RiDoubleQuotesL /> 시키면 해낸다 <RiDoubleQuotesR />
                      </div>
                      <button className="gitButton"
                        type="button"
                        onclick="location.href='https://github.com/journey-ai'">
                          <RiGithubFill  className="gitLogo"/>
                      </button>
            </AboutPageMembersInfoElements>
            <AboutPageMembersInfoElements>
            <AboutPageMemberPhoto style={{ marginTop: "10px"}}
                    src={`${process.env.PUBLIC_URL}/img/logo_white.png`}
                    className='Logo_white'
                    alt='logoWhite'
                    />
                      <div className="profile-name">임락균</div>
                      <div className='alignRow' style={{ marginTop: "5px"}}>
                      <div className="profile-position" style={{ marginRight: "2px", backgroundColor: "GREEN", color:"white" }}>DS</div>
                        <div className="profile-position" style={{ backgroundColor: "red", color:"yellow" }}> MLE</div>
                      </div>
                      <div className="profile-info">
                      <RiDoubleQuotesL /> 어딘가 천재가 분명함 <RiDoubleQuotesR />
                      </div>
                      <button className="gitButton"
                        type="button"
                        onclick="location.href='https://github.com/journey-ai'">
                          <RiGithubFill  className="gitLogo"/>
                      </button>
            </AboutPageMembersInfoElements>
            <AboutPageMembersInfoElements>
            <AboutPageMemberPhoto style={{ marginTop: "10px"}}
                    src={`${process.env.PUBLIC_URL}/img/logo_white.png`}
                    className='Logo_white'
                    alt='logoWhite'
                    />
                      <div className="profile-name">박난</div>
                      <div className='alignRow' style={{ marginTop: "5px"}}>
                      <div className="profile-position" style={{ marginRight: "2px", backgroundColor: "GREEN", color:"white" }}>DS</div>
                        <div className="profile-position" style={{ backgroundColor: "red", color:"yellow" }}> MLE</div>
                      </div>
                      <div className="profile-info">
                      <RiDoubleQuotesL /> 막내가 선배지 <RiDoubleQuotesR />
                      </div>
                      <button className="gitButton"
                        type="button"
                        onclick="location.href='https://github.com/journey-ai'">
                          <RiGithubFill  className="gitLogo"/>
                      </button>
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