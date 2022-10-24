import React from 'react'
import './App.css'
import Header from './functionalComponents/header/Header'
import FilmCard from './functionalComponents/films/FilmCard'
// import FilmCard from './components/films/FilmCard'
import FilmCardFunctional from "./components/films/FilmCardFunctional";

function App () {
  return <>
    <div className="container mt-5">
      <Header />
      <FilmCardFunctional />
      {/*<FilmCard />*/}
    </div>
  </>
}

export default App
