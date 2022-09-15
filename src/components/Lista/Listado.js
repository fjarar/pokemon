import axios from "axios";
import { useState, useEffect } from "react";
import PokemonCard from "../Card/PokemonCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Listado({pokemon}) {
  const [pokemonList, setPokemonList] = useState([]);
  const [poketest, setPokeTest] = useState([]);

  /* useEffect(() => {
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
  }, [setPokemonList]); */

  /* useEffect(()=>{
    const url = "https://pokeapi.co/api/v2/pokemon/";
    setPokemonList(pokemon.map(p=>axios.get(`${p}`)
    .then((res)=>{
        console.log(res.data);
    })
    ));
    
  }, [setPokemonList]);*/
  useEffect(()=>{
    setPokemonList(Promise.all(pokemon.map(p=>axios.get(`${p}`))))
  },[setPokemonList]);

  console.log(pokemonList.Result);

  function test(){
    return axios.get(`${pokemon}`);
  }

  
  /* async function getPokes() {
    const pokemons = await Promise.all(pokemonList.map(poke => test(poke.name)));
     const check = pokemons.map(i=>i.data);
    return pokemons;
  } */

  /* Promise.all(pokemon.map(p=>axios.get(p))).then(
    axios.spread((...allData)=>{
        setPokeTest(allData);
    })
  );

  const getPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5');
    const results = response?.data?.results || [];
  
    return Promise.all(results.map((res) => axios.get(res.url)));
  } */
  
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
        {pokemon.map((po, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img variant="top" src="/images/images.jfif" />
              <Card.Body>
                <Card.Title>
                  {po}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's contentsdsdwdwdwd.
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