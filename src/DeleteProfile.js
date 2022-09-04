import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { auth } from "./firebase";

function DeleteProfile({show, handleClose, setGameStarted, playerCards, dealerCards, setDealerCards, setPlayerCards, sinatraUser}) {


    function deleteProfile() {
         fetch(
           `https://salty-mesa-23649.herokuapp.com/users/${sinatraUser.email}`,
           {
             method: "DELETE",
           }
         ).then(() => {
           setPlayerCards([]);
           setDealerCards([]);
           setGameStarted(false);
           auth.signOut();
         });
        setDealerCards([])
        setPlayerCards([])
        setGameStarted(false)
        auth.signOut()
    }

  return (
    <Modal centered show={show} onHide={handleClose} className="mt-3">
      <Modal.Header closeButton>
        <Modal.Title><b>Delete Profile</b></Modal.Title>
      </Modal.Header>
      <Modal.Body><b>Are you sure? Deleting your profile is permanent.</b></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <b>Close</b>
        </Button>
        <Button variant="danger" onClick={() => {
          deleteProfile()
          handleClose()}}>
          <b>Delete</b>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteProfile