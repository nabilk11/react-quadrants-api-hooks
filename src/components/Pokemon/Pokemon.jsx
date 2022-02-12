import React from 'react';

export default function Pokemon({ pokemon }) {
  return (
    <div className="section">Pokemon
    {pokemon.map(poke => (
        <div key={poke} className='pokemon-list'>{poke}</div>
    ))}
    </div>
  )
}