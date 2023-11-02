import BarraNav from './components/BarraNav/BarraNav';
import SeccionHero from "./components/SeccionHero/SeccionHero";
import SobreMi from "./components/SobreMi/SobreMi";
import Skill from "./components/Skill/Skill";
import SeccionProyectos from "./components/SectionProyectos/SectionProyectos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import UpButton from "./components/UpButton/UpButton";
import mode from "./components/ColorButton/dark-mode";
import { useState } from 'react';
import './App.scss';


function verifyMode(isDarkMode,setIsDarkMode) {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === null) {
    localStorage.setItem("darkMode", isDarkMode);
  }
  else {
    mode(darkMode);
    setIsDarkMode(darkMode);
  }
}


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  verifyMode(isDarkMode,setIsDarkMode);

  return (
    <div className="App">
      <BarraNav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SeccionHero />
      <SobreMi />
      <Skill />
      <SeccionProyectos />
      <Contacto />
      <Footer />
      <UpButton />
    </div>
  );
}

export default App;
