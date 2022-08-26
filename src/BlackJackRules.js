import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BlackJackRules({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} className="mt-3" centered>
      <Modal.Header closeButton>
        <Modal.Title><b>Basic Blackjack Rules</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <strong> Rules: </strong>
          </ListGroup.Item>
          <ListGroup.Item>To increase bet, click on the chips.</ListGroup.Item>
          <ListGroup.Item>
            {" "}
            Hit reset to set the bet ammount to 0.{" "}
          </ListGroup.Item>
          <ListGroup.Item>The Ace is always 11.</ListGroup.Item>
          <ListGroup.Item>
            If you score 21 , BLACKJACK! You win!.
          </ListGroup.Item>
        </ListGroup>
        <ListGroup>
          <ListGroup.Item>
            <strong> Recomendations: </strong>
          </ListGroup.Item>
          <ListGroup.Item>
            Always hit any hand that totals 11 or under.
          </ListGroup.Item>
          <ListGroup.Item>Stand on 17 and over. </ListGroup.Item>
          <ListGroup.Item>
            For cards totaling 12 to 16, whether to hit or stand depends on the
            dealer's face-up cards: Hit if the dealer has a 7 or higher; stand
            if the dealer has 2 or 3 points.
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <b>Close</b>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default BlackJackRules;
