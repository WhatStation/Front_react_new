import { React, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router"
import axios from 'axios';
import './App.css';
import Map from './Map';

const API_URL = "http://localhost:8000/api/search/";

//지저분한 꾸밈 컴포넌트들 ^.^

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PopupText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const PopupButton = styled.button`
  background-color: #05d686;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`;


const MainContainer = styled.div`
  position: relative;
  background: linear-gradient(135deg, #d6ff7f, #00b3cc);
  background-attachment: fixed;
  background-size: cover;
  background-blur: 20px;
  backdrop-filter: blur(20px) brightness(120%);
  padding: 1.5vw;
  display: flex;
  flex-direction: column; 
  margin-top: 10vh;
  z-index: 1;
  align-items: center;
  min-height: 100vh; /* Added to set the minimum height of the container to the height of the viewport */
  font-size: 16px; /* Added to set the font size to a fixed value */
  width: 1980px; /* Added to fix the width of the container */
  overflow-x: hidden; /* Added to prevent horizontal scrolling */
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('your-pattern-url-here');
    opacity: 0.3;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ReactionContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-bottom: 10px;
`;


const TitleContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 50vw;
  background-color: #05D686;
  border-radius: 70px;
  color: #FFFFFF;
  font-size: 2.5rem;
  font-weight: bold;
  animation: fade-in 1s ease-in-out;
  font-family: 'Nanum Gothic', sans-serif;
  
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


const TitleOfInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;



const SubStoreList = styled.ul`
  list-style-type: square;
`;




//사용자 피드백 버튼 컴포넌트

const ThumbsAndKeywordButton = styled.button`
  font-family: 'Nanum Gothic', sans-serif;
  background: linear-gradient(135deg, #d6ff7f, #00b3cc);
  border: none;
  color: white;
  padding: 10px 17px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  transition: all 0.2s ease-in-out;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 0 0 4px #fff;
  &:hover {
    background: linear-gradient(135deg, #96eaca, #00b3cc);
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2), 0 0 0 4px #fff;
  }
`;

const ThumbsAndKeywordButton = styled.button`
  font-family: 'Nanum Gothic', sans-serif;
  background: linear-gradient(135deg, #d6ff7f, #00b3cc);
  border: none;
  color: white;
  padding: 10px 17px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  transition: all 0.2s ease-in-out;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 0 0 4px #fff;
  &:hover {
    background: linear-gradient(135deg, #96eaca, #00b3cc);
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2), 0 0 0 4px #fff;
  }
`;


const KeywordButton = ({ text, isSelected, onClick }) => {
  return (
    <ThumbsAndKeywordButton isSelected={isSelected} onClick={onClick}>
      {text}
    </ThumbsAndKeywordButton>
  );
};





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

    /*
    const handleModalOpen = () => {
      setIsModalOpen(true);
    };

    */
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
    <div>
      <MainContainer>
        <TitleContainer>찾으시는 장소를 발견했습니다!</TitleContainer>
          <SectionContainer className="BigContainerResult">
            <div className='BigZone'>
              <Map />
              <div className='alignMaster'>
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
                      onClick={() => toggleFeedback("thumbs_down")
                    }
                    />
                  </div>
                </div>
              </article>
          </SectionContainer>
          <ReactionContainer>
            <div>
              <h6> 내가 넣은 검색어는 어떤 키워드와 어울린다고 생각하시나요?</h6>
              <h5>검색하신 내용 : {state.input} </h5>
            </div>
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
                  text="#분위기있는"
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
              <div>
                <button onClick={handleSubmit}>제출</button>
              </div>
          </ReactionContainer>
      </MainContainer>
      <PopupContainer show={showPopup}>
        <PopupText>Successful Submission!</PopupText>
        <PopupButton onClick={() => setShowPopup(false)}>Close</PopupButton>
      </PopupContainer>
    </div>
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
