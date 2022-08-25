import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Leaderboard({ show, handleClose, leaders }) {
  let leaderList = leaders.map((leader) => {
    return (
      <ListGroup.Item
        key={leader.id + leader.username}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <b>
              {leader.username} <i className={leader.icons[0].image_url}></i>
            </b>
          </div>
          {leader.tokens} tokens
        </div>
      </ListGroup.Item>
    );
  });

  return (
    <Modal show={show} onHide={handleClose} className="mt-3" centered>
      <Modal.Header closeButton>
        <Modal.Title>Token Leaderboard</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as="ol" numbered>
          {leaderList}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Leaderboard;
