import axios from "axios";
import { useState, useEffect } from "react";
import PokemonCard from "../Card/PokemonCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Listado() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const endPoint = "https://pokeapi.co/api/v2/pokemon/";
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
  }, [setPokemonList]);
  return (
    <>
      <div className="row m-auto">
        {pokemonList.map((pokemon, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img variant="top" src="/images/images.jfif" />
              <Card.Body>
                <Card.Title>{pokemon.url.order}</Card.Title>
                {console.log(pokemon.url["name"])}
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
