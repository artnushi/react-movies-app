import React, {createContext, useState} from 'react'
import './App.css'
<<<<<<< HEAD
import Header from './components/header/Header'
import FilmCardFunctional from './components/films/FilmCardFunctional'
=======
import Header from './functionalComponents/header/Header'
import FilmCard from './functionalComponents/films/FilmCard'
import FilmCardFunctional from "./components/films/FilmCardFunctional";
import FilmsList from "./functionalComponents/films/FilmsList";

export const SearchContext = createContext();
>>>>>>> 29215454b9af8833ef67c58e4fb6a25c0a06d18f

function App () {
  const [searchValue, setSearchValue] = useState("")

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return <>
    <div className="container mt-5">
<<<<<<< HEAD
      <Header />
      <FilmCardFunctional />
=======

      <SearchContext.Provider value={{
        searchValue: searchValue,
        handleChange: (event) => handleChange(event)
      }}>

        <Header />

        <FilmCardFunctional />
        {/*<FilmsList />*/}
      </SearchContext.Provider>

      {/*<FilmCard handleChange={ (event) => handleChange(event)} />*/}
>>>>>>> 29215454b9af8833ef67c58e4fb6a25c0a06d18f
    </div>
  </>
}


export default App
