import React, { useState, useEffect } from "react";
import Chips from "./Chips";
import BetAmount from "./BetAmount";

function Table({ user, sinatraUser, setSinatraUser, setGameStarted, gameStarted }) {
  
  const [betAmount, setBetAmount] = useState(0);
  const [deck, setDeck] = useState([]);
  const [playerCards, setPlayerCards] = useState([])
  const [dealerCards, setDealerCards] = useState([])

  function createDeck() {
    let array = []
    let suits = ["spades", "diamonds", "clubs", "hearts"];
    let values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    let numbers = [11,2,3,4,5,6,7,8,9,10,10,10,10]

    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i], Number: numbers[x] };
        array.push(card);
      }
    }
    setDeck(deck => [...deck, ...array])
  }

  useEffect(() => {
    if (gameStarted === true && playerCards.length === 0) {
    dealCards()
    }
    
  },[deck])

  function dealCards() {
    let randomCard1 = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
    setPlayerCards([...playerCards, randomCard1])
    let randomCard2 = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
    setDealerCards([...dealerCards, randomCard2, "empty"])
  }

  function hasTokens(betAmount) {
    if (betAmount <= sinatraUser.tokens) {
      let newTokens = sinatraUser.tokens - betAmount;
      fetch(`http://localhost:9292/users/${sinatraUser.email}/${newTokens}`)
        .then((res) => res.json())
        .then((data) => {
          setSinatraUser(null);
          setSinatraUser(data);
          setGameStarted(true);
        })
        .then(() => createDeck());
    } else {
      alert("You dont have enough tokens!");
    }
  }

  return (
    <>
      {user ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            marginLeft: "auto",
          }}
        >
          <img
            className="rounded-2xl"
            style={{ width: "90vw", height: "75vh" }}
            src="images/Blackjack-bg.jpeg"
          ></img>
          {gameStarted ? null : <Chips setBetAmount={setBetAmount} />}
          {gameStarted ? null : (
            <BetAmount
              setBetAmount={setBetAmount}
              betAmount={betAmount}
              hasTokens={hasTokens}
            />
          )}
        </div>
      ) : null}
    </>
  );
}

export default Table;
