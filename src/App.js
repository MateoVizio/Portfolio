import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import React, { useRef, useState } from 'react';


function App() {

  const sobreMiRef = useRef(null);
  const proyectosRef = useRef(null);
  const habilidadesRef = useRef(null);
  const contactoRef = useRef(null);
  const educacionRef = useRef(null);
  const [isDayMode, setIsDayMode] = useState(true);
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleTheme = () => {
    setIsDayMode(!isDayMode);
  };

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  }

  return (
    <div className="App">
      <Header 
        sobreMiRef={sobreMiRef}
        proyectosRef={proyectosRef}
        habilidadesRef={habilidadesRef}
        contactoRef={contactoRef}
        educacionRef={educacionRef}
        toggleTheme={toggleTheme}
        isDayMode={isDayMode}
        toggleMenu={toggleMenu}
        setMostrarMenu={setMostrarMenu}
        mostrarMenu={mostrarMenu}
      />
      <Home 
        sobreMiRef={sobreMiRef}
        proyectosRef={proyectosRef}
        habilidadesRef={habilidadesRef}
        contactoRef={contactoRef}
        educacionRef={educacionRef}
        isDayMode={isDayMode}
        setMostrarMenu={setMostrarMenu}
        mostrarMenu={mostrarMenu}
      />
    </div>
  );
}

export default App;
