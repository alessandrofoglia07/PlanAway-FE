import React, { useEffect } from 'react'
import { NavBar } from '../components/navbar'
import { SignUpForm } from '../components/signUpForm'

export const SignUpPage = () => {

  useEffect(() => {
    const title = document.title;
    if (title.includes('Sign Up') === false) {
      document.title = 'PlanAway | Sign Up';
    }
  }, []);

  return (
    <div>
      <NavBar />
      <SignUpForm />
    </div>
  )
}
