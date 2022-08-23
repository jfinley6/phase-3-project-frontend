import React, {useState} from 'react'
import Chips from './Chips';
import BetAmount from './BetAmount';

function Table({user, sinatraUser, setSinatraUser}) {
  const [gameStarted, setGameStarted] = useState(false)
  const [betAmount, setBetAmount] = useState(0)


  function hasTokens(betAmount) {
    if (betAmount <= sinatraUser.tokens) {
      let newTokens = sinatraUser.tokens - betAmount
      fetch(`http://localhost:9292/users/${sinatraUser.email}/${newTokens}`)
        .then((res) => res.json())
        .then((data) => {
          setSinatraUser(null)
          setSinatraUser(data)
          setBetAmount(0)
          setGameStarted(true)
        });
    } else {
      alert("You dont have enough tokens!")
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
            style={{ width: "60vw", height: "70vh" }}
            src="images/Blackjack-bg.jpeg"
          ></img>
          {gameStarted ? null : <Chips setBetAmount={setBetAmount} />}
          {gameStarted ? null : <BetAmount setBetAmount={setBetAmount} betAmount={betAmount} hasTokens={hasTokens} />}
        </div>
      ) : null}
    </>
  );
}

export default Table