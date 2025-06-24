import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" className="header" expanded={expanded}>
      <div className="container">
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="navbar-brand-text hover:text-white">TaxSarthi</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Taxes   +"
              menuVariant="light"
            >
              <NavDropdown.Item
                onClick={() => {
                  navigate("/taxes/about-taxes");
                }}
              >
                Getting Started with Taxes
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/taxes/types-of-taxes");
                }}
              >
                Types Of Taxes
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/taxes/what-are-taxes");
                }}
              >
                What Of Taxes
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Savings  +"
              menuVariant="light"
            >
              <NavDropdown.Item
                onClick={() => {
                  navigate("/taxes/save-taxes");
                }}
              >
                Smart Savings
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/taxes/tax-planning");
                }}
              >
                Tax Planning
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Filing  +"
              menuVariant="light"
            >
              <NavDropdown.Item
                onClick={() => {
                  navigate("/taxes/itr-filing");
                }}
              >
                Filing Your Taxes
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/taxes/tax-notice");
                }}
              >
                Tax Notice
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="FAQs  +"
              menuVariant="light"
            >
              <NavDropdown.Item
                onClick={() => {
                  navigate("/taxes/faqs");
                }}
              >
                General FAQs
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/taxes/section-139-9");
                }}
              >
                Section-139 (9)
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/taxes/section-142-1");
                }}
              >
                Section-142 (1)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
