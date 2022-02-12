import React from 'react';

export default function LoaderBtns({ callPokemon }) {
  return (
    <div className="section">LoaderBtns
    <button onClick={callPokemon}>Load Pokemon</button>

    <button></button>
    </div>
  )
}