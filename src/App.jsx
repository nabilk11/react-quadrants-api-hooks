import React, { useState } from "react";
import GameOfThrones from "./components/GameOfThrones/GameOfThrones";
import LoaderBtns from "./components/LoaderBtns/LoaderBtns";
import Pokemon from "./components/Pokemon/Pokemon";
import ReactKawaii from "./components/ReactKawaii/ReactKawaii";
import "./styles.scss";
import axios from 'axios';

function App() {

/****** POKEMON API SETUP WITH AXIOS ******/
// state for pokemon 
const [pokemon, setPokemon] = useState([])
// urlState
const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon')


function callPokemon() { 
	axios.get(pokemonUrl)
	.then(res => {
		setPokemon(res.data.results.map(poke => poke.name))
	})
}

/****** GOT Quotes API SETUP WITH AXIOS ******/
const [got, setGot] = useState({})
const [gotUrl, setGotUrl] = useState('https://game-of-thrones-quotes.herokuapp.com/v1/random')


async function callGameOfThrones() { 
	setGot((await axios.get(gotUrl)).data)

	}


	return (
		<div className="main">
			<Pokemon  pokemon={pokemon}/> 
			<GameOfThrones  got={got}/>
			<ReactKawaii  />
			<LoaderBtns callGameOfThrones={callGameOfThrones} callPokemon={callPokemon}/>


		</div>
	);
}

export default App;
