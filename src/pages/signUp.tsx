import React from 'react'
import { NavBar } from '../components/navbar'
import { SignUpForm } from '../components/signUpForm'

export const signUpPage = () => {
  return (
    <div>
      <NavBar />
      <SignUpForm />
    </div>
  )
}
