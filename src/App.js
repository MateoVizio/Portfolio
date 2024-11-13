import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import React, { useRef } from 'react';


function App() {

  const sobreMiRef = useRef(null);
  const proyectosRef = useRef(null);
  const habilidadesRef = useRef(null);
  const contactoRef = useRef(null);

  return (
    <div className="App">
      <Header 
        sobreMiRef={sobreMiRef}
        proyectosRef={proyectosRef}
        habilidadesRef={habilidadesRef}
        contactoRef={contactoRef}
      />
      <Home 
        sobreMiRef={sobreMiRef}
        proyectosRef={proyectosRef}
        habilidadesRef={habilidadesRef}
        contactoRef={contactoRef}
      />
    </div>
  );
}

export default App;
