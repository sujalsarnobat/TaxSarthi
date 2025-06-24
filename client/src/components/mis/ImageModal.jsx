import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ImageModal = ({ show, headerTitle, src, onHide, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {headerTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={src} alt="sample.png" style={{ width: "100%" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
