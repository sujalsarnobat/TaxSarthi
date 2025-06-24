// EmployerInfo.js
import React, { useState } from "react";
import "../Form.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { IoInformationCircleOutline } from "react-icons/io5";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { FaLaptopCode } from "react-icons/fa6";
import "../Accordion.css";
import ImageModal from "../../../components/mis/ImageModal";

const EmployerInfo = ({ formData, onChange, handleLimitFunction }) => {
  const {
    employerName,
    employerAddress,
    employerPanNumber,
    tanNumber,
    employeeReferenceNo,
  } = formData;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href=" " style={{ color: "black", textDecoration: "none" }}>
        {children}
      </a>
    </OverlayTrigger>
  );

  return (
    <>
      <h1 className="formTitle">Employeers Information</h1>
      <hr style={{ marginBottom: 20 }} />
      <Accordion defaultActiveKey="0" flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="iconDiv">
              <FaLaptopCode style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Employer & TDS Details{" "}
                </h2>
                <p className="accordionSubHeader">
                  Please provide all info as per your government documents
                </p>
              </div>
            </div>
          </Accordion.Header>

          <AccordionBody>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Name of Employer</Form.Label>
              <Form.Control
                placeholder="Name"
                value={employerName}
                onChange={(e) => onChange({ employerName: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address of the Employer</Form.Label>
              <Form.Control
                placeholder="Flat No, Building Name"
                type="text"
                value={employerAddress}
                onChange={(e) => onChange({ employerAddress: e.target.value })}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>PAN Of the Deductor</Form.Label>
                <Form.Control
                  value={employerPanNumber}
                  onChange={(e) => {
                    onChange({ employerPanNumber: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  TAN Of the Deductor
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link id="t-2" title="Click To view a sample">
                      <IoInformationCircleOutline onClick={handleShow} />
                    </Link>
                    <ImageModal
                      src="https://assets1.cleartax-cdn.com/cleartax/images/1629801946_employerdetails.png"
                      headerTitle="Ensure that you add the Employer Name and Employer TAN from your form 16"
                      show={show}
                      handleClose={handleClose}
                    />
                  </span>
                </Form.Label>
                <Form.Control
                  value={tanNumber}
                  onChange={(e) => onChange({ tanNumber: e.target.value })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Employee Reference No
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="provided by the Employer
(If available)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>

                <Form.Control
                  value={employeeReferenceNo}
                  onChange={(e) =>
                    onChange({ employeeReferenceNo: e.target.value })
                  }
                />
              </Form.Group>
            </Row>
            {/* <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Period With Employer (yyyy).</Form.Label>
                <FloatingLabel
                  controlId="floatingInput"
                  label="From"
                  className="mb-3"
                >
                  <Form.Control placeholder="From" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="To"
                  className="mb-3"
                >
                  <Form.Control placeholder="To (yyyy)" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Assessment Year</Form.Label>
                <Form.Control
                  placeholder="2022-2023"
                  value={Year}
                  onChange={(e) => {
                    onChange({ Year: e.target.value });
                  }}
                />
                <Form.Label style={{ marginTop: "20px" }}>
                  Total tax deducted BY Employer *
                </Form.Label>
                <Form.Control
                  placeholder=""
                  value={TaxDeducted}
                  onChange={(e) => {
                    onChange({
                      TaxDeducted: parseInt(e.target.value, 10) || 0,
                    });
                  }}
                />
              </Form.Group>
            </Row> */}
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default EmployerInfo;
