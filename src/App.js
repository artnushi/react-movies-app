import React from 'react'
import './App.css'
import Header from './functionalComponents/header/Header'
import FilmCard from './functionalComponents/films/FilmCard'
import { BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom'
import Home from './functionalComponents/pages/Home'
import Login from './functionalComponents/pages/Login'
import SignUp from './functionalComponents/pages/SignUp'

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
