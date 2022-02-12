import React, { useEffect, useState } from "react";
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

// next url state
const [nextUrl, setNextUrl] = useState(pokemonUrl);

function callPokemon() { 
	axios.get(pokemonUrl)
	.then(res => {
		setNextUrl(res.data.next)

		setPokemon(res.data.results.map(poke => poke.name))
	})
}
// useEffect is now allows us to load more pokemon on each button click

useEffect(() => {
	setPokemonUrl(nextUrl)
},[nextUrl])






/****** GOT Quotes API SETUP WITH AXIOS ******/
const [got, setGot] = useState({})
// gotUrl - Dont really need useState here but might use later
const [gotUrl, setGotUrl] = useState('https://game-of-thrones-quotes.herokuapp.com/v1/random')


async function callGameOfThrones() { 
	setGot((await axios.get(gotUrl)).data)

	}


	return (
		<div className="main">
			<Pokemon  pokemon={pokemon} />	
			<GameOfThrones  got={got}/>
			<ReactKawaii got={got} pokemon={pokemon} />
			<LoaderBtns callGameOfThrones={callGameOfThrones} callPokemon={callPokemon} />


		</div>
	);
}

export default App;
