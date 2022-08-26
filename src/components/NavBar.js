import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { auth } from "../firebase";

function NavBar({
  setShow,
  setShowSignup,
  user,
  sinatraUser,
  setShowProfile,
  setShowDeleteProfile,
  setGameStarted,
  setPlayerCards,
  setDealerCards,
  setShowLeaderboard,
  setShowIconStore,
  setSinatraUser,
  setShowBlackJackRules
}) {

  function addTokens() {
    if (sinatraUser.tokens < 10) {
      fetch(`http://localhost:9292/users/${sinatraUser.email}/100`)
        .then((res) => res.json())
        .then((data) => {
          setSinatraUser(null)
          setSinatraUser(data)
        });
    }
  }


  return (
    <header className="flex items-center justify-between bg-gray-800 p-6 w-full">
      <img
        style={{ maxHeight: "125px", maxWidth: "200px" }}
        src="images/PNGPIX-COM-Playing-Card-Symbols-PNG-Transparent-Image.png"
      ></img>
      <h1
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="text-4xl text-gray-200"
      ></h1>
      <div>
        {user ? null : (
          <>
            <Button
              style={{ width: "100px", marginRight: "10px" }}
              onClick={() => setShow(true)}
              variant="primary"
            >
              <b>Login</b>
            </Button>
            <Button
              style={{ width: "100px" }}
              onClick={() => setShowSignup(true)}
              variant="primary"
            >
              <b>Signup</b>
            </Button>
          </>
        )}
        {user ? (
          <div style={{ display: "flex" }}>
            <Button
              style={{ width: "100px", marginRight: "10px" }}
              onClick={() => {
                setGameStarted(false);
                setDealerCards([]);
                setPlayerCards([]);
                auth.signOut();
              }}
              variant="primary"
            >
              <b>Logout</b>
            </Button>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span>
                  <i
                    style={{ width: "25px" }}
                    className={
                      sinatraUser === null
                        ? null
                        : sinatraUser.icons[0].image_url + " fa-lg"
                    }
                  ></i>
                  <b>
                    {sinatraUser === null
                      ? null
                      : ` • ${sinatraUser.tokens} tokens`}
                  </b>
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setShowProfile(true)}>
                  <b>Profile</b>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowBlackJackRules(true)}>
                  <b>Blackjack Rules</b>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowLeaderboard(true)}>
                  <b>Leaderboard</b>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowIconStore(true)}>
                  <b>Profile Icon</b>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowDeleteProfile(true)}>
                  <b>Delete Profile</b>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => addTokens()}>
                  <b>Add Tokens</b>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default NavBar;
