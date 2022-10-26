import React from 'react'
import './App.css'
import Header from './components/header/Header'
import FilmCardFunctional from './components/films/FilmCardFunctional'

function App () {
  return <>
    <div className="container mt-5">
      <Header />
      <FilmCardFunctional />
    </div>
  </>
}

export default App
