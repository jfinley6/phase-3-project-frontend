import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Profile({show, handleClose, sinatraUser}) {

  return (
    <Modal show={show} onHide={handleClose} className="mt-3">
      <Modal.Header closeButton>
        <Modal.Title>Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Username: <b>{sinatraUser ? sinatraUser.username : null}</b>
      </Modal.Body>
      <Modal.Body>
        Email: <b>{sinatraUser ? sinatraUser.email : null}</b>
      </Modal.Body>
      <Modal.Body>
        Tokens: <b>{sinatraUser ? sinatraUser.tokens : null}</b>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={(event) => handleClose(event)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Profile