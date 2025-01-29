import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Login } from './Components/Login';
import { SignIn } from './Components/SignIn';
import { LedrianInterfaz } from './Components/LedrianInterfaz';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<LedrianInterfaz />} />
      </Routes>
    </Router>
  )
}
