import axios from "axios";
import { useState, useEffect } from "react";
import PokemonCard from "../Card/PokemonCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Listado({pokemon}) {
  const [pokemonList, setPokemonList] = useState([]);
  const [num, setNum] = useState();

  useEffect(() => {
    const endPoint = `https://pokeapi.co/api/v2/pokemon/`;
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setPokemonList(apiData.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPokemonList]); 

  const url = "https://pokeapi.co/api/v2/pokemon/";
  function test(name){
    return axios.get(`${url}${name}`);
  }

  async function getPokes() {
    const withCoords = await Promise.all(pokemonList.map(poke => test(poke.name)));
    console.log(withCoords);
    return withCoords;
  }

  const pokes = getPokes();
  /* useEffect(() => {
    const endPoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setPokemonList(apiData.results);
        console.log(apiData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPokemonList]); */
  

  return (
    <>
      <div className="row m-auto">
        {pokemon.map(p => {
          return (
            <Card style={{ width: "18rem" }} key={p}>
              <Card.Img variant="top" src="/images/images.jfif" />
              <Card.Body>
                <Card.Title>
                  {p}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Listado;
