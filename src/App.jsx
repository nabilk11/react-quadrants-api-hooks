import React, { useState } from "react";
import GameOfThrones from "./components/GameOfThrones/GameOfThrones";
import LoaderBtns from "./components/LoaderBtns/LoaderBtns";
import Pokemon from "./components/Pokemon/Pokemon";
import ReactKawaii from "./components/ReactKawaii/ReactKawaii";
import "./styles.scss";





function App() {


	return (
		<div className="main">
			<Pokemon  /> 
			<GameOfThrones  />
			<ReactKawaii  />
			<LoaderBtns />


		</div>
	);
}

export default App;
