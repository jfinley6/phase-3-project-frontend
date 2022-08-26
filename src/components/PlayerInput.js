import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";

function PlayerInput({
  playerCards,
  deck,
  setPlayerCards,
  playerScore,
  dealerCards,
  setDealerCards,
  dealerScore,
  playerTurn,
  setPlayerTurn,
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
  setPush,
}) {
  function hasPushed() {
    let newTokens = sinatraUser.tokens + betAmount;
    fetch(`http://localhost:9292/users/${sinatraUser.email}/${newTokens}`)
      .then((res) => res.json())
      .then((data) => {
        setSinatraUser(null);
        setSinatraUser(data);
        setBetAmount(10);
      });
  }

  function hasWon() {
    let newTokens = sinatraUser.tokens + betAmount * 2;
    fetch(`http://localhost:9292/users/${sinatraUser.email}/${newTokens}`)
      .then((res) => res.json())
      .then((data) => {
        setSinatraUser(null);
        setSinatraUser(data);
        setBetAmount(10);
      });
  }

  useEffect(() => {
    if (dealerScore > 21 && win === false && lost === false) {
      setWin(true);
      hasWon();
      setTimeout(() => {
        setGameStarted(false);
      }, 3000);
    }

    if (
      dealerScore < 18 &&
      playerTurn === false &&
      win === false &&
      lost === false
    ) {
      setTimeout(() => {
        dealCardsDealer();
      }, 1000);
    }
    if (playerScore === 21 && win === false && lost === false) {
      setWin(true);
      hasWon();
      setTimeout(() => {
        setGameStarted(false);
      }, 3000);
    }
    if (playerScore > 21 && win === false && lost === false) {
      setLost(true);
      setBetAmount(10);
      setTimeout(() => {
        setGameStarted(false);
      }, 3000);
    }

    if (
      playerScore >= 18 &&
      playerScore < 21 &&
      win === false &&
      lost === false
    ) {
      setPlayerTurn(false);
      if (dealerScore < 17 && lost === false && win === false) {
        setTimeout(() => {
          dealCardsDealer();
        }, 1000);
      } else {
        if (playerScore > dealerScore && win === false && lost === false) {
          setWin(true);
          hasWon();
          setTimeout(() => {
            setGameStarted(false);
          }, 3000);
        } else if (
          playerScore === dealerScore &&
          win === false &&
          lost === false
        ) {
          setPush(true);
          hasPushed();
          setTimeout(() => {
            setGameStarted(false);
          }, 3000);
        } else if (dealerScore > 21 && win === false && lost === false) {
          setWin(true);
          hasWon();
          setTimeout(() => {
            setGameStarted(false);
          }, 3000);
        } else if (
          dealerScore > playerScore &&
          win === false &&
          lost === false
        ) {
          setLost(true);
          setBetAmount(10);
          setTimeout(() => {
            setGameStarted(false);
          }, 3000);
        }
      }
    }

    if (
      dealerScore >= 18 &&
      dealerScore < 22 &&
      win === false &&
      lost === false
    ) {
      if (dealerScore > playerScore && win === false && lost === false) {
        setLost(true);
        setBetAmount(10);
        setTimeout(() => {
          setGameStarted(false);
        }, 3000);
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
              style={{ width: "110px" }}
              onClick={() => dealCardsPlayer()}
            >
              Hit
            </Button>
            <Button
              style={{ width: "110px" }}
              onClick={() => {
                setPlayerTurn(false);
                dealCardsDealer();
              }}
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
            top: "15vh",
            fontSize: "2.5em",
          }}
        >
          You won {betAmount * 2} tokens!
        </div>
      ) : null}
      {lost ? (
        <div
          style={{
            color: "white",
            position: "absolute",
            top: "15vh",
            fontSize: "2.5em",
          }}
        >
          You Lost!
        </div>
      ) : null}
      {push ? (
        <div
          style={{
            color: "white",
            position: "absolute",
            top: "15vh",
            fontSize: "2.5em",
          }}
        >
          You Pushed!
        </div>
      ) : null}
    </>
  );
}

export default PlayerInput;
