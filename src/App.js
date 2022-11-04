import React  from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AuthenticatedUser from "./pages/AuthenticatedUser";
import {Provider} from "react-redux";
import makeStore from "./store/config";
import Sightings from "./pages/Sightings";

function App() {

  return (
    <>

      <Provider store={makeStore()} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/authenticated-user" element={<AuthenticatedUser />} />
            <Route path="/sightings" element={<Sightings />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  );
}

export default App;
