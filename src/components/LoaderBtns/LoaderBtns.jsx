import React from 'react';

export default function LoaderBtns({ callPokemon, callGameOfThrones }) {

  return (
    <div className="section">
      <h2 className='section-head' >Loader Buttons</h2>
    <div className="pokemon">
    <button className='btn' onClick={callPokemon}>Load Pokemon</button>
    </div>

    <div className="got">
    <button className='btn' onClick={callGameOfThrones}>Load GOT Quote</button>
    </div>
    </div>
  )
}