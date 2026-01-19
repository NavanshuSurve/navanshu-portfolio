import Cursor from "./Cursor";
import "./index.css";
import Background from "./Backgrounds/Background";
import Particles from "./Backgrounds/Particle";
import MainMenu from "./Menus/MainMenu";
import {Routes,Route} from "react-router-dom";
import About from './Pages/About' 
import {useState} from 'react'
import hotcoldImg from './assets/hotcold.png';
function App() {
  const [background,setBackground]=useState('warm');
   const handleClick = () => {
  setBackground(prev => {
    const newBg = prev === 'warm' ? 'cold' : 'warm';
    console.log("Background changed to:", newBg);
    return newBg;
  });
};
  return (
    <>
      <Cursor />
      <div className="TOP-BORDER">NAVANSHU</div>
      <Background background={background} />
      <MainMenu />
      <Routes>
        <Route path="/projects" element={<div>This Page</div>}  />
        <Route path="/resume" element={<div>This Page</div>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/contact" element={<div>This Page</div>}  />
        <Route path="/feedmybrain" element={<div>Feed My Brain</div>} />
        <Route path="/" element={<div>This Page</div>} />
      </Routes>

      <div className="Right-Bar">
        <Particles
          particleColors={["#f70606", "#360505"]}
          particleCount={10000}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="LEFT-BORDER">
        <img 
  src={hotcoldImg} 
  className="LEFT-BORDER-BUTTON" 
  onClick={handleClick} 
  alt="Fireflies Button"
/>

        
      </div>
      
    </>
  );
}

export default App;
