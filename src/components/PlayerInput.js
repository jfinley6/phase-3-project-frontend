import React from 'react'
import Button from "react-bootstrap/Button";


function PlayerInput({setDealersTurn, playerCards}) {

  function dealCards() {
    let randomCard1 = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
    setPlayerCards([...playerCards, randomCard1])
  }

  console.log(playerCards)





  return (
    <div>
        <Button onClick={dealCards}> Hit </Button>
        <Button onClick={() => setDealersTurn(true)}> Stand </Button>
    </div>
  )
}

export default PlayerInput