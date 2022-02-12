import React from 'react';

export default function LoaderBtns({ callPokemon, callGameOfThrones }) {

  return (
    <div className="section">LoaderBtns
   <div className="pokemon">
        <button onClick={callPokemon}>Load Pokemon</button>
    </div>

    <div className="got">
        <button onClick={callGameOfThrones}>Load GOT Quote</button>
    </div>
    <button></button>
    </div>
  )
}