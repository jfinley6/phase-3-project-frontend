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
  playerScore,
  setPlayerScore,
  setDealersTurn,
  dealersTurn,
  dealerScore,
  setDealerScore,
  playerTurn,
  setPlayerTurn,
  isPlayerBusted,
  setIsPlayerBusted,
  win={win},
  setWin={setWin},
  lost={lost},
  setLost={setLost},
  push={push},
  setPush={setPush}
}) {
  const [betAmount, setBetAmount] = useState(10);
  const [deck, setDeck] = useState([]);

  function createDeck() {
    setDeck([])
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
    let dealerScoreAmount = dealerCards.reduce((sum, curr) => {
      return curr.Number + sum;
    }, 0);
    setDealerScore(dealerScoreAmount);
  }, [dealerCards]);
  useEffect(() => {
    let playerScoreAmount = playerCards.reduce((sum, curr) => {
      return curr.Number + sum;
    }, 0);
    setPlayerScore(playerScoreAmount);
  }, [playerCards]);

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
    setPush(false)
    setWin(false)
    setLost(false)
    setGameStarted(false)
    setPlayerCards([])
    setDealerCards([])
    if (betAmount === 0) {
      alert("You can't play for free!");
      return;
    } else {
      if (betAmount <= sinatraUser.tokens) {
        let newTokens = sinatraUser.tokens - betAmount;
        fetch(
          `https://salty-mesa-23649.herokuapp.com/users/${sinatraUser.email}/${newTokens}`
        )
          .then((res) => res.json())
          .then((data) => {
            setSinatraUser(null);
            setSinatraUser(data);
            setGameStarted(true);
            setPlayerTurn(true);
          })
          .then(() => createDeck());
      } else {
        alert("You dont have enough tokens!");
      }
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
            src="images/poker-table-background-green-color_47243-1068.webp"
          ></img>
          {gameStarted ? (
            <PlayerInput
              deck={deck}
              playerCards={playerCards}
              setPlayerCards={setPlayerCards}
              setDealerCards={setDealerCards}
              dealerCards={dealerCards}
              playerScore={playerScore}
              dealersTurn={dealersTurn}
              setDealersTurn={setDealersTurn}
              dealerScore={dealerScore}
              playerTurn={playerTurn}
              setPlayerTurn={setPlayerTurn}
              isPlayerBusted={isPlayerBusted}
              setIsPlayerBusted={setIsPlayerBusted}
              sinatraUser={sinatraUser}
              setSinatraUser={setSinatraUser}
              betAmount={betAmount}
              setBetAmount={setBetAmount}
              setGameStarted={setGameStarted}
              win={win}
              setWin={setWin}
              lost={lost}
              setLost={setLost}
              push={push}
              setPush={setPush}
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
      {gameStarted ? (
        <div
          style={{
            position: "absolute",
            color: "white",
            fontSize: "1.7em",
            left: "10vw",
            top: "20vh",
          }}
        >
          <b>Player Score: {playerScore}</b>
        </div>
      ) : null}
      {gameStarted ? (
        <div
          style={{
            position: "absolute",
            color: "white",
            fontSize: "1.7em",
            right: "10vw",
            top: "20vh",
          }}
        >
          <b>Dealer Score: {dealerScore}</b>
        </div>
      ) : null}
      <div style={{ position: "absolute", display: "flex", left: "10vw" }}>
        {gameStarted ? cards : null}
      </div>
      <div style={{ position: "absolute", display: "flex", right: "10vw" }}>
        {gameStarted ? cards2 : null}
      </div>
    </>
  );
}

export default Table;
