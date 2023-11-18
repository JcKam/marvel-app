import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

// Components
import Navbar from "./components/navbar";
import Card from "./components/card";

// Pages
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Home from "./pages/Home";

//Styles
import "./utilities.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>MARVEL</h1>
      </div>

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:characterId" />
          <Route path="/comics/:comicId" />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" />
          {/* element={<Home />}  */}
          <Route path="*" element={<p>All</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
