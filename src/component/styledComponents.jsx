//import React from 'react';
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
  padding: 130px;
  display: flex;
  flex-direction: row; 
  position: relative;
  width: 1920px;
  min-width: 1900px;
  height: 47rem;
//  background-position: 50% 30%; 
  z-index: 9999;
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
  margin-top: 1.1rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 850px;
  padding: 40px;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 40px;
  backdrop-filter: blur(15px) brightness(110%);
  //background: linear-gradient(180deg,linear-gradient(to right, #00DE63, #1DC9E6));
  box-shadow: 2px 5px 50px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  //min-width: 100px;
  //min-height: 400px; 
  .RecommendInfoContainer::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 40px;
    backdrop-filter: blur(50px) brightness(100%);
    box-shadow: 2px 5px 50px 20px rgba(255, 255, 255, 0.1);
    //background: linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
    background: linear-gradient(to right,rgba(255, 255, 255, 0.8),rgba(255, 255, 255, 0.8));
    z-index: 1;
  }

`;

export const RecommendedStoreContainer = styled.div`
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

export const RecommendLetter = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(to right, #1DD991, #1DC9E6);
  color: transparent;
  -webkit-background-clip: text;
  margin-bottom: 20px;
  margin-top:20px;
`;


export const RecommendedStoreDetail = styled.div`
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


export const RecommendedStoreKeyword = styled.div`
  align-items: center;
  height: 5rem;
  width: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  padding: 5px;
  font-family: 'Nanum Gothic', sans-serif;
  //  text-align: center;
  // flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 20px;
  backdrop-filter: blur(50px) brightness(100%);
  box-shadow: 2px 5px 50px 20px rgba(255, 255, 255, 0.1);
  //background: linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
  //background: linear-gradient(to right, #3ddfbc, #1DC9E6);
  background: linear-gradient(to right, #81fdb9, #80dbeb);
 
  z-index: 1;
  `;
  
  export const TitleOfRecommendedStoreTags = styled.div`
    color: #303030;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    z-index: 1;
    border:none;
    vertical-align: middle;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 750;
    text-shadow: 0 0 2px #ffffff, 0 0 2px #bee0e6, 0 0 1px #25b16b, 0 0 1px #9fc7ba, 0 0 1px #a2e4ca, 0 0 1px #c3dbd3, 0 0 4px #4489ac92, 0 0 7px #7fb1cea2;

    `;
  
  export const RecommendedStoreTags = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    width: 12rem;
    height: 40px;
    z-index: 1;
    color: #000000;
    border:none;
    vertical-align: middle;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family:'Nanum Gothic', sans-serif;
    text-shadow: 0 0 2px #ffffff, 0 0 2px #bad8cc81, 0 0 1px #25bb70, 0 0 1px #9fc7ba, 0 0 1px #a2e4ca, 0 0 1px #c3dbd3, 0 0 4px #4890b49e, 0 0 7px #1680bea2;
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
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-family: 'Nanum Gothic', sans-serif;
//  text-align: center;
 // flex-wrap: wrap;
`;



export const ReactionContainer = styled.div`
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 4rem;
  height: 100%;
  width: 700px;
//  border: solid black 1px;
  justify-content: center;
  .keyWordTag {
    row-gap: 1px;
    column-gap: 2px;
    flex-wrap: wrap;
    display: flex;
    background-attachment: fixed;
    justify-content: center;
    align-items: center;
    width:500px;
    z-index: 1;
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
  margin-left: 1050px;
  margin-right: 50rem;
  top: 240px;
  display: flex;

  text-shadow: 
               3px 1px 150px rgba(152, 255, 221, 0.226), 0 1px 15px rgba(77, 213, 255, 0.308),
               0 1px 15px rgba(162, 255, 185, 0.575), 0 0 5px #42f5bf25, 0 0 10px rgba(255, 255, 255, 0);
  //  text-shadow: 0 0 10px #ffffff32, 0 0 10px rgba(255, 255, 255, 0),
  //3px 0px 5px rgba(152, 248, 255, 0.226), 0 6px 70px rgba(77, 213, 255, 0.651),
  //             0 5px 80px rgba(162, 255, 185, 0.719);
  background: linear-gradient(to right, #3ddfbc, #1DC9E6);  
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
  font-weight: 500;
  width: 90px;
  height: 30px;
  margin-right: 10px;
  z-index: 9999;
  font-size:1rem;
//  color: #3ddfbc;
  background: linear-gradient(to right, #53e4c0, #53cee4);
  color: white;
  margin-right: 2rem;
  border-radius: 17px;
  
  border:none;
  vertical-align: middle;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 750;
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
  color: #000000;

  border:none;
  vertical-align: middle;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family:'Nanum Gothic', sans-serif;
  font-weight: 900;
  //box-shadow: inset 0 -20px 0 orange;
  //line-height: 5px;
`;

export const Substoreletter = styled.ul`
  font-family: 'Nanum Gothic', sans-serif;
  color: rgba(0, 0, 0, 0.979);
  font-weight: 700;
  font-size: 17px;
  border: none;
  border-radius: 10px;
  width: 30vw;
  height: 3vh;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 5px;
  text-shadow: 0 0 2px #ffffff, 0 0 3px #ffffffd5, 0 0 1px #25bb70, 0 0 1px #9fc7ba, 0 0 1px #a2e4ca, 0 0 1px #c3dbd3, 0 0 4px #4890b49e, 0 0 7px #1680bea2;
  //text-shadow: 0 0 1px #ffffff, 0 0 5px #267e5c, 0 0 30px #25bb70, 0 0 40px #9fc7ba, 0 0 70px #9ef0ce, 0 0 80px #37b88d, 0 0 100px #1681b3, 0 0 10px #4b7da5;
`;

export const SubStoreList = styled.ul`
  color:rgb(0, 0, 0);
  font-family: 'Nanum Gothic', sans-serif;
  list-style-type: square;
  z-index: 2;
  font-weight:50;
  text-shadow: 0 0 2px #ffffff, 0 0 3px #fffdfdc1, 0 0 1px #25bb70, 0 0 1px #9fc7ba, 0 0 1px #a2e4ca, 0 0 1px #c3dbd3, 0 0 4px #4890b49e, 0 0 7px #1680bea2;
  //text-shadow: 0 0 1px #ffffff, 0 0 5px #449e7c, 0 0 15px #25bb70, 0 0 10px #9fc7ba, 0 0 20px #a2e4ca, 0 0 10px #c3dbd3, 0 0 5px #1c97cf, 0 0 10px #1681be;
`;


export const ImageContainer = styled.div`
  position: absolute;
  display :flex ;
  margin-top: 0px;
  background-attachment: fixed;
  margin-left: 1px;
  margin-right: 1px;
  width: 1850px;
  min-width: 1900px;
//  height: 7;
  z-index: 1;
`;

export const Bubble1 = styled.div`
  position: absolute; 
  margin-top: 40vh;
  width: 260px;
  height: 260px;
  z-index: 2;
  opacity: 0.7;
  right:730px;
  border-radius: 45%;
  border: solid #51e795 1px;
  background: linear-gradient(180deg, #6afaab, #53cee4),linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
  //backdrop-filter: blur(20px) brightness(100%);
  box-shadow: 1px 1px 30px 10px rgba(117, 230, 196, 0.842);
  //background: linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
`;


export const Bubble2 = styled.div`
  position: absolute; 
  margin-top: 24vh;
  width: 150px;
  height: 140px;
  z-index: -1;
  opacity: 0.6;
  right: 930px;
  border-radius: 47%;
  border: solid #51e795 1px;
  background: linear-gradient(800deg, #81fdb9, #61bfcf),linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
  //backdrop-filter: blur(20px) brightness(100%);
  box-shadow: 1px 1px 40px 20px rgba(117, 230, 196, 0.842);
  //background: linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
`;

export const Bubble3 = styled.div`
  position: absolute; 
  margin-top: 62.5vh;
  background-attachment: fixed;
  width: 78px;
  height: 83px;
  opacity: 0.9;
  right:910px;
  z-index: 3;
  border-radius: 45%;
  border: solid #51e795 1px;
  background: linear-gradient(30deg, #6afaab, #53cee4),linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
  //backdrop-filter: blur(20px) brightness(100%);
  box-shadow: 1px 1px 40px 20px rgba(117, 230, 196, 0.842);
  //background: linear-gradient(70deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8));
`;


export const Logo = styled.div`
  position: absolute; 
  margin-top: 120px;
  width: 800px;
  height: 800px;
  z-index: -3;
  right:1200px;
  z-index: 1;
  opacity: 0.4;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-image: url("./img/logo_bright.png");
`;



/*

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
  border-radius: 30px;
  height: 100%;
  z-index: -1;
  white-space: nowrap;
//  background-position: 100%;
  &:before {
    content: '';
    background-image: linear-gradient(
      rgba(153, 255, 122, 0.295),
      rgba(255, 255, 255, 0)
    ),url("./img/Result3.png");
    background-repeat: no-repeat; 
    object-fit: cover;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(5px);
    mix-blend-mode: overlay;
  }
`;

*/

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