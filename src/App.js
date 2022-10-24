import React from 'react'
import './App.css'
import Header from './functionalComponents/header/Header'
import FilmCard from './functionalComponents/films/FilmCard'

function App () {
  return <>
    <div className="container mt-5">
      <Header />
      <FilmCard />
    </div>
  </>
}

export default App
