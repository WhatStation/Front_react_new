import React from 'react';
import styled from 'styled-components';


//사용자 피드백 버튼 컴포넌트

const ThumbsAndKeywordButton = styled.button`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.493);
  color: ${(props) => (props.isSelected ? "#ffffffc6" : "#07a39b76")};
  padding: 10px 17px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1px;
  transition: all 0.2s ease-in-out;
  border-radius: 50px;
  border: none;
  font-weight: 700;
  box-shadow: 0 5px 20px rgba(147, 246, 253, 0.3), 5px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => (props.isSelected ? "#47c58ac6" : "#e9faff5e")};
  &:hover {
    background: linear-gradient(135deg,#d6ff7f, #00b3cc);
    cursor: pointer;
    color: #ffffffe8;
    text-shadow: #5fffea;
  }
`;

const KeywordButton = ({ text, isSelected, onClick }) => {
  return (
    <ThumbsAndKeywordButton isSelected={isSelected} onClick={onClick}>
      {text}
    </ThumbsAndKeywordButton>
  );
};

export default KeywordButton;