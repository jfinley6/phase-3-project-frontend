import React from "react";

function PlayerCard({ card }) {
  const { Number, Value, Suit } = card;
  return (
    <div
      style={{
        width: "50px",
        background: "white",
        height: "15vh",
        width: "60px",
        marginRight: "10px",
        borderRadius: "10px",
      }}
    >
      <div style={{ marginTop: "25px" }}>
        <b style={{ color: Suit === "♦" || Suit === "♥" ? "red" : null }}>
          {Value}
        </b>
      </div>
      <div style={{ color: Suit === "♦" || Suit === "♥" ? "red" : null, fontSize: "1.5em" }}>{Suit}</div>
    </div>
  );
}

export default PlayerCard;
