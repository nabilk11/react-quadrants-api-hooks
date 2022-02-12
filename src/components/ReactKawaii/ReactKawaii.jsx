import React from 'react';
import { Cat, Chocolate } from 'react-kawaii';

export default function ReactKawaii({ got, pokemon }) {
    return (
        <div className="section">
        <h2 className='section-head'>React Kawaiis</h2>
        <div className="got-kawaii">
  
        {got.sentence ? <Cat size={200} mood="lovestruck" color="#DC143C" /> 
         : <Cat size={200} mood="sad" color="#0000FF" /> }
        </div>
        <div className="pokemon-kawaii">
        {pokemon.length >0 ? <Chocolate size={200} mood="lovestruck" color="#DC143C" />
        : <Chocolate size={200} mood="sad" color="#0000FF" />}
        </div>
      </div>
  )
}