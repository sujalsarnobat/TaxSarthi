// DeductionsInfo.js
import React from "react";
import "../Form.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { IoInformationCircleOutline } from "react-icons/io5";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { GrMoney } from "react-icons/gr";
import { FaMoneyBills, FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { NumericFormat } from "react-number-format";


const DeductionsInfo = ({ formData, onChange, handleLimitFunction }) => {
  const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href=" " style={{ color: "black", textDecoration: "none" }}>
        {children}
      </a>
    </OverlayTrigger>
  );

  const {
    Salary,
    //deductions
    section80C,
    section80CCC,
    section80CCD1,
    section80CCD2,
    section80CCD1B,
    section80CCF,
    section80CCG,
    section80D,
    section80DD,
    section80DDB,
    section80E,
    section80EE,
    section80G,
    section80GGA,
    section80GGC,
    section80QQB,
    section80RRB,
    section80TTA,
    section80U,
  } = formData;
  
  return (
    <>
      <h1 className="formTitle">Deductions</h1>
      <hr style={{ marginBottom: 20 }} />

      <Accordion defaultActiveKey="0" flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="iconDiv">
              <FaMoneyBills style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Section 80C - Deductions on Investments
                </h2>
                <p className="accordionSubHeader">Please provide all info</p>
              </div>
            </div>
          </Accordion.Header>

          <AccordionBody>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80C
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Provident Fund, Public Provident Fund, Premium Payments towards Life Insurance, Equity Linked Savings Scheme (ELSS), National Savings Certificate, Sukanya Samriddhi Scheme etc. (Limit - Rs 1,50,000)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  value={section80C}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 150000;
                    onChange({section80C:  handleLimitFunction(inputElement, parseInt(floatValue, 10) || 0, limit)}
                    );
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80CCC
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Amount deposited in LIC or other insurer's annuity plan for a pension (Limit - Rs 1,50,000)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80CCC}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    const limit = 150000;
                    onChange(
                      {section80CCC:  handleLimitFunction(inputElement, parseInt(floatValue, 10) || 0, limit)}
                    );
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80CCD (1)
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Payment made towads Goverment Schemes like APY, NPS etc (Limit - 10% of salary)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80CCD1}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 0.1 * Salary;
                    onChange({
                      section80CCD1: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80CCD (2)
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Employer's contribution to National Pension Scheme account (Limit - 10% of salary)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80CCD2}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 0.1 * Salary;

                    onChange({
                      section80CCD2: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80CCD (1B)
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Additional contribution to National Pension Scheme account (Limit - Rs 50,000)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80CCD1B}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 50000;

                    onChange({
                      section80CCD1B: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80CCF
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Open to both Hindu Undivided Families and Individuals, Section 80CCF contains provisions for tax deductions on subscription of long-term infrastructure bonds which have been notified by the government. (Max Limit - Rs 20,000)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80CCF}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 20000;

                    onChange({
                      section80CCF: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80CCG
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Investments in equity savings schemes notified by the government are permitted for deductions, subject to the limit being 50% of the amount invested.
                           (Limit - Rs 25,000)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80CCG}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 25000;

                    onChange({
                      section80CCG: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>
            </Row>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>

      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="iconDiv">
              <GrMoney style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Section 80D - Deductions on Health Related Investments
                </h2>
                <p className="accordionSubHeader">Please provide all info</p>
              </div>
            </div>
          </Accordion.Header>

          <AccordionBody>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80D
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Deductions on amounts spent by an individual towards the premium of a health insurance policy. This includes payment made on behalf of a spouse, children, parents, or self to a Central Government health plan (Limit - Rs 15,000 (age<60))"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80D}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 15000;

                    onChange({
                      section80D: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80DD
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="On payments made towards the treatment of dependents with disability. Amount paid as premium to purchase or maintain an insurance policy for such dependent (Limit - Rs 75,000 for normal disability(40% - 79%) and Rs 1.25 lakh for severe disablity(80% or above))"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80DD}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 150000;

                    onChange({
                      section80DD: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80DDB
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Section 80DDB can be utilised by HUFs and resident individuals and provides provisions for deductions on the expense incurred by an individual/family towards medical treatment of certain diseases. 
                          (Limit - Rs 40,000, which can be increased to Rs 60,000)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80DDB}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 60000;

                    onChange({
                      section80DDB: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>
            </Row>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>

      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="iconDiv">
              <MdCastForEducation style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Section 80E – Interest on Education Loan
                </h2>
                <p className="accordionSubHeader">Please provide all info</p>
              </div>
            </div>
          </Accordion.Header>

          <AccordionBody>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80E
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="This loan can be availed either by the taxpayer himself/herself or to sponsor the education of his/her ward/child. Only individuals are eligible for this deduction, with loans taken from approved charitable organizations and financial institutions permitted for tax benefits.
                          (Limit - No maximum limit)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80E}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    onChange({
                      section80E: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0
                      ),
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80EE
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Only individual taxpayers are eligible for deductions under Section 80EE, with the interest repayment of a loan taken by them to buy a residential property qualifying for deductions. (Limit - Rs 3 lakhs)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80EE}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 300000;

                    onChange({
                      section80EE: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>
            </Row>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>

      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="iconDiv">
              <GiPayMoney style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Section 80G – Income Tax Benefits Towards Donations for Social
                  Causes
                </h2>
                <p className="accordionSubHeader">Please provide all info</p>
              </div>
            </div>
          </Accordion.Header>

          <AccordionBody>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80G
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="encourages taxpayers to donate to funds and charitable institutions, offering tax benefits on monetary donations. (Limit - Rs 100% deductions without any limit. 50% deduction without qualifying limits.(Qualifing limit depends on the institutions))"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80G}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    onChange({
                      section80G: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0
                      ),
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80GGA
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Tax deductions under this section can be availed by all assessees, subject to them not having any income through profit or gain from a business or profession. Donations by such members to enhance social/scientific/statistical research or towards the National Urban Poverty Eradication Fund are eligible for tax benefits. (Limit -  No maximum limit)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80GGA}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    onChange({
                      section80GGA: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0
                      ),
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80GGC
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Under this section, funds donated/contributed by an assessee to a political party or electoral trust are eligible for deduction. Local authorities and artificial juridical persons are not entitled to the tax deductions available under Section 80GGC.
                          (Limit - No maximum limit)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80GGC}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    onChange({
                      section80GGC: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0
                      ),
                    });
                  }}
                />
              </Form.Group>
            </Row>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>

      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="iconDiv">
              <FaMoneyBillTrendUp style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Other Deductions – Income Tax Benefits for all other reason
                </h2>
                <p className="accordionSubHeader">Please provide all info</p>
              </div>
            </div>
          </Accordion.Header>

          <AccordionBody>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80QQB
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Section 80QQB permits tax deductions on royalty earned from sale of books. Only resident Indian authors are eligible to claim deductions under this section (Limit - Rs 3 lakhs)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  pplaceholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  value={section80QQB}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 300000;

                    onChange({
                      section80QQB: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80RRB
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Patent owners are given tax breaks under Section 80RRB, which also grants tax relief to residents who receive royalties from their patent as income.
                          (Limit - Rs 3 lakhs)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80RRB}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 300000;

                    onChange({
                      section80RRB: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80TTA
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Deductions under Section 80TTA can be claimed by Hindu Undivided Families and Individual taxpayers.
                          (Limit - Rs 10,000)"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80TTA}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 10000;

                    onChange({
                      section80TTA: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Section 80U
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Only resident individual taxpayers with disabilities are eligible to claim tax deductions under Section 80U
                          (Limit - Rs 75,000(at least 40% disabled))"
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  value={section80U}
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element
                    let limit = 75000;

                    onChange({
                      section80U: handleLimitFunction(
                        inputElement,
                        parseInt(floatValue, 10) || 0,
                        limit
                      ),
                    });
                  }}
                />
              </Form.Group>
            </Row>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default DeductionsInfo;
