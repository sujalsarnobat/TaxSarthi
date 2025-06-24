/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/mis/Carousel/Carousel";
import Marquee from "react-fast-marquee";
import FaqSec from "../../components/mis/FaqSec";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "../../components/mis/Card/Card";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section id="home" style={{ margin: "0" }}>
        <div className="welcome-content">
          <div className="welcome-heading">Welcome to TaxSarthi!</div>
          <div className="welcome-description">
            India's first ever auto-filing tax platform
          </div>
          <div className="steps">
            <div className="vr"></div>
            <div className="step step1">
              <div className="step-count">1</div>
              <div className="step-content">
                <div className="step-title">Login to your account</div>
                <div className="step-description">
                  Make an account on our website.
                </div>
              </div>
            </div>
            <div className="step step1">
              <div className="step-count">2</div>
              <div className="step-content">
                <div className="step-title">Click on available options</div>
                <div className="step-description">
                  Check if you are ready to file your taxes online.
                </div>
              </div>
            </div>
            <div className="step step1">
              <div className="step-count">3</div>
              <div className="step-content">
                <div className="step-title">File your taxes efforlessly</div>
                <div className="step-description">
                  Get started with filing your tax returns with one click.
                </div>
              </div>
            </div>
          </div>
          <button
            className="get-started"
            onClick={() => {
              navigate("/login");
            }}
          >
            Get Started
          </button>
        </div>
        <div className="welcome-image">
          <img
            src="https://images.unsplash.com/photo-1605170439002-90845e8c0137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
            alt="image.png"
          />
        </div>
      </section>
      <div className="home-div">
        <section id="home-tutorial">
          <p className="home-tutorial-text">
            Watch this short tutorial to learn how to use TaxSarthi
          </p>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IbWWq12yyjs?si=Aa8cUj8h-Oy16SsA"
              title="TaxSarthiTutorial"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        <section id="blog-suggestions">
          <div className="blog-suggestions-title">Our Blogs</div>
          <div className="cards-container">
            <Card
              title="Types Of Taxes"
              body="Getting started with Taxes"
              useNavigateTo="/taxes/types-of-taxes"
            />
            <Card
              title="Smart Savings"
              body="Start saving on Taxes"
              useNavigateTo="/taxes/save-taxes"
            />
            <Card
              title="FAQs"
              body="Frequently Asked Questions"
              useNavigateTo="/taxes/FAQs"
            />
          </div>
        </section>
        <section id="home-stats">
          <div className="stats-title">Loved by over 1 million tax payers</div>
          <div className="main-stats">
            <div className="stats-group">
              <div className="stats-amount">₹20 Cr+</div>
              <div className="stats-heading">assets managed</div>
            </div>
            <div className="stats-group">
              <div className="stats-amount">₹50 Cr+</div>
              <div className="stats-heading">worth taxes filed</div>
            </div>
            <div className="stats-group">
              <div className="stats-amount">₹30 Cr+</div>
              <div className="stats-heading">worth taxes saved</div>
            </div>
          </div>
        </section>
        <section id="carousel">
          <Marquee speed={25} pauseOnHover={true} gradient gradientWidth={50}>
            <Carousel />
          </Marquee>
        </section>
        <section className="faq">
          <FaqSec />
        </section>
        <section id="queries">
          <div className="query-title">
            Got any queries? Feel free to reach out!
          </div>
          <div className="query-box">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="form-field-title">
                  Email address *
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-4" controlId="querySubject">
                <Form.Label className="form-field-title">Subject *</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="queryDescription">
                <Form.Label className="form-field-title">
                  Description *
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                />
              </Form.Group>
              <Button
                style={{ backgroundColor: "var(--primary)" }}
                variant="primary"
                type="submit"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
