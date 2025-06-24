/* eslint-disable react-hooks/exhaustive-deps */
// PersonalInfo.js
import "../Accordion.css";
import React, { useState, useEffect } from "react";
import "../Form.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import CheckBox from "../../../components/mis/CheckBox/CheckBox";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import States from "../../../utils/States.json";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { FaRegCircleUser, FaRegAddressCard } from "react-icons/fa6";
import axios from "axios";

const PersonalInfo = ({ formData, onChange, handleLimitFunction }) => {
  const {
    FirstName,
    MiddleName,
    LastName,
    DateOfBirth,
    FatherName,
    Gender,
    MaritalStatus,
    AadharNo,
    PanCard,
    MobileNo,
    Email,
    Address,
    PermanentAddress,
    City,
    selectedState,
    PinCode,
  } = formData;

  const [sameAsAddress, setSameAsAddress] = useState(true);

  const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href=" " style={{ color: "black", textDecoration: "none" }}>
        {children}
      </a>
    </OverlayTrigger>
  );

  const handleGenderChange = (e) => {
    onChange({ Gender: e.target.value });
  };

  const handleMarriedChange = (e) => {
    onChange({ MaritalStatus: e.target.value });
  };

  useEffect(() => {
    const userDataString = localStorage.getItem("userInfo");
    const userData = JSON.parse(userDataString);
    const Email = userData.email;
    const fetchData = async () => {
      try {
        if (Email) {
          // Make an axios request to your backend endpoint
          const response = await axios.post(
            `https://taxsaarthi.onrender.com/user/personalInfoaccess`,
            { Email }
          );

          // Assuming the backend response contains the personalInfo object
          const personalInfo = response.data;
          console.log(personalInfo);
          onChange({ FirstName: personalInfo.FirstName || "" });
          onChange({ MiddleName: personalInfo.MiddleName || "" });
          onChange({ LastName: personalInfo.LastName || "" });
          onChange({ DateOfBirth: personalInfo.DateOfBirth || "" });
          onChange({ FatherName: personalInfo.FatherName || "" });
          onChange({ Gender: personalInfo.Gender || "" });
          onChange({ MaritalStatus: personalInfo.MaritalStatus || "" });
          onChange({ AadharNo: personalInfo.AadharNo || 0 });
          onChange({ PanCard: personalInfo.PanCard || "" });
          onChange({ MobileNo: personalInfo.MobileNo || "" });
          onChange({ Email: personalInfo.Email || "" });
          onChange({ Address: personalInfo.Address || "" });
          onChange({ PermanentAddress: personalInfo.Address || "" });
          onChange({ City: personalInfo.City || "" });
          onChange({ selectedState: personalInfo.selectedState || "" });
          onChange({ PinCode: personalInfo.PinCode || "" });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="formTitle">Personal Information</h1>
      <hr style={{ marginBottom: 20 }} />
      <Accordion defaultActiveKey="0" flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="iconDiv">
              <FaRegCircleUser style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Permanent Information{" "}
                </h2>
                <p className="accordionSubHeader">
                  Please provide all info as per your government identity
                  documents(PAN, Aadhaar etc.)
                </p>
              </div>
            </div>
          </Accordion.Header>
          <AccordionBody>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="formGridEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="First Name *"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    value={FirstName}
                    placeholder="First Name "
                    onChange={(e) => {
                      onChange({ FirstName: e.target.value });
                    }}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Middle Name *"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    value={MiddleName}
                    placeholder="Middle Name"
                    onChange={(e) => {
                      onChange({ MiddleName: e.target.value });
                    }}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Last Name *"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    value={LastName}
                    placeholder="Last Name"
                    onChange={(e) => {
                      onChange({ LastName: e.target.value });
                    }}
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Form.Group
              as={Col}
              className="mb-3"
              md="6"
              controlId="formGridEmail"
            >
              <Form.Label>Date Of Birth *</Form.Label>
              <Form.Control
                type="text"
                value={DateOfBirth}
                placeholder="DD/MM/YYYY"
                onChange={(e) => {
                  onChange({ DateOfBirth: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              className="mb-3"
              controlId="formGridEmail"
            >
              <Form.Label>Father Name *</Form.Label>
              <Form.Control
                type="text"
                value={FatherName}
                placeholder=""
                onChange={(e) => {
                  onChange({ FatherName: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>Gender *</Form.Label>
              <Form.Check
                style={{ marginLeft: "16px" }}
                inline
                type="radio"
                label="Male"
                value="Male"
                checked={Gender === "Male"}
                onChange={handleGenderChange}
              />
              <Form.Check
                inline
                style={{ marginLeft: "16px" }}
                type="radio"
                label="Female"
                value="Female"
                checked={Gender === "Female"}
                onChange={handleGenderChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>Marital Status *</Form.Label>
              <Form.Check
                style={{ marginLeft: "16px" }}
                inline
                type="radio"
                label="Married"
                value="Married"
                checked={MaritalStatus === "Married"}
                onChange={handleMarriedChange}
              />
              <Form.Check
                inline
                style={{ marginLeft: "16px" }}
                type="radio"
                label="Not Married"
                value="Not Married"
                checked={MaritalStatus === "Not Married"}
                onChange={handleMarriedChange}
              />

              <Form.Check
                inline
                style={{ marginLeft: "16px" }}
                type="radio"
                label="Not share"
                value="Not share"
                checked={MaritalStatus === "Not share"}
                onChange={handleMarriedChange}
              />
            </Form.Group>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey="0" flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="iconDiv">
              <FaRegAddressCard style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Identification & Contact details{" "}
                </h2>
                <p className="accordionSubHeader">
                  Please provide all info as per your government identity
                  documents(PAN, Aadhaar etc.)
                </p>
              </div>
            </div>
          </Accordion.Header>
          <AccordionBody>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formGridEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Aadhar Card Number"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    value={AadharNo}
                    onChange={(e) => {
                      onChange({ AadharNo: e.target.value });
                    }}
                    placeholder="Aadhar Card Number"
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="PanCard Number"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    value={PanCard}
                    onChange={(e) => {
                      onChange({ PanCard: e.target.value });
                    }}
                    placeholder="PanCard Number"
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                md="6"
                controlId="formGridEmail"
              >
                <Form.Label>Mobile Number *</Form.Label>
                <Form.Control
                  type="text"
                  value={MobileNo}
                  placeholder="+91....."
                  onChange={(e) => {
                    onChange({ MobileNo: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                md="6"
                controlId="formGridEmail"
              >
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  value={Email}
                  placeholder="xyz@mail.com"
                  onChange={(e) => {
                    onChange({ Email: e.target.value });
                  }}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="Flat No, Building Name"
                type="text"
                value={Address}
                onChange={(e) => {
                  onChange({ Address: e.target.value });
                  if (sameAsAddress) {
                    onChange({ PermanentAddress: e.target.value });
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label style={{ display: "flex", alignItems: "center" }}>
                Permanant Address{" "}
                <span style={{ marginLeft: "10px" }}>
                  <Link id="t-2" title="DeSelect if the address is different">
                    <CheckBox
                      onChange={(e) => {
                        setSameAsAddress(e.target.checked);
                        if (e.target.checked) {
                          // Set PermanentAddress to be the same as Address
                          onChange({ PermanentAddress: Address });
                        } else {
                          // Reset PermanentAddress if the checkbox is unchecked
                          onChange({ PermanentAddress: "" });
                        }
                      }}
                      checked={sameAsAddress}
                    />
                  </Link>
                </span>
              </Form.Label>
              <Form.Control
                placeholder="locality, city"
                type="text"
                value={sameAsAddress ? Address : PermanentAddress}
                onChange={(e) => {
                  onChange({ PermanentAddress: e.target.value });
                }}
                disabled={sameAsAddress}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={City}
                  onChange={(e) => {
                    onChange({ City: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State/UT</Form.Label>
                <Form.Select
                  value={selectedState}
                  onChange={(e) => {
                    onChange({ selectedState: e.target.value });
                  }}
                >
                  {States.map(
                    (
                      state // Added parentheses and return statement
                    ) => (
                      <option key={state.id} value={state.name}>
                        {state.name}
                      </option>
                    )
                  )}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  value={PinCode}
                  onChange={(e) => {
                    onChange({ PinCode: e.target.value });
                  }}
                />
              </Form.Group>
            </Row>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PersonalInfo;
