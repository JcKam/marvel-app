import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import "./App.css";

// Components
import Navbar from "./components/navbar";
import Card from "./components/card";
import Header from "./components/header";

// Pages
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Login from "./pages/Login";

//Styles
import "./utilities.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics/:characterId" />
          <Route path="/comics/:comicId" />
          <Route path="/character/:characterId" />
          {/* element={<Home />}  */}
          <Route path="*" element={<p>All</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
