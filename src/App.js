import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/Barra/Barra';
import PokemonCard from './components/Card/PokemonCard';

function App() {
  return (
    <>
      <Barra />
      <PokemonCard />
    </>
  );
}

export default App;