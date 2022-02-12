import React from 'react';

export default function GameOfThrones({ got }) {
    return (
        <div className="section">
        <h1>Game of Thrones<br />
      <small>Random Quotes</small></h1>
           <div className='got-quote'>
             <h2>{got.sentence}</h2>        
          {got.character &&  <h3>By: {got.character.name}</h3> }
          {got.character &&  <h4>{got.character.house.name}</h4> }
        </div>
        <div>

        </div>

 </div>
  )
}