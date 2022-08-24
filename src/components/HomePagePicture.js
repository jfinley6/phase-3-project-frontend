import React from "react";
import Table from "./Table";

function HomePagePicture({
  user,
  sinatraUser,
  setSinatraUser,
  gameStarted,
  setGameStarted,
  playerCards,
  setPlayerCards,
  dealerCards,
  setDealerCards,
  playerScore,
  setPlayerScore,
  dealersTurn,
  setDealersTurn,
  dealerScore,
  setDealerScore,
  playerTurn,
  setPlayerTurn,
  isPlayerBusted,
  setIsPlayerBusted,
  win,
  setWin,
  lost,
  setLost,
  push,
  setPush
}) {
  return (
    <div className="homePagePicture">
      <img
        className="rounded-2xl"
        src="images/how-to-play-blackjack-lead.jpeg"
        alt=""
        style={{ height: "75vh", width: "90vw" }}
      />
      <Table
        user={user}
        sinatraUser={sinatraUser}
        setSinatraUser={setSinatraUser}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        playerCards={playerCards}
        setPlayerCards={setPlayerCards}
        dealerCards={dealerCards}
        setDealerCards={setDealerCards}
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
        dealersTurn={dealersTurn}
        setDealersTurn={setDealersTurn}
        dealerScore={dealerScore}
        setDealerScore={setDealerScore}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
        isPlayerBusted={isPlayerBusted}
        setIsPlayerBusted={setIsPlayerBusted}
        win={win}
        setWin={setWin}
        lost={lost}
        setLost={setLost}
        push={push}
        setPush={setPush}
      />
    </div>
  );
}

export default HomePagePicture;
