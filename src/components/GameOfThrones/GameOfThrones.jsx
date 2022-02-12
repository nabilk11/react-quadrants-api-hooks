import React from 'react';

export default function GameOfThrones({ got }) {
    return (
        <div className="section">
        <h2 className='section-head'>Game of Thrones<br />
      <small>Random Quotes</small></h2>
           <div className='got-quote'>
           {got.sentence && <h2 style={{fontStyle: 'italic'}} >"{got.sentence}"</h2> }
            {got.character &&  <h3>By: {got.character.name}</h3> }
            {got.character &&  <h4>{got.character.house.name}</h4> }
           </div>
        <div>

        </div>

 </div>
  )
}