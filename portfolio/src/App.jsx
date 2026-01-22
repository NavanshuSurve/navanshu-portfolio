import Cursor from "./Cursor";
import "./index.css";
import Background from "./Backgrounds/Background";

import MainMenu from "./Menus/MainMenu";
import {  Routes, Route} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import FeedMyBrain from "./pages/FeedMyBrain";
import { useState } from "react";
import hotcoldImg from "./assets/hotcold.png";
import { useLocation } from "react-router-dom";
function App() {
  const location =useLocation();
  const showMenu =location.pathname==="/";
  const [background, setBackground] = useState("warm");
  const handleClick = () => {
    setBackground((prev) => {
      const newBg = prev === "warm" ? "cold" : "warm";
      console.log("Background changed to:", newBg);
      return newBg;
    });
  };
  return (
    <>
  <Background className={background} />

  {showMenu && <MainMenu />}

  <Routes>
    <Route path="/projects" element={<Projects />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/feedmybrain" element={<FeedMyBrain />} />
  </Routes>

  <div className="LEFT-BORDER">
    <img
      src={hotcoldImg}
      className="LEFT-BORDER-BUTTON"
      onClick={handleClick}
      alt="Toggle background"
    />
  </div>
</>
  );
}

export default App;
