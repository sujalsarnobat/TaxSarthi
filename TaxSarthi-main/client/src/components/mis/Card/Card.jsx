import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
}

function BlogCard(props) {
  const { title, body, useNavigateTo } = props;
  const navigate = useNavigate();
  const truncatedBody = truncateText(body, 100);

  const handleButtonClick = () => {
    if (useNavigateTo) {
      navigate(useNavigateTo);
    } else {
      // Handle button click logic without navigation
      console.log("Button clicked without navigation");
    }
  };

  return (
    <Card
      // style={{
      //   width: "18rem",
      //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      //   borderRadius: "20px",
      //   height: "100%",
      //   border: "2px solid #b3d89c",
      // }}
      className="card"
    >
      <Card.Body>
        <Card.Title style={{ fontSize: "2rem" }}>{title}</Card.Title>
        <Card.Text style={{ color: "var(--blue-dark)", fontSize: "1.12rem" }}>
          {truncatedBody}
        </Card.Text>
        <button
          onClick={handleButtonClick}
          // style={{
          //   padding: "0 30px",
          //   width: "auto",
          //   height: "50px",
          //   borderRadius: "30px",
          //   fontWeight: "600",
          //   fontSize: "1.15rem",
          //   backgroundColor: "#b3d89c",
          //   color: "black",
          //   transition: "background-color 0.2s ease-in-out",
          // }}
          className="card-button"
        >
          Read More
        </button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
