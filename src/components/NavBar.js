import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown"
import { auth } from "../firebase";

function NavBar({ setShow, setShowSignup, user }) {
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
              onClick={() => auth.signOut()}
              variant="primary"
            >
              Logout
            </Button>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span>
                  <i className="fa-solid fa-user"></i>
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default NavBar;
