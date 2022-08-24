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
  setLost,
  setBetAmount,
  push,
  setPush
}) {
  function hasPushed() {
    let newTokens = sinatraUser.tokens + betAmount;
    fetch(`http://localhost:9292/users/${sinatraUser.email}/${newTokens}`)
      .then((res) => res.json())
      .then((data) => {
        setSinatraUser(null);
        setSinatraUser(data);
        setBetAmount(0);
      });
  }
  


  function hasWon() {
    let newTokens = sinatraUser.tokens + betAmount * 2;
    fetch(`http://localhost:9292/users/${sinatraUser.email}/${newTokens}`)
      .then((res) => res.json())
      .then((data) => {
        setSinatraUser(null);
        setSinatraUser(data);
        setBetAmount(0);
      });
  }

  useEffect(() => {
    if (dealerScore > 21) {
      setWin()
      hasWon()
      setTimeout(() => {
        setGameStarted(false);
      }, 2000);
    }

    if (playerScore < 17 && playerTurn === false) {
      setTimeout(() => {
        dealCardsDealer();
      }, 2000);

    }
    if (playerScore === 21) {
      setWin(true);
      hasWon();
      setTimeout(() => {
        setGameStarted(false);
      }, 2000);
    }
    if (playerScore > 21) {
      setLost(true);
      setBetAmount(0)
      setTimeout(() => {
        setGameStarted(false);
      }, 2000);
    }

    if (playerScore >= 17 && playerScore < 21) {
      setPlayerTurn(false);
      if (dealerScore < 17) {
        setTimeout(() => {
          dealCardsDealer();
        }, 2000);
      } else {
        if (playerScore > dealerScore) {
          setWin(true);
          hasWon();
          setTimeout(() => {
            setGameStarted(false);
          }, 2000);
        } else if (playerScore === dealerScore) {
          setPush(true)
          hasPushed()
          setTimeout(() => {
            setGameStarted(false);
          }, 2000);
        } else if (dealerScore > 21) {
          setWin(true);
          hasWon()
          setTimeout(() => {
            setGameStarted(false);
          }, 2000);
        } else if (dealerScore > playerScore) {
          setLost(true)
          setBetAmount(0)
          setTimeout(() => {
            setGameStarted(false);
          }, 2000);
        }
      }
    }

    if (dealerScore >= 17 && dealerScore < 22) {
      if (dealerScore > playerScore) {
        setLost(true);
        setBetAmount(0);
        setTimeout(() => {
          setGameStarted(false);
        }, 2000);
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

  function dealCardsDealer() {
    let randomCard1 = deck.splice(
      Math.floor(Math.random() * deck.length),
      1
    )[0];
    setDealerCards([...dealerCards, randomCard1]);
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
              onClick={() => {
                setPlayerTurn(false)
                dealCardsDealer()}}
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
      {push? (
        <div
          style={{
            color: "white",
            position: "absolute",
            top: "5vh",
            fontSize: "3em",
          }}
        >
          You Pushed!
        </div>
      ) : null }
    </>
  );
}

export default PlayerInput;
