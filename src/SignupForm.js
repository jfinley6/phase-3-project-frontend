import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { auth } from "./firebase";

// import firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SignupForm({
  handleClose,
  show,
  password,
  setPassword,
  email,
  setEmail,
  username,
  setUsername,
  user,
}) {
  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        fetch("http://localhost:9292/users", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            email: email,
          }),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        });
      })
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} className="mt-3">
      <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(event) => setUsername(event.target.value)}
              type="username"
              autoFocus
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              autoComplete="off"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={signUp} type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignupForm;
