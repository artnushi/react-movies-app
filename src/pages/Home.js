import React, { createContext, useState } from "react";
import Header from "../functionalComponents/header/Header";
import FilmCardFunctional from "../components/films/FilmCardFunctional";

export const SearchContext = createContext();

function Home() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="container mt-5">
        <SearchContext.Provider
          value={{
            searchValue: searchValue,
            handleChange: (event) => handleChange(event),
          }}
        >
          <Header />

          <FilmCardFunctional />
          {/*<FilmsList />*/}
        </SearchContext.Provider>

        {/*<FilmCard handleChange={ (event) => handleChange(event)} />*/}
      </div>
    </>
  );
}

export default Home;
