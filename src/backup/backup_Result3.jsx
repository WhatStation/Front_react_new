import { React, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router"
import axios from 'axios';
import '../App.css';
import Map from '../moduls/Map';
import { PopupContainer, PopupText, PopupButton } from '../moduls/PopupContainer'; 
import KeywordButton from '../component/KeywordButton'; 
import { Container, IMGContainer, MainContainer, SectionContainer, ReactionContainer, TitleContainer, TitleTextContainer, TopTitle, BottomTitle, TitleOfInfo, SubStoreList} from '../component/styledComponents'; 


const API_URL = "http://localhost:8000/api/search/";


function Result() {

    //Search에서 백엔드로부터 받았던 음식점 정보 받아오기 (state)

    const state = useLocation().state;
    const [showPopup, setShowPopup] = useState(false);
    const [feedbackData, setFeedbackData] = useState({
        search: state.input,
        thumbs_up: false,
        price: false,
        cute: false,
        wide: false,
        corps: false,
        satisfaction: false,
        modern: false,
        ambience: false,
        visual: false,
        cozy: false,
        clean: false,
        service: false,
        exoticfood: false,
        exotictheme: false,
        classic: false,
        alone: false,
    });

    const toggleFeedback = (feedback) => {
      if (feedback === 'thumbs_down') {
        setFeedbackData((prevState) => ({
          ...prevState,
          thumbs_down: !prevState.thumbs_down,
        }));
      } else {
        setFeedbackData((prevState) => ({
          ...prevState,
          [feedback]: !prevState[feedback],
        }));
      }
    };

    const handleSubmit = async () => {
      try {
        const { thumbs_down, ...feedback } = feedbackData;
        const response = await axios.put(
          API_URL,
          { ...feedback}
          );
          if (response.status === 200){
            console.log("제출 버튼이 잘 눌렸습니다.")
            setShowPopup(true);
          }
          else {
            console.log("errorcode" + response.status);
            const errorText = document.createElement("p");
            errorText.style.color = "red";
            errorText.textContent = "An error has occurred.";
            const submitButton = document.querySelector("button");
            submitButton.parentNode.appendChild(errorText);
          };
        } catch (error) {}
      };


  //디버깅용
  console.log(state.data); 
  console.log(`현재 추천된 식당의 이름은 ${state.data.main_store.name}`);
  console.log(`입력 받은 검색어는 ${state.input}`);

  //정보가 들어왔는지 확인!
  if (!state) {
    return <p>No state found</p>;
  }
  //정보를 갖고있을때만 아래것을 리턴!

  return (
    <Container>
      <TitleContainer>
        <TitleTextContainer>
          <TopTitle>찾으시는 장소를</TopTitle>
          <BottomTitle>발견했습니다!</BottomTitle>
        </TitleTextContainer>
      </TitleContainer>
      <MainContainer>
      <div>
            <button onClick={handleSubmit}>제출</button>
                        </div>
        <div>
          <IMGContainer/>
        </div>

          <SectionContainer className="BigContainerResult">
            <div className='BigZone'>
              <Map />
              <div>
                <article>
                { state && (
                    <>
                    <h3> 여기 어때요? </h3>
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
                </article>
              </div>
            </div>
              <article>
                <div>
                  <h4> 이런 가게도 있어요! </h4>
                    <SubStoreList>
                      { state && (
                        state.data.sub_stores.map((store, index) => (
                          <li key={index}>{store}</li>
                        ))
                      )}
                    </SubStoreList>
                  </div>
                <div>
                  <div>
                    <h6> 추천 내용에 만족하시나요?</h6>
                  </div>
                  <div>
                    <KeywordButton
                      text="👍"
                      isSelected={feedbackData.thumbs_up}
                      onClick={() => toggleFeedback("thumbs_up")}
                    />
                    <KeywordButton
                      text="👎"
                      isSelected={feedbackData.thumbs_down}
                      onClick={() => toggleFeedback("thumbs_down")}
                    />
                  </div>
                </div>
              </article>
          </SectionContainer>
          <div>
              <h6> 내가 넣은 검색어는 어떤 키워드와 어울린다고 생각하시나요?</h6>
              <h5>검색하신 내용 : {state.input} </h5>
          </div>
          <ReactionContainer>
              <div className='keyWordTag'>
                <KeywordButton
                  text="#가성비있는"
                  isSelected={feedbackData.price}
                  onClick={() => toggleFeedback("price")}
                />
                <KeywordButton
                  text="#귀여운"
                  isSelected={feedbackData.cute}
                  onClick={() => toggleFeedback("cute")}
                />
                <KeywordButton
                  text="#넓은"
                  isSelected={feedbackData.wide}
                  onClick={() => toggleFeedback("wide")}
                />
                <KeywordButton
                  text="#단체가 와도 좋은"
                  isSelected={feedbackData.corps}
                  onClick={() => toggleFeedback("corps")}
                />
                <KeywordButton
                  text="#만족스러운"
                  isSelected={feedbackData.satisfaction}
                  onClick={() => toggleFeedback("satisfaction")}
                />
                <KeywordButton
                  text="#모던한"
                  isSelected={feedbackData.modern}
                  onClick={() => toggleFeedback("modern")}
                />
                <KeywordButton
                  text="#분위기있는"
                  isSelected={feedbackData.ambience}
                  onClick={() => toggleFeedback("ambience")}
                />
                <KeywordButton
                  text="#비주얼이 좋은"
                  isSelected={feedbackData.visual}
                  onClick={() => toggleFeedback("visual")}
                />
                <KeywordButton
                  text="#아늑한"
                  isSelected={feedbackData.cozy}
                  onClick={() => toggleFeedback("cozy")}
                />
                <KeywordButton
                  text="#깔끔한"
                  isSelected={feedbackData.clean}
                  onClick={() => toggleFeedback("clean")}
                />
                <KeywordButton
                  text="#서비스가 좋은"
                  isSelected={feedbackData.service}
                  onClick={() => toggleFeedback("service")}
                />
                <KeywordButton
                  text="#음식이 특이한"
                  isSelected={feedbackData.exoticfood}
                  onClick={() => toggleFeedback("exoticfood")}
                />
                <KeywordButton
                  text="#이색 테마인"
                  isSelected={feedbackData.exotictheme}
                  onClick={() => toggleFeedback("exotictheme")}
                />
                <KeywordButton
                  text="#전형적인"
                  isSelected={feedbackData.classic}
                  onClick={() => toggleFeedback("classic")}
                />
                <KeywordButton
                  text="#혼자 오기 좋은"
                  isSelected={feedbackData.alone}
                  onClick={() => toggleFeedback("alone")}
                />
              </div>
          </ReactionContainer>
      </MainContainer>
      <PopupContainer show={showPopup}>
        <PopupText>Successful Submission!</PopupText>
        <PopupButton onClick={() => setShowPopup(false)}>Close</PopupButton>
      </PopupContainer>
    </Container>
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


  //참고 글  https://heinafantasy.com/168
  // https://ddorang-d.tistory.com/89
  //배경이미지 그라데이션 쉽게 https://forgottenknowledge.tistory.com/49

  
//   backdrop-filter: blur(20px) brightness(120%);

/*내맘대로 호버링해서 옮길수있게해둔 녀석 필요할때 언제든 쓰자~

const IMGContainer = styled.div`
  color: rgb(255, 255, 255);
  background-image: url("./img/Result (6).png");
  font-size: 3.3rem;
  text-align: center;
  text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.8), 
	  0px 0px 1px rgba(255, 255, 255, 0.8);
  position: absolute; 
  top: calc(60% - 2rem); 
  left: calc(70% - 0rem);
//  right: calc(30% - 10rem);
  transform: translate(-50%, -50%); 
  width: 30%;
  height: 50%;
  z-index: 9999;
  white-space: nowrap;
`;

*/

/*
const handleModalOpen = () => {
  setIsModalOpen(true);
};

*/

/*
<div>
<button onClick={handleSubmit}>제출</button>
</div>
*/
