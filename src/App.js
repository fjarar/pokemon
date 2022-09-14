import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Barra from "./components/Barra/Barra";
import PokemonCard from "./components/Card/PokemonCard";
import Listado from "./components/Lista/Listado";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon(res.data.results.map((p) => p.name));
    });
  }, [setPokemon]);
  return (
    <>
      <Barra />
      <Listado pokemon={pokemon}/>
    </>
  );
}

export default App;
