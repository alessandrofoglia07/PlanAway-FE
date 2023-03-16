import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { BookPage } from './pages/book'
import { MainPage } from './pages/main';
// eslint-disable-next-line
import { MainPage as MainPageCopy } from './pages/main-test';
import { AboutPage } from './pages/about';

// npm start to run
export default function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/book' element={<BookPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}
