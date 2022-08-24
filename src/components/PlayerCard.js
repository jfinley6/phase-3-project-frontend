import React from 'react'

function PlayerCard({card}) {
    const {Number, Value, Suit} = card
  return (
    <div
      style={{
        width: "50px",
        background: "white",
        height: "20vh",
        width: "100px",
        marginRight: "10px",
        borderRadius: "10px",
      }}
    >
      <div style={{ marginTop: "25px" }}>
        <b>{Value}</b>
      </div>
      <div style={{fontSize: "1.5em"}}>{Suit}</div>
    </div>
  );
}

export default PlayerCard