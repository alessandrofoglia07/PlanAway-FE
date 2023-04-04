import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';
// eslint-disable-next-line
import { MainPage as MainPageCopy } from './pages/main-test';
import { AboutPage } from './pages/about';
import { CartPage } from './pages/cart';
import { NotFoundPage } from './pages/notFound';
import { SignUpPage } from './pages/signUp';
import { LoginPage } from './pages/login';
import { ProfileDashboardPage } from './pages/profileDashboard';
import { RequireAuth } from 'react-auth-kit';
import { TransferMoneyPage } from './pages/transferMoney';
import { VerifyEmailPage } from './pages/verifyEmail';

// npm start to run
export default function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/book' element={<BookPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<RequireAuth loginPath='/login'><ProfileDashboardPage /></RequireAuth>} />
          <Route path='/transferMoney' element={<RequireAuth loginPath='/login'><TransferMoneyPage /></RequireAuth>} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/verify/:token' element={<VerifyEmailPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}
