import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Rating from '../moduls/Rating';
import '../App.css';

import {API} from '../config'; 
const API_URL = API.REVIEWS


const Background = styled.div`
  background-color: #FFFFFF;
  animation: fade-in 1s ease-in-out;
  border:none;
  border-radius: 20px;
  color: black;
  padding: 15rem 15rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  height: 50vh;
  width: 40vw;
  display: flex;
  //display: inline-block;
  margin: 10px;
  transition: all 0.8s ease-in-out;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15), 5px 6px 4px rgba(0, 0, 0, 0.2);
  background-color: "white";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const WriteReview = () => {
  <div
          />
  const [review, setReview] = useState('');
  const [password, setPassword] = useState('');
  const [score, setScore] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(API_URL, {
        "comment": review,
        "rating" : score,
        "password" : password,
      });

      if (data.success) {
        navigate('/ReviewWall');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  console.log(review)
  console.log(password)
  console.log(score)

  return (
    <div >
      <div className='BigContainerWriteReview'>
        <img 
            src={`${process.env.PUBLIC_URL}/img/mailbox.PNG`}
            //src={'/img/naver_bg.png'}
            className='mailbox'
            alt='mailbox'
          />
          <Background>
            <form className="review-form" onSubmit={handleSubmit}>
              {error && <div className="error">{error}</div>}
              <Rating onScoreChange={setScore} />
              <textarea placeholder='이곳에 리뷰를 적어주세요. :)' className='review-form2'
                value={review}
                maxlength='200'
                onChange={(event) => setReview(event.target.value)}
            />
            
            <input className='passwordInput'
              type="password"
              value={password}
              maxlength='6'
              placeholder='비밀번호(6자 이내)'
              onChange={(event) => setPassword(event.target.value)}
            />

            <div>
              <button className='SubmitButton' disabled={isLoading} type="submit">
                제출하기
              </button>
            </div>
          </form>
          </Background>
      </div>
    </div>
    
  );
};

export default WriteReview;




/*

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Rating from './Rating';

const WriteReview = () => {
  const [review, setReview] = useState('');
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post('http://localhost:8000/api/rate/', {
        "comment": review,
        "rating" : score,
        "password" : password,
      });

      if (data.success) {
        navigate('/ReviewWall');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  console.log(review)
  console.log(password)
  console.log(score)

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <Rating onScoreChange={setScore} />
      <textarea
        value={review}
        onChange={(event) => setReview(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button disabled={isLoading} type="submit">
        Submit
      </button>
    </form>
  );
};

export default WriteReview;
*/

/*

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Rating from './Rating';

const WriteReview = () => {
  const [review, setReview] = useState('');
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post('http://localhost:8000/api/rate/', {
        "comment": review,
        "rating" : score,
        "password" : password,
      });

      if (data.success) {
        navigate.push('/ReviewWall');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  console.log(review)
  console.log(password)
  console.log(score)

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <Rating onScoreChange={setScore} />
      <textarea
        value={review}
        onChange={(event) => setReview(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button disabled={isLoading} type="submit">
        Submit
      </button>
    </form>
  );
};

export default WriteReview;

*/


/*


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Rating from './Rating';

const WriteReview = () => {
  const [review, setReview] = useState('');
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/rate/', {
        comment: review,
        score,
        password,
      });

      if (response.data.success) {
        navigate.push('/ReviewWall');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  console.log(review)
  console.log(password)
  console.log(score)

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <Rating onScoreChange={setScore} />
      <textarea
        value={review}
        onChange={(event) => setReview(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button disabled={isLoading} type="submit">
        Submit
      </button>
    </form>
  );
};

export default WriteReview;

*/


/*

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Rating from './Rating';

const WriteReview = () => {
  const [review, setReview] = useState('');
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onScoreChange = (newScore) => {
    setScore(newScore);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/rate/', {
        comment: review,
        score,
        password,
      });
      if (response.data.success) {
        navigate.push('/ReviewWall');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  console.log(review)
  console.log(password)
  console.log(score)
  

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <div>
      <Rating onScoreChange={onScoreChange} />
        <textarea
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button disabled={isLoading} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default WriteReview;

*/




/*

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from './Rating';





const WriteReview = () => {
  const [review, setReview] = useState('');
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment: review, score, password }),
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        navigate.push('/review-wall');
      }
    }
  };
  
  return (
    <div className='BigContainer'>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">제출</button>
      </form>
      <Rating setScore= {Number({setScore})} />
    </div>
  );
};

export default WriteReview;


*/