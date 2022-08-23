import React from 'react'

function Table({user}) {
  return (
    <>
      {user ? (
        <div style={{display: "flex", justifyContent: "center", position: "absolute", marginLeft: "auto"}}>
          <img style={{ width: "60vw", height: "65vh" }} src="images/Blackjack-bg.jpeg"></img>
        </div>
      ) : null}
    </>
  );
}

export default Table