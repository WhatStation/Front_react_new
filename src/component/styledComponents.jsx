import React from 'react';
import styled from 'styled-components';
import '../App.css';


//컴포넌트 선언시 부여한 자체 스타일보다, return문 안에 사용시 할당한 css 스타일이 더 우선순위에 있는 것 같다.



export const Container = styled.div`
  min-width: 1900px;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;

`;

export const MainContainer = styled.div`
  margin-top: 20vh;
  background-attachment: fixed;
  //backdrop-filter: blur(20px) brightness(120%);
  padding: 5rem;
  display: flex;
  flex-direction: row; 
  position: relative;
  width: 1920px;
  min-width: 1900px;
  height: 40rem;
//  background-position: 50% 30%; 
  z-index: 1;
  background-color: transparent;

  @media only screen and (max-width: 1400px) {
    width: 1400px;
    height: 805px;
  }
`;

  //flex-wrap: wrap;
  //min-width: 100px;
  //min-height: 400px; 
  //text-align: center;
  //justify-content: space-between;




export const RecommendInfoContainer = styled.div`
  display: flex;
  margin-top: 1.3rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 850px;
  padding: 4vw;
  justify-content: space-between;
  border: 2px solid #ddd;
  border-radius: 40px;
  backdrop-filter: blur(7px) brightness(103%);
  background: linear-gradient(180deg,linear-gradient(to right, #00DE63, #1DC9E6));
  box-shadow: 2px 5px 50px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  //min-width: 100px;
  //min-height: 400px; 
  .RecommendInfoContainer::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 40px;
    backdrop-filter: blur(50px) brightness(100%);
    box-shadow: 2px 5px 50px 20px rgba(255, 255, 255, 0.1);
    background: linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
    z-index: -1;
  }

`;

export const RecomendedStoreContainer = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  align-items: center;
  display: flex;
  flex-direction: column;
  &:before {
  content: "";
  border-radius: 40px;
  //backdrop-filter: blur(20px) brightness(100%);
  box-shadow: 2px 5px 50px 20px rgba(255, 255, 255, 0.1);
  background: linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
  z-index: -1;
}
`;

export const RecomendedStoreDetail = styled.div`
  align-items: center;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-family: 'Nanum Gothic', sans-serif;
//  text-align: center;
 // flex-wrap: wrap;
  justify-content: space-between;
`;

export const SubStoreContainer = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  width: 200px;
  &:before {
  content: "";
  border-radius: 40px;
  //backdrop-filter: blur(20px) brightness(100%);
  box-shadow: 2px 5px 50px 20px rgba(255, 255, 255, 0.1);
  background: linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
  z-index: -1;
}
`;

export const SubStoreDetail = styled.div`
  align-items: center;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-family: 'Nanum Gothic', sans-serif;
//  text-align: center;
 // flex-wrap: wrap;
  justify-content: space-between;
`;



export const ReactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 5rem;
  height: 100%;
  width: 50%;
  justify-content: center;
  .keyWordTag {
    row-gap: 1px;
    column-gap: 2px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35vw;
    z-index: 9999;
    margin-bottom: 20px;
  }
`;



export const ResultTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  position: absolute;
  width: 600px;
  height: 150px;
  margin-left: 1100px;
  margin-right: 50rem;
  top: 200px;
  display: flex;

  text-shadow: 0 0 10px #ffffff32, 0 0 10px rgba(255, 255, 255, 0),
               3px 0px 5px rgba(152, 248, 255, 0.226), 0 6px 70px rgba(77, 213, 255, 0.651),
               0 5px 80px rgba(162, 255, 185, 0.719);
  background: linear-gradient(to right, #00DE63, #1DC9E6);
  color: transparent;
  -webkit-background-clip: text;
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

export const TopTitle = styled.span`
  display: block;
`;

export const ResultTag = styled.span`
  display: block;
`;

export const TitleOfInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  z-index: 9999;
  font-size:1.2rem;
  color: #00DE63;
  margin-right: 2rem;
  border:none;
  vertical-align: middle;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 900;
`;

export const ContentsOfInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  z-index: 9999;
  font-size:1.05rem;
  //color: ;
  border:none;
  vertical-align: middle;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family:'Nanum Gothic', sans-serif;
  font-weight: 900;
`;

export const SubStoreList = styled.ul`
  list-style-type: square;
  z-index: 9999;
`;


export const ImageContainer = styled.div`
  position: absolute; 
  margin-top: 17vh;
  width: 100vw;
  height: 39vh;
  z-index: -1;
`;

export const Image = styled.div`
  position: absolute; 
  //color: rgb(255, 255, 255);
  background-image: linear-gradient(
        rgba(255, 255, 255, 0.603),
        rgba(255, 255, 255, 0)
      ),url("./img/Result6.png");
  object-fit: cover;
  background-repeat: no-repeat;
  text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.8), 
	  0px 0px 1px rgba(255, 255, 255, 0.8);
  position: absolute; 
  width: 100%;
  height: 100%;
  z-index: -1;
  white-space: nowrap;
//  background-position: 100%;
  &:before {
    content: '';
    background-image: linear-gradient(
      rgba(153, 255, 122, 0.295),
      rgba(255, 255, 255, 0)
    ),url("./img/Result7.png");
    background-repeat: no-repeat;
    position: absolute; 
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(5px);
    mix-blend-mode: overlay;
  }
`;

/*
export const ResultTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  
  position: absolute;
  top: 20rem;
  right: 5rem;
  display: flex;
  justify-content: center;
//  height: 150px;
//  width: 350px;
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
*/


//  right: calc(30% - 10rem);
//  transform: translate(-50%, -50%); 
//  white-space: nowrap;
//  transform: translate(-50%, -50%); 
//backdrop-filter: blur(20px) brightness(100%);
//    white-space: nowrap;
//    mix-blend-mode: overlay;
//background-position: 100%;

//정렬 공부시 이 링크 좋으다 https://velog.io/@wook4506/React-Native-%EC%9A%94%EC%86%8C%EC%9D%98-%EB%B0%B0%EC%B9%98%EC%99%80-%EC%A0%95%EB%A0%AC
//정렬 공부 이거까지 봐라(꼼꼼버전) http://www.tcpschool.com/css/css3_expand_flexbox
//이미지 사이즈 맞출때 https://nykim.work/86
//태그속에 스타일속성 넣을때 https://sum0725.tistory.com/22
//id,class,name 차이 https://penguingoon.tistory.com/116


/* 
export const RecommendInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
 @media only screen and (max-width: 1400px) {
    flex-direction: column;
    width: 1400px;
    height: 400px;
  } */

/*

export const MainContainer = styled.div`
  margin-top: 10vh;
  background-attachment: fixed;
  background-size: cover;
  backdrop-filter: blur(20px) brightness(120%);
  padding: 10vw;
  display: flex;
  flex-direction: row; 
  position: relative;
  width: 100%;
  height: 70%;
  background-position: 50% 30%; 
  z-index: 1;


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

*/