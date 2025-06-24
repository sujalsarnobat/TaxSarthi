import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Axios from "axios";

function Feedback({ showModal, handleClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [image, setImage] = useState(null);

  const uploadImage = async () => {
    const formData = new FormData();
    let image_url = "";
    formData.append("file", image);
    formData.append("upload_preset", "qcph1lxj");

    await Axios.post(
      "https://api.cloudinary.com/v1_1/dxendxeav/image/upload",
      formData
    ).then((response) => {
      console.log(response.data.secure_url);
      image_url = response.data.secure_url;
    });

    const formDataDiscord = new FormData();
    formDataDiscord.append("name", name);
    formDataDiscord.append("email", email);
    formDataDiscord.append("description", problem);
    formDataDiscord.append("title", title);
    formDataDiscord.append("image", image_url);

    await Axios.post("https://tax-sarthi-bot-api.vercel.app/feedback", {
      name: `${name}`,
      email: `${email}`,
      title: `${title}`,
      description: problem,
      image_url: `${image_url}`,
    }).then((response) => {
      console.log(response);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to server
    uploadImage();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Title: ", title);
    console.log("Problem:", problem);
    console.log("Image:", image);
    // Reset form fields
    setName("");
    setEmail("");
    setTitle("");
    setProblem("");
    setImage(null);
    // Close the modal
    toast.success("Your feedback is shared successfully");
    handleClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Feedback Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formProblem">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe your problem"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Feedback;
