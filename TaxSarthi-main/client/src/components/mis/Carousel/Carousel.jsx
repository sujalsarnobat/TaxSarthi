import React from "react";
import { ReactComponent as LeftQuote } from "../../../assets/left-quote.svg";
import "./Carousel.css";
import Testimonials from "../../../utils/Testimonials.json";

function Carousel() {
  return (
    <div className="carouselContainer">
      {Testimonials.map((Testimonial) => (
        <div className="testimonialContainer" key={Testimonial.id}>
          <div className="testimonialHeader">
            <div className="nameContainer">
              <h4>{Testimonial.Name}</h4>
              <p>{Testimonial.Post}</p>
            </div>
            <div className="iconContainer">
              <LeftQuote style={{ fill: "grey" }} className="icon" />
            </div>
          </div>
          <div className="testimonialBody">
            <p className="testimonialBodyText">
              "{Testimonial["Comment on us"]}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
