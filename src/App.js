import React from 'react'
import './App.css'
import Header from './components/header/Header'
import FilmCard from './components/films/FilmCard'

function App () {
  return <>
    <div className="container mt-5">
      <Header />
      <FilmCard />
    </div>
  </>
}

export default App
