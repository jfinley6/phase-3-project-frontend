import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePagePicture from "./components/HomePagePicture";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import SignupForm from "./SignupForm";
import DeleteProfile from "./DeleteProfile";
import Table from "./components/Table";

import { auth } from "./firebase";

function App() {
  const [show, setShow] = useState(false);
  const [signup, setShowSignup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showDeleteProfile, setShowDeleteProfile] = useState(false)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [sinatraUser, setSinatraUser] = useState(null);

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      if (user === null) {
        return;
      } else {
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
    setShowProfile(false);
    setShowDeleteProfile(false)
  };

  return (
    <div className="App">
      <NavBar
        setShow={setShow}
        header={"login"}
        setShowSignup={setShowSignup}
        user={user}
        sinatraUser={sinatraUser}
        setShowProfile={setShowProfile}
        setShowDeleteProfile={setShowDeleteProfile}
      />
      <div className="Content">
        <HomePagePicture user={user} sinatraUser={sinatraUser} setSinatraUser={setSinatraUser}/>
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
        <Profile show={showProfile} handleClose={handleClose} sinatraUser={sinatraUser} />
        <DeleteProfile show={showDeleteProfile} handleClose={handleClose} sinatraUser={sinatraUser}/>
      </div>
    </div>
  );
}

export default App;
