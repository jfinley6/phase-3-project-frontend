import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePagePicture from "./components/HomePagePicture";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function App() {
  const [show, setShow] = useState(false);
  const [signup, setShowSignup] = useState(false);
  const [modalStyle, setModalStyle] = useState(getModalStyle);

  const handleClose = () => {
    setShow(false);
    setShowSignup(false);
  };

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  return (
    <div className="App">
      <NavBar setShow={setShow} header={"login"} setShowSignup={setShowSignup} />
      <div className="Content">
        <HomePagePicture />
        <LoginForm
          show={show}
          handleClose={handleClose}
        />
        <SignupForm show={signup} handleClose={handleClose}/>
      </div>
    </div>
  );
}

export default App;
