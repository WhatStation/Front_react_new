import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';




const ARRAY = [0, 1, 2, 3, 4];

function Rating({ onScoreChange }) {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
      onScoreChange(clicked.filter(Boolean).length);
    }
    setClicked(clickStates);
    const score = clickStates.filter((clicked) => clicked).length;
    onScoreChange(score);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); 

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
  };

  return (
    <Wrap>
      <RatingText>이 서비스.. 잘 추천했나요?</RatingText>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}
      </Stars>
    </Wrap>
  );
}

export default Rating;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;




const RatingText = styled.div`
  color: #787878;
  font-size: 12px;
  font-weight: 400;
  margin-top: 2%;
`;

const Stars = styled.div`
  padding-top: 5px;
  margin-bottom: 2%;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #65E2B2;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #65E2B2;
  }
`;




/*

백업


import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ARRAY = [0, 1, 2, 3, 4];

function Rating() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
      onScoreChange(clicked.filter(Boolean).length);
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); 

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
  };

  return (
    <Wrap>
      <RatingText>평가하기</RatingText>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}
      </Stars>
    </Wrap>
  );
}

export default Rating;


*/




//출처: https://velog.io/@whoyoung90/TIL-35-WECODE-%EB%B3%84%EC%A0%90-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84