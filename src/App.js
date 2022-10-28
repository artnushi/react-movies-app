import React, { createContext, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AuthenticatedUser from "./pages/AuthenticatedUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/authenticated-user" element={<AuthenticatedUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
