import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";

function PlayerInput({
  dealersTurn,
  setDealersTurn,
  playerCards,
  deck,
  setPlayerCards,
  playerScore,
  dealerCards,
  setDealerCards,
  dealerScore,
  playerTurn,
  setPlayerTurn,
  isPlayerBusted,
  setIsPlayerBusted,
  sinatraUser,
  setSinatraUser,
  betAmount,
  setGameStarted,
  win,
  setWin,
  lost,
  setLost
}) {
  function hasWon() {
    let newTokens = sinatraUser.tokens + betAmount * 2;
    fetch(`http://localhost:9292/users/${sinatraUser.email}/${newTokens}`)
      .then((res) => res.json())
      .then((data) => {
        setSinatraUser(null);
        setSinatraUser(data);
      });
  }

  useEffect(() => {
    if (dealerScore > 21) {
      hasWon();
    }
    if (dealerScore >= 17 && dealerScore < 22) {
      if (dealerScore > playerScore) {
        setLost(true)
        setTimeout(() => {
          setGameStarted(false);
        }, 1500)
      }
    }
  }, [playerScore, dealerScore]);

  function dealCardsPlayer() {
    let randomCard1 = deck.splice(
      Math.floor(Math.random() * deck.length),
      1
    )[0];
    setPlayerCards([...playerCards, randomCard1]);
  }

  function hasLost() {}

  useEffect(() => {
    if (playerScore > 21) {
      hasLost();
    }
  }, [playerScore]);

  function dealCardsDealer() {
    let randomCard1 = deck.splice(
      Math.floor(Math.random() * deck.length),
      1
    )[0];
    if (dealerScore < 100) setDealerCards([...dealerCards, randomCard1]);
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50vh",
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        {playerTurn ? (
          <>
            <Button
              style={{ width: "100px" }}
              onClick={() => dealCardsPlayer()}
            >
              Hit
            </Button>
            <Button
              style={{ width: "100px" }}
              onClick={() => dealCardsDealer()}
            >
              Stand
            </Button>
          </>
        ) : null}
      </div>
      {win ? (
        <div
          style={{
            color: "white",
            position: "absolute",
            top: "5vh",
            fontSize: "3em",
          }}
        >
          You won!
        </div>
      ) : null}
      {lost ? (
        <div
          style={{
            color: "white",
            position: "absolute",
            top: "5vh",
            fontSize: "3em",
          }}
        >
          You Lost!
        </div>
      ) : null}
    </>
  );
}

export default PlayerInput;
