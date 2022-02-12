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
const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon')


function callPokemon() { 
	axios.get(currentUrl)
	.then(res => {
		setPokemon(res.data.results.map(poke => poke.name))
	})
}




	return (
		<div className="main">
			<Pokemon  pokemon={pokemon}/> 
			<GameOfThrones  />
			<ReactKawaii  />
			<LoaderBtns callPokemon={callPokemon}/>


		</div>
	);
}

export default App;
