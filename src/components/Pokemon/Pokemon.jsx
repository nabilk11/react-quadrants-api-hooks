import React from 'react';

export default function Pokemon({ pokemon }) {
  return (
    <div className="section">
    <h2 className='section-head'>Pokemon List</h2>
    {pokemon.map(poke => (
        <div key={poke} className='pokemon-list'>{poke}</div>
    ))}
    </div>
  )
}