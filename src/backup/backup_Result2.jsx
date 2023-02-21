import { React, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router"
import axios from 'axios';
import './App.css';


//컨테이너 정렬을 위한 조잡한 컴포넌트 하하하 내 코드가 가장 조잡하다

const ContainerAlign = styled.div`

border:none;
border-radius: 70px;
padding: 10px 17px;
display: flex;
border-radius: 50%;
width: 70%;
height: 70%;
`;


//따봉,역따봉 컴포넌트 (사용자 피드백용)

const ThumbsAndKeywordButton = styled.button`
  background-color: white;
//  border: 2px solid black;
  border:none;
  border-radius: 70px;
  color: black;
  padding: 10px 17px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  transition-duration: 0.4s;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15), 5px 6px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #C6F0E0;
    cursor: pointer;
  }
`;

//내용 표시 컴포넌트(result문에서 너무 코드가 지져분해져 수정 예정..)

const TitleOfInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SubStoreList = styled.ul`
  list-style-type: square;
`;



//버튼 선택되고 안되고 색변화
const ThumbsUpButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;
const ThumbsDownButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;

const PriceButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;
const CuteButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;
const WideButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;

//부대 아니고 단체라는 뜻
const CorpsButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;
//만족스러운 식당이라는 뜻
const SatisfactionButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;

const ModernButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;

const AmbienceButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;

const VisualButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;

const CozyButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;

const ServiceButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;

const ExoticfoodButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;
const ExoticthemeButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;
const ClassicButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;

const AloneButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;
const CleanButton = styled(ThumbsAndKeywordButton)`
  background-color: ${props => (props.isSelected ? "#96EACA" : "white")};
`;



function Result() {

  //Search에서 백엔드로부터 받았던 음식점 정보 받아오기 (state)
  const { state } = useLocation();

  //따봉,역따봉 초기화
  const [thumbsUpSelected, setThumbsUpSelected] = useState(false);
  const [thumbsDownSelected, setThumbsDownSelected] = useState(false);

  //태그 초기화
  const [PriceSelected, setPriceSelected] = useState(false);
  const [CuteSelected, setCuteSelected] = useState(false);
  const [WideSelected, setWideSelected] = useState(false);
  const [CorpsSelected, setCorpsSelected] = useState(false);
  const [SatisfactionSelected, setSatisfactionSelected] = useState(false);
  const [ModernSelected, setModernSelected] = useState(false);
  const [AmbienceSelected, setAmbienceSelected] = useState(false);
  const [VisualSelected, setVisualSelected] = useState(false);
  const [CozySelected, setCozySelected] = useState(false);
  const [CleanSelected, setCleanSelected] = useState(false);
  const [ServiceSelected, setServiceSelected] = useState(false);
  const [ExoticfoodSelected, setExoticfoodSelected] = useState(false);
  const [ExoticthemeSelected, setExoticthemeSelected] = useState(false);
  const [ClassicSelected, setClassicSelected] = useState(false);
  const [AloneSelected, setAloneSelected] = useState(false);


  const [feedBackData, setFeedBackData] = useState({
    "search" : state.input,
    "thumbs_up" : false,
    "price" : false,
    "cute" : false,
    "wide" : false,
    "corps" : false,
    "satisfaction" : false,
    "modern" : false,
    "ambience" : false,
    "visual" : false,
    "cozy" : false,
    "clean" : false,
    "service" : false,
    "exoticfood" : false,
    "exotictheme" : false,
    "classic" : false,
    "alone" : false
  });

  //디버깅용
  console.log(state.data); 
  console.log("현재 추천된 식당의 이름은" + state.data.main_store.name);
  console.log("입력 받은 검색어는" +  state.input)

  //정보가 들어왔는지 확인!
  if (!state) {
    return <p>No state found</p>;
  }

  //정보를 갖고있을때만 아래것을 리턴!


  //클릭할때 api 넘겨주기위한 기능 - 따봉 역따봉

  const handleThumbsUp = () => {
    setThumbsUpSelected(!thumbsUpSelected);
  };

  const handleThumbsDown = () => {
    setThumbsDownSelected(!thumbsDownSelected);
  };

  //클릭했는지 여부를 handle해주는 기능



  const handlePrice = () => {
    setPriceSelected(!PriceSelected);
  }
  const handleCute = () => {
    setCuteSelected(!CuteSelected);
  };
  const handleAlone = () => {
    setAloneSelected(!CuteSelected);
  };
  const handleClassic = () => {
    setClassicSelected(!CuteSelected);
  };
  const handleExotictheme = () => {
    setExoticthemeSelected(!CuteSelected);
  };
  const handleExoticfood = () => {
    setExoticfoodSelected(!CuteSelected);
  };
  const handleService = () => {
    setServiceSelected(!CuteSelected);
  };
  const handleClean = () => {
    setCleanSelected(!CuteSelected);
  };
  const handleCozy = () => {
    setCozySelected(!CuteSelected);
  };
  const handleVisual = () => {
    setVisualSelected(!CuteSelected);
  };
  const handleAmbience = () => {
    setAmbienceSelected(!CuteSelected);
  };
  const handleSatisfaction = () => {
    setSatisfactionSelected(!CuteSelected);
  };
  const handleCorps = () => {
    setCorpsSelected(!CuteSelected);
  };
  const handleWide = () => {
    setWideSelected(!CuteSelected);
  };
  const handleModern = () => {
    setModernSelected(!CuteSelected);
  };


 


  const handleSubmit = async () => {
    try {
      feedBackData.search = state.input
      feedBackData.thumbs_up = thumbsUpSelected;
      feedBackData.price = PriceSelected;
      feedBackData.cute = CuteSelected;
      feedBackData.wide = WideSelected;
      feedBackData.corps = CorpsSelected;
      feedBackData.satisfaction = SatisfactionSelected;
      feedBackData.ambience = AmbienceSelected;
      feedBackData.visual = VisualSelected;
      feedBackData.cozy = VisualSelected;
      feedBackData.clean = CleanSelected;
      feedBackData.service = ServiceSelected;
      feedBackData.exoticfood = ExoticfoodSelected;
      feedBackData.exotictheme = ExoticthemeSelected;
      feedBackData.classic = ClassicSelected;
      feedBackData.alone = AloneSelected;
      feedBackData.modern = ModernSelected;


      const response = await axios.put('http://localhost:8000/api/search/', feedBackData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <MainContainer className= 'Bigcontainer'>
      <h1>Search Result</h1>
      <ContainerAlign>
        <SectionContainer>
          { state && (
              <>
              <h2> Main Store 🏟 </h2>
              <div className= "arrayBox">
                <TitleOfInfo>
                  Name
                </TitleOfInfo>
                  {state["data"].main_store.name}
              </div>
              <div className= "arrayBox">
                <TitleOfInfo>
                  Station
                </TitleOfInfo>
                  {state.data.main_store.station}
              </div>
              <div className= "arrayBox">
                <TitleOfInfo>
                  Line
                </TitleOfInfo>
                  {state.data.main_store.line.join(', ')}
              </div>
              <div className= "arrayBox">
                <TitleOfInfo>
                  Tags
                </TitleOfInfo>
                  {state.data.main_store.tags.join(', ')}
              </div>
              <div className= "arrayBox">
                <TitleOfInfo>
                  result_tags
                </TitleOfInfo>
                  {state.data.result_tags.join(', ')}
              </div>
              <div className= "arrayBox">
                <TitleOfInfo>
                  Walking Time
                </TitleOfInfo>
                  {state.data.main_store.walking_time}
              </div>
              </>
              )}
            
        </SectionContainer>

        <SectionContainer>
          <h2> Sub Stores 🏙 </h2>
          <SubStoreList>
            { state && (
              state.data.sub_stores.map((store, index) => (
                <li key={index}>{store}</li>
              ))
            )}
          </SubStoreList>
        </SectionContainer>
      </ContainerAlign>
      <div>
        <h6> 추천 내용에 만족하시나요?</h6>
      </div>
      <div>
        <ThumbsUpButton isSelected={thumbsUpSelected} onClick={handleThumbsUp}>👍</ThumbsUpButton>
        <ThumbsDownButton isSelected={thumbsDownSelected} onClick={handleThumbsDown}>👎</ThumbsDownButton>
      </div>
      <div>
        <h6> 내가 넣은 검색어는 어떤 키워드와 어울린다고 생각하시나요?</h6>
        <h5>검색하신 내용 : {state.input} </h5>
      </div>
      <div className='keyWordTag'>
        <PriceButton isSelected={PriceSelected} onClick={handlePrice}>#가성비있는</PriceButton>
        <CuteButton isSelected={CuteSelected} onClick={handleCute}>#귀여운</CuteButton>
        <WideButton isSelected={WideSelected} onClick={handleWide}>#넓은</WideButton>
        <CorpsButton isSelected={CorpsSelected} onClick={handleCorps}>#단체가 와도 좋은</CorpsButton>
        <SatisfactionButton isSelected={SatisfactionSelected} onClick={handleSatisfaction}>#만족스러운</SatisfactionButton>
        <ModernButton isSelected={ModernSelected} onClick={handleModern}>#모던한</ModernButton>
        <AmbienceButton isSelected={AmbienceSelected} onClick={handleAmbience}>#분위기있는</AmbienceButton>
        <VisualButton isSelected={VisualSelected} onClick={handleVisual}>#비주얼이 좋은</VisualButton>
        <CozyButton isSelected={CozySelected} onClick={handleCozy}>#아늑한</CozyButton>
        <CleanButton isSelected={CleanSelected} onClick={handleClean}>#깔끔한</CleanButton>
        <ServiceButton isSelected={ServiceSelected} onClick={handleService}>#서비스가 좋은</ServiceButton>
        <ExoticfoodButton isSelected={ExoticfoodSelected} onClick={handleExoticfood}>#음식이 특이한</ExoticfoodButton>
        <ExoticthemeButton isSelected={ExoticthemeSelected} onClick={handleExotictheme}>#이색테마인</ExoticthemeButton>
        <ClassicButton isSelected={ClassicSelected} onClick={handleClassic}>#클래식 테마인</ClassicButton>
        <AloneButton isSelected={AloneSelected} onClick={handleAlone}>#혼자 오기 좋은</AloneButton>

      </div>
      <div>
        <button onClick={handleSubmit}>제출</button>
      </div>
    </MainContainer>
    );
  }

  export default Result;


/*
  구현할 태그 버튼 목록
  Price
  Cute
  Wide
  Corps
  Satisfaction
  Modern
  Ambience
  Visual
  Cozy
  Clean
  Service
  Exoticfood
  Exotictheme
  Classic
  Alone
*/




/*

  //이 링크 참고했음 -> https://tlsdnjs12.tistory.com/m/56

  //삼항연산자 썼을때는 안됐음.

  
  
  import React from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router";


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SubStoreList = styled.ul`
  list-style-type: square;
`;

function Result() {

  const { state } = useLocation();
  console.log(state);
  console.log(state.main_store.name);
  //로케이션을 갖고있을때만 아래것을 리턴!

  if (!state) {
    return <p>No state found</p>;
  }

  return (
    <MainContainer>
      <h1>Search Result</h1>

      <SectionContainer>
        {state.main_store ? (
            <>
              <h2>Main Store</h2>
              <p>Name: {state.main_store.name}</p>
              <p>Station: {state.main_store.station}</p>
              <p>Line: {state.main_store.line.join(', ')}</p>
              <p>Tags: {state.main_store.tags.join(', ')}</p>
              <p>Walking Time: {state.state.main_store.walking_time}</p>
            </>
          ) : (
            <p>No main store found</p>
          )}
        </SectionContainer>

        <SectionContainer>
          <h2>Sub Stores</h2>
          <SubStoreList>
            {state.main_store ? (
                <>
                  {state.state.sub_stores.map((store, index) => (
                    <li key={index}>{store}</li>
                  ))}
                </>
              ) : (
                <p>No sub_stores found</p>
              )}
          </SubStoreList>
        </SectionContainer>
      </MainContainer>
    );
  }

  export default Result;
  
  
*/