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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={signIn}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginForm;
