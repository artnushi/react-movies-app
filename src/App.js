import React, {createContext, useState} from 'react'
import './App.css'
import Header from './functionalComponents/header/Header'
import FilmCard from './functionalComponents/films/FilmCard'
import FilmCardFunctional from "./components/films/FilmCardFunctional";
import FilmsList from "./functionalComponents/films/FilmsList";

export const SearchContext = createContext();

function App () {
  const [searchValue, setSearchValue] = useState("")

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return <>
    <div className="container mt-5">

      <SearchContext.Provider value={{
        searchValue: searchValue,
        handleChange: (event) => handleChange(event)
      }}>

        <Header />

        <FilmCardFunctional />
        {/*<FilmsList />*/}
      </SearchContext.Provider>

      {/*<FilmCard handleChange={ (event) => handleChange(event)} />*/}
    </div>
  </>
}


export default App
