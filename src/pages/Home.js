import React, {createContext, useState} from "react";
import FlowersList from "../components/flowers/FlowersList";
import Layout from "../components/Layout";

export const SearchContext = createContext();

function Home() {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <>
            <SearchContext.Provider
                value={{
                    searchValue: searchValue,
                    handleChange: (event) => handleChange(event),
                }}
            >
                <Layout showSearch={true}>
                    <div className="container mt-5">
                        <FlowersList/>
                    </div>
                </Layout>
            </SearchContext.Provider>

        </>
    );
}

export default Home;
