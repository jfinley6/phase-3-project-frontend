import React from 'react'

function Card({card}) {
    const {Number, Value, Suit} = card
  return (
    <div>
      <div>{Value}</div>
      <div>{Suit}</div>
    </div>
  );
}

export default Card