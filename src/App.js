import BarraNav from './components/BarraNav/BarraNav';
import SeccionHero from "./components/SeccionHero/SeccionHero";
import SobreMi from "./components/SobreMi/SobreMi";
import Skill from "./components/Skill/Skill";
import SeccionProyectos from "./components/SectionProyectos/SectionProyectos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import UpButton from "./components/UpButton/UpButton";
import mode from "./components/ColorButton/dark-mode";
import './App.scss';


function verifyMode() {
  const flag = localStorage.getItem("darkMode");

  if (flag === null) {
    localStorage.setItem("darkMode", false);
  }
  else {
    mode();
  }
}


function App() {
  verifyMode();
  return (
    <div className="App">
      <BarraNav />
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
