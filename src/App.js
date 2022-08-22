import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePagePicture from "./components/HomePagePicture";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { auth } from "./firebase";

function App() {
  const [show, setShow] = useState(false);
  const [signup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);
  const [sinatraUser, setSinatraUser] = useState(null)

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      if (user === null) {
      return;
      }
      else {
        fetch(`http://localhost:9292/users/${user.email}`)
          .then((res) => res.json())
          .then((data) => setSinatraUser(data));
      }
    });
    return () => {
      unsubcribe();
    };
  }, [user, username]);

  const handleClose = () => {
    setShow(false);
    setShowSignup(false);
  };

  return (
    <div className="App">
      <NavBar
        setShow={setShow}
        header={"login"}
        setShowSignup={setShowSignup}
        loggedin={loggedin}
        user={user}
        sinatraUser={sinatraUser}
      />
      <div className="Content">
        <HomePagePicture />
        <LoginForm
          show={show}
          handleClose={handleClose}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          user={user}
        />
        <SignupForm
          show={signup}
          handleClose={handleClose}
          setEmail={setEmail}
          setPassword={setPassword}
          setUsername={setUsername}
          username={username}
          email={email}
          password={password}
          user={user}
        />
      </div>
    </div>
  );
}

export default App;
