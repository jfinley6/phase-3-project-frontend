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
  setSinatraUser
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

 console.log(sinatraUser)

  return (
    <header className="flex items-center justify-between bg-gray-800 p-6 w-full">
      <h1 className="text-4xl text-gray-200">Blackjack App</h1>
      <div>
        {user ? null : (
          <>
            <Button
              style={{ width: "100px", marginRight: "10px" }}
              onClick={() => setShow(true)}
              variant="primary"
            >
              Login
            </Button>
            <Button
              style={{ width: "100px" }}
              onClick={() => setShowSignup(true)}
              variant="primary"
            >
              Signup
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
                setPlayerCards([])
                auth.signOut();
              }}
              variant="primary"
            >
              Logout
            </Button>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span>
                  <i
                  style={{width: "25px"}}
                    className={
                      sinatraUser === null
                        ? null
                        : sinatraUser.icons[0].image_url
                    }
                  ></i>
                  {sinatraUser === null
                    ? null
                    : ` • ${sinatraUser.tokens} tokens`}
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setShowProfile(true)}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item>Blackjack Rules</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowLeaderboard(true)}>Leaderboard</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowIconStore(true)}>Profile Icon</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowDeleteProfile(true)}>
                  Delete Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => addTokens()}>
                  Add Tokens
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
