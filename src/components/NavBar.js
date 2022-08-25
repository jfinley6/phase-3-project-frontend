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
  setShowIconStore
}) {

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
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default NavBar;
