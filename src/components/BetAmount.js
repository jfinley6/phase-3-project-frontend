import React from "react";
import Button from "react-bootstrap/Button";

function BetAmount({ betAmount, setBetAmount, hasTokens }) {
  return (
    <>
      <img
        style={{
          position: "absolute",
          top: "20px",
          width: "200px",
        }}
        src="images/819-8194226_blackjack-instant-game-logo-graphic-design.png"
      ></img>
      <Button
        onClick={() => hasTokens(betAmount)}
        style={{
          position: "absolute",
          top: "68%",
        }}
        variant="primary"
      >
       <b>Place Bet</b>
      </Button>
      <div
        style={{
          position: "absolute",
          width: "80px",
          height: "30px",
          background: "white",
          top: "78%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <b>{betAmount}</b>
      </div>
      <Button
        onClick={() => setBetAmount(0)}
        style={{
          position: "absolute",
          top: "87%",
          width: "50px",
          display: "flex",
          justifyContent: "center",
        }}
        variant="primary"
      >
        <b>Reset</b>
      </Button>
    </>
  );
}

export default BetAmount;
