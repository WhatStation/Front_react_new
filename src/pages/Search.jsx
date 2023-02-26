import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { RiSearchEyeLine } from "react-icons/ri";
import styled from 'styled-components';
import {API} from '../config'; 
const API_URL = API.SEARCH

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchInput.length < 1) {
      setErrorMessage("검색어를 입력해주세요!");
      return;
    }
    try {
      const response = await axios.post(API_URL, { search: searchInput });
      console.log("check");
      console.log(response.data);
      console.log("상점 데이터 잘 넘겨 받았어요.");
      navigate("/Result", {
        state: { data: response.data, input: searchInput },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 321) {
        setErrorMessage("좀 더 자세한 분위기가 나타나게 작성해주세요!");
      }
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setErrorMessage('');
  };

  return (
    <div className='SearchContainer'>
      <form className='SearchAlign' onSubmit={handleSubmit}>
        <article className='SearchTitle'>Place AI</article>
        <div className="InputContainer">
          <div style={{ position: "relative" }}>
            <input className='SearchInput'
              type="text"
              maxLength='100'
              placeholder='키워드 중심으로 검색해주세요! 예) 아늑하고 가성비있는 넓은 식당' 
              value={searchInput}
              onChange={handleChange}
            />
            {errorMessage && (
              <p className="ErrorMessage" style={{ position: "absolute", top: "5vh" }}>{errorMessage}</p>
            )}
          </div>
        </div>
        <button className='SearchButton' type="submit">
          <div className='IconAlign'>
            <RiSearchEyeLine color='#fff'/>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Search;

/*
const infoLetters = styled.div`
  font-size:3rem;
  color: #00DE63;
  margin-right: 2rem;
  border:none;
  vertical-align: middle;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
`;
*/

  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, { search: searchInput });
      console.log("check")
      console.log(response.data)
      console.log( "상점 데이터 잘 넘겨 받았어요.")
      navigate(
        '/Result', {
           state: {data: response.data,
                  input: searchInput}
           });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  */