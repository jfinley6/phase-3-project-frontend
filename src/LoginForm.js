import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { auth } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginForm({
  show,
  handleClose,
  setEmail,
  setPassword,
  password,
  email,
  user,
}) {
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error.message)
    );
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose} className="mt-3" centered>
      <Modal.Header closeButton>
        <Modal.Title><b>Login</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label><b>Email address</b></Form.Label>
            <Form.Control
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label><b>Password</b></Form.Label>
            <Form.Control
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <b>Close</b>
        </Button>
        <Button variant="primary" onClick={signIn}>
          <b>Login</b>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginForm;
