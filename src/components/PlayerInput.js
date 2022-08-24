import React from "react";
import Button from "react-bootstrap/Button";

function PlayerInput({ setDealersTurn, playerCards, deck, setPlayerCards, playerScore }) {
  function dealCards() {
    let randomCard1 = deck.splice(
      Math.floor(Math.random() * deck.length),
      1
    )[0];
    setPlayerCards([...playerCards, randomCard1]);
  }

  return (
    <div style={{ position: "absolute", top: "50vh", display: "flex", width: "100%", justifyContent: "space-evenly" }}>
      <Button style={{ width: "100px" }} onClick={dealCards}>
        Hit
      </Button>
      <Button style={{ width: "100px" }} onClick={() => setDealersTurn(true)}>
        Stand
      </Button>
    </div>
  );
}

export default PlayerInput;
