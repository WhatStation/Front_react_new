import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';
import WriteReview from './pages/WriteReview';
import ReviewWall from './pages/ReviewWall';
import Search from './pages/Search';
import Result from './pages/Result';
import NavBarElements from './component/navBar/NavBarElements';

const NavBarContainer = styled.div`
  position: relative;
  z-index: 9999;
`;


function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBarContainer>
        <NavBarElements />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/WriteReview' element={<WriteReview />} />
          <Route path='/ReviewWall' element={<ReviewWall />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Result' element={<Result />} />
        </Routes>
      </NavBarContainer>
    </BrowserRouter>

     <footer>{/* footer 넣을거면 여기에!*/}</footer>
    </div>
  );
}
export default App;

/*

function App() {

  return (
    <BrowserRouter>
      <NavBarElements />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/WriteReview' element={<WriteReview />} />
        <Route path='/ReviewWall' element={<ReviewWall />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Result' element={<Result />} />
      </Routes>
      <footer>footer 입니다.</footer>

    </BrowserRouter>
  );
}
export default App;

*/



/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/