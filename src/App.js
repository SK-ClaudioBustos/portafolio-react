import './App.scss';
// Componentes
import BarraNav from './components/BarraNav/BarraNav';
import SeccionHero from "./components/SeccionHero/SeccionHero";
import SobreMi from "./components/SobreMi/SobreMi";
import Experiencia from "./components/Experiencia/Experiencia";
import SeccionProyectos from "./components/SectionProyectos/SectionProyectos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import UpButton from "./components/UpButton/UpButton";

function App() {
  return (
    <div className="App">
      <BarraNav/>      
      <SeccionHero/>
      <SobreMi/>
      <Experiencia/>
      <SeccionProyectos/>
      <Contacto/>
      <Footer/>
      <UpButton/>
    </div>
  );
}

export default App;
