import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/Barra/Barra';
import PokemonCard from './components/Card/PokemonCard';
import Listado from './components/Lista/Listado';

function App() {
  return (
    <>
      <Barra />
      <Listado />
    </>
  );
}

export default App;