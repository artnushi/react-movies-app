import Home from "./functionalComponents/pages/Home";
import Signup from "./functionalComponents/pages/Signup";
import Login from "./functionalComponents/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}
export default App;