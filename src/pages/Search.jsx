import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { RiSearchEyeLine } from "react-icons/ri";
import styled from 'styled-components';




const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(['http://localhost:8000/api/search/'], { search: searchInput });
      console.log("check")
      console.log(response.data)
      console.log( "상점 데이터 잘 넘겨 받았어요.")
      navigate(
        '/Result', {
           state: {data: response.data,
                  input: searchInput}
           });
    } catch (error) {
      console.error(error);
    }
  };


  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className='SearchContainer'>
        <form className='SearchAlign' onSubmit={handleSubmit}>
          <article className='SearchTitle'>Place AI</article>
          <input className='SearchInput'
            type="textInput"
            maxLength='30'
            placeholder='키워드 중심으로 검색해주세요! 예) 아늑하고 가성비있는 넓은 식당'
            value={searchInput}
            onChange={handleChange}
          /> 
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