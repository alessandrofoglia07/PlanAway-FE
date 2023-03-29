import React, { useEffect } from 'react'
import { NavBar } from '../components/navbar'
import { LoginForm } from '../components/loginForm'

export const LoginPage = () => {

  useEffect(() => {
    const title = document.title;
    if (title.includes('Login') === false) {
      document.title = 'PlanAway | Login';
    }
  }, []);

  return (
    <div>
        <NavBar />
        <LoginForm />
    </div>
  )
}
