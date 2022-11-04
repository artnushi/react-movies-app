import React  from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AuthenticatedUser from "./pages/AuthenticatedUser";
import {Provider} from "react-redux";
import makeStore from "./store/config";

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
            <Route path="/counter" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  );
}

export default App;
