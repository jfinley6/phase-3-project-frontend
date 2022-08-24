import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { auth } from "./firebase";

function DeleteProfile({show, handleClose, setGameStarted, playerCards, dealerCards, setDealerCards, setPlayerCards}) {

    function deleteProfile() {
        //  fetch(`http://localhost:9292/users/${sinatraUser.id}`, {
        //    method: "DELETE",
        //  }).then(() => auth.signOut());
        setDealerCards([])
        setPlayerCards([])
        setGameStarted(false)
        auth.signOut()
    }

  return (
    <Modal show={show} onHide={handleClose} className="mt-3">
      <Modal.Header closeButton>
        <Modal.Title>Delete Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure? Deleting your profile is permanent.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={() => {
          deleteProfile()
          handleClose()}}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteProfile