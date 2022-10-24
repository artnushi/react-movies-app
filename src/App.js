import React from 'react'
import './App.css'
import Header from './components/header/Header'
import FilmCard from './components/films/FilmCard'
import FilmCardFunctional from "./components/films/FilmCardFunctional";

function App () {
  return <>
    <div className="container mt-5">
      <Header />
      {/*<FilmCard />*/}
      <FilmCardFunctional />
    </div>
  </>
}

export default App
