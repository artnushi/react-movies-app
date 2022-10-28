import React, { createContext, useState } from "react";
import FlowersList from "../components/flowers/FlowersList";
import Header from "../components/header/Header";

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

          <FlowersList />
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default Home;
