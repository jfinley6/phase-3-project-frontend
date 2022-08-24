import React from "react";
import Button from "react-bootstrap/Button";

function BetAmount({ betAmount, setBetAmount, hasTokens }) {
  return (
    <>
      <Button
        onClick={() => hasTokens(betAmount)}
        style={{
          position: "absolute",
          top: "69%",
        }}
        variant="primary"
      >
        Place Bet
      </Button>
      <div
        style={{
          position: "absolute",
          width: "100px",
          height: "30px",
          background: "white",
          top: "78%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {betAmount}
      </div>
      <Button
        onClick={() => setBetAmount(0)}
        style={{
          position: "absolute",
          top: "86%",
          width: "45px",
          display: "flex",
          justifyContent: "center"
        }}
        variant="primary"
      >
        Reset
      </Button>
    </>
  );
}

export default BetAmount;
