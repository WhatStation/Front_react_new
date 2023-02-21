import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  0% {
    opacity: 0.3;
    transform: translateY(0) translateX(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(19%) translateX(0%);
  }
`;

const Title = styled.h1`
  color: rgb(81, 223, 53);
  font-size: 3.4rem;
  font-weight: 800;
  text-align: center;
  text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.8), 
	  0px 0px 1px rgba(255, 255, 255, 0.8);
  position: absolute; 
  top: calc(19% - 2.5rem); 
  left: calc(30% - 10rem);
  right: calc(30% - 10rem);
  transform: translate(-50%, -50%); 
  animation: ${fadeUp} 1s ease-in-out forwards;
  animation-fill-mode: forwards;
  z-index: 100;
  white-space: nowrap;

  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
    top: calc(20% - 4rem);
  }
`;


const ReviewWall = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/rate/');
        setReviews(data.comments);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <span
        key={number}
        className={currentPage === number ? 'active' : ''}
        onClick={() => handlePageChange(number)}
        style={{ color: '' }}
      >
        {number}
      </span>
    ));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
      <Title> 소중한 리뷰 감사합니다 :) </Title>

        <div className="BigContainerReviewWall">
          <div className="reviewColumns">
            {currentReviews.map(({ id, comment, rating }) => (
              <div key={id} className="reviewContainer">
                <div className="reviewCommentContainer">
                  <div className="reviewCommentTitle" style={{ color: 'white' }}>
                    Comment:
                  </div>
                  <div className="reviewComment" style={{ color: 'white' }}>
                    {comment}
                  </div>
                </div>
                <div className="reviewScoreContainer">
                  <div className="reviewScoreTitle" style={{ color: 'white' }}>
                    Score:
                  </div>
                  <div className="reviewScore" style={{ color: 'white' }}>
                    {rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pageNumbersContainer">{renderPageNumbers()}</div>
        </div>
      </div>
  );
};

export default ReviewWall;

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//리뷰wall 페이지의 메인 기능들에 대한 기능들을 담고 있는 함수! state들과 중요 변수들을 지정해줍니다.
const ReviewWall = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/rate/');
        setReviews(data.comments);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <span
        key={number}
        className={currentPage === number ? 'active' : ''}
        onClick={() => handlePageChange(number)}
        style={{ color: '' }}
      >
        {number}
      </span>
    ));
  };

  return (
    <div className='BigContainerReviewWall'>
      {currentReviews.map(({ id, comment, rating }) => (
        <div key={id} className='reviewContainer'>
          <div className='reviewCommentContainer' >
            <div className='reviewCommentTitle' style={{ color: 'white' }}>Comment:</div>
            <div className='reviewComment' style={{ color: 'white' }}>{comment}</div>
          </div>
          <div className='reviewScoreContainer'>
            <div className='reviewScoreTitle' style={{ color: 'white' }}>Score:</div>
            <div className='reviewScore' style={{ color: 'white' }}>{rating}</div>
          </div>
        </div>
      ))}
      <div className='pageNumbersContainer'>{renderPageNumbers()}</div>
      
    </div>
  );
};

export default ReviewWall;

*/

/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewWall = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/rate/');
        setReviews(data.comments);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <span
        key={number}
        className={currentPage === number ? 'active' : ''}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </span>
    ));
  };

  return (
    <div className='BigContainer'>
      {currentReviews.map(({ id, comment, score }) => (
        <div key={id} className='reviewContainer'>
          <div className='reviewCommentContainer'>
            <div className='reviewCommentTitle'>Comment:</div>
            <div className='reviewComment'>{comment}</div>
          </div>
          <div className='reviewScoreContainer'>
            <div className='reviewScoreTitle'>Score:</div>
            <div className='reviewScore'>{score}</div>
          </div>
        </div>
      ))}
      <div className='pageNumbersContainer'>{renderPageNumbers()}</div>
    </div>
  );
};

export default ReviewWall;

*/


/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewWall = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/rate/');
        setReviews(data.comments);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='BigContainer'>
      {reviews.length > 0 && reviews.map(({ id, comment, score }) => (
        <div key={id} className='reviewContainer'>
          <div className='reviewCommentContainer'>
            <div className='reviewCommentTitle'>Comment:</div>
            <div className='reviewComment'>{comment}</div>
          </div>
          <div className='reviewScoreContainer'>
            <div className='reviewScoreTitle'>Score:</div>
            <div className='reviewScore'>{score}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewWall;

*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewWall = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/rate/');
        setReviews(data.comments);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='BigContainer'>
      {reviews.length > 0 && reviews.map(({ id, comment, score }) => (
        <div key={id} className='review'>
          <div className='review-comment'>{comment}</div>
          <div className='review-score'>{score}</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewWall;

*/

/*


import React, { useState, useEffect } from 'react';

const ReviewWall = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('http://localhost:8000/api/rate/');
      const data = await response.json();
      setReviews(data.comments);
    };
    fetchReviews();
  }, []);

  return (
    <div className='BigContainer'>
      <div>
        {reviews.map((review) => (
          <div key={review.id}>
            <div>{review.comment}</div>
            <div>{review.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewWall;


*/