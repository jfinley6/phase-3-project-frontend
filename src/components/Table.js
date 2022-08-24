import React, { useState, useEffect } from "react";
import Chips from "./Chips";
import BetAmount from "./BetAmount";
import PlayerInput from "./PlayerInput";
import PlayerCard from "./PlayerCard";
import DealerCard from "./DealerCard";

function Table({
  user,
  sinatraUser,
  setSinatraUser,
  setGameStarted,
  gameStarted,
  playerCards,
  dealerCards,
  setPlayerCards,
  setDealerCards,
}) {
  const [betAmount, setBetAmount] = useState(0);
  const [deck, setDeck] = useState([]);

  function createDeck() {
    let array = [];
    let suits = ["♠", "♦", "♥", "♣"];
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
    let numbers = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i], Number: numbers[x] };
        array.push(card);
      }
    }
    setDeck((deck) => [...deck, ...array]);
  }

  useEffect(() => {
    if (gameStarted === true && playerCards.length === 0) {
      dealCards();
    }
  }, [deck]);

  function dealCards() {
    let randomCard1 = deck.splice(
      Math.floor(Math.random() * deck.length),
      1
    )[0];
    let randomCard2 = deck.splice(
      Math.floor(Math.random() * deck.length),
      1
    )[0];
    setPlayerCards([...playerCards, randomCard1, randomCard2]);
    let randomCard3 = deck.splice(
      Math.floor(Math.random() * deck.length),
      1
    )[0];
    setDealerCards([...dealerCards, randomCard3]);
  }

  const cards = playerCards.map((card) => {
    return <PlayerCard card={card} key={`${card.Value} ${card.Suit}`} />;
  });

  const cards2 = dealerCards.map((card) => {
    return <DealerCard card={card} key={`${card.Value} ${card.Suit}`} />;
  });

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
          {gameStarted ? (
            <PlayerInput
              deck={deck}
              playerCards={playerCards}
              setPlayerCards={setPlayerCards}
            />
          ) : (
            <Chips setBetAmount={setBetAmount} />
          )}
          {gameStarted ? null : (
            <BetAmount
              setBetAmount={setBetAmount}
              betAmount={betAmount}
              hasTokens={hasTokens}
            />
          )}
        </div>
      ) : null}
      <div style={{ position: "absolute", display: "flex", left: "150px" }}>
        {gameStarted ? cards : null}
      </div>
      <div style={{ position: "absolute", display: "flex", right: "250px" }}>
        {gameStarted ? cards2 : null}
      </div>
    </>
  );
}

export default Table;
