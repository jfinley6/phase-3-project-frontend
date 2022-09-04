import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

function IconStore({ show, handleClose, sinatraUser, setSinatraUser }) {
  const [icons, setIcons] = useState([]);

  useState(() => {
    fetch("https://salty-mesa-23649.herokuapp.com/store_icons")
      .then((res) => res.json())
      .then((data) => setIcons(data));
  }, []);

  let storeIcons = icons.map((icon, id) => {
    return (
      <Col
        key={icon.id}
        xs={6}
        md={4}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <i
          onClick={() => changeIcon(icon.image_url, icon.name)}
          className={icon.image_url + " fa-3x"}
        ></i>
        <div style={{ marginBottom: "5px" }}>
          <b>{icon.name}</b>
        </div>
      </Col>
    );
  });

  function changeIcon(image, name) {
    fetch(
      `https://salty-mesa-23649.herokuapp.com/icon/${sinatraUser.email}/${name}/${image}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSinatraUser(null);
        setSinatraUser(data);
      });
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>Customize User Icon</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>{storeIcons}</Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}><b>Close</b></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IconStore;
