import React, { useState, useEffect } from "react";
import "../Form.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { IoInformationCircleOutline } from "react-icons/io5";
import "../Accordion.css";
import { FaMoneyBills } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { BsFillHouseAddFill } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import ImageModal from "../../../components/mis/ImageModal";
import { NumericFormat } from "react-number-format";

const IncomeInfo = ({ formData, onChange, handleLimitFunction }) => {
  const {
    Salary,
    PrerequisiteIncome,
    ProfitIncome,
    OtherIncome,
    HRA,
    LTA,
    OtherExemptedAllowances,
    ProfessionalTax,
    OwnHouseIncome,
    RentedHouseIncome,
    DeemdedHouseIncome,
  } = formData;

  const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href=" " style={{ color: "black", textDecoration: "none" }}>
        {children}
      </a>
    </OverlayTrigger>
  );

  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showProfitsModal, setShowProfitsModal] = useState(false);
  const [HeadIncome, setHeadIncome] = useState(0);

  const [RentedhomeInterestPaid, setRentedHomeInterestPaid] = useState(0);
  const [RentedrentReceived, setRentedRentReceived] = useState(0);
  const [RentedmunicipalTax1, setRentedMunicipalTax1] = useState(0);

  const [DeemedhomeInterestPaid, setDeemedHomeInterestPaid] = useState(0);
  const [DeemedrentReceived, setDeemedRentReceived] = useState(0);
  const [DeemedmunicipalTax1, setDeemedMunicipalTax1] = useState(0);

  useEffect(() => {
    const numericSalary = parseFloat(Salary) || 0;
    const numericPrerequisiteIncome = parseFloat(PrerequisiteIncome) || 0;
    const numericProfitIncome = parseFloat(ProfitIncome) || 0;
    const numericHRA = parseFloat(HRA) || 0;
    const numericLTA = parseFloat(LTA) || 0;
    const numericOtherExemptedAllowances =
      parseFloat(OtherExemptedAllowances) || 0;
    const numericProfessionalTax = parseFloat(ProfessionalTax) || 0;

    const totalIncome =
      numericSalary +
      numericPrerequisiteIncome +
      numericProfitIncome -
      numericHRA -
      numericLTA -
      numericOtherExemptedAllowances -
      numericProfessionalTax;

    const updatedTotalIncome = isNaN(totalIncome) ? 0 : totalIncome;

    setHeadIncome(updatedTotalIncome);
  }, [
    Salary,
    PrerequisiteIncome,
    ProfitIncome,
    OtherIncome,
    HRA,
    LTA,
    OtherExemptedAllowances,
    ProfessionalTax,
    RentedhomeInterestPaid,
    RentedrentReceived,
    RentedmunicipalTax1,
    DeemedhomeInterestPaid,
    DeemedrentReceived,
    DeemedmunicipalTax1,
    onChange,
    formData,
  ]);

  useEffect(() => {
    //house incomes
    const numericRentedhomeInterest = parseFloat(RentedhomeInterestPaid) || 0;
    const numericRentedrentReceived = parseFloat(RentedrentReceived) || 0;
    const numericRentedmunicipalTax1 = parseFloat(RentedmunicipalTax1) || 0;

    const numericDeemedhomeInterestPaid =
      parseFloat(DeemedhomeInterestPaid) || 0;
    const numericDeemedrentReceived = parseFloat(DeemedrentReceived) || 0;
    const numericDeemedmunicipalTax1 = parseFloat(DeemedmunicipalTax1) || 0;

    const calculateSlabTax = (income, rate) => {
      return income * rate;
    };

    const finalRentedIncome = calculateSlabTax(
      numericRentedrentReceived - numericRentedmunicipalTax1,
      0.3
    );

    const ReIncome =
      numericRentedrentReceived -
      numericRentedmunicipalTax1 -
      finalRentedIncome;

    const Rented = Math.min(ReIncome - numericRentedhomeInterest, 200000);

    const finalDeemedIncome = calculateSlabTax(
      numericDeemedrentReceived - numericDeemedmunicipalTax1,
      0.3
    );

    const DeIncome =
      numericDeemedrentReceived -
      numericDeemedmunicipalTax1 -
      finalDeemedIncome;

    const Deemded = Math.min(DeIncome - numericDeemedhomeInterestPaid, 200000);

    onChange({
      RentedHouseIncome: Rented,
      DeemdedHouseIncome: Deemded,
    });
  }, [
    onChange,
    RentedhomeInterestPaid,
    RentedrentReceived,
    RentedmunicipalTax1,
    DeemedhomeInterestPaid,
    DeemedrentReceived,
    DeemedmunicipalTax1,
    RentedHouseIncome,
    DeemdedHouseIncome,
  ]);

  return (
    <>
      <h1 className="formTitle">Income Information</h1>
      <hr style={{ marginBottom: 20 }} />
      <Accordion defaultActiveKey="0" flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="iconDiv">
              <TbPigMoney style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading"> Salary BreakUp </h2>
                <p className="accordionSubHeader">
                  Please provide all info as per your Salary Slip
                </p>
              </div>
            </div>
          </Accordion.Header>

          <AccordionBody>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Income From Salary
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Salary before reducing HRA, LTA, standard deductions & professional tax. 
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={Salary}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    onChange({
                      Salary: parseInt(floatValue, 10) || 0,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Perquisites under section 17(2)*
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link id="t-2" title="Click To view sample ">
                      <IoInformationCircleOutline
                        onClick={(e) => {
                          e.preventDefault();
                          setShowIncomeModal(!showIncomeModal);
                        }}
                      />
                    </Link>
                    <ImageModal
                      src="https://assets1.cleartax-cdn.com/cleartax/images/1629905376_172form12ba.png"
                      headerTitle="These are the benefits given to you by your employer, in addition to wages or salary. These typically include the following:"
                      show={showIncomeModal}
                      handleClose={() => setShowIncomeModal(false)}
                    />
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={PrerequisiteIncome}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    onChange({
                      PrerequisiteIncome: parseInt(floatValue, 10) || 0,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Profits in lieu of salary under section 17(3)
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link id="t-2" title="Click To view sample ">
                      <IoInformationCircleOutline
                        onClick={(e) => {
                          e.preventDefault();
                          setShowProfitsModal(!showProfitsModal);
                        }}
                      />
                    </Link>
                    <ImageModal
                      src="https://assets1.cleartax-cdn.com/cleartax/images/1629905424_173form12ba.png"
                      headerTitle="These are the benefits given to you by your employer, in addition to wages or salary. These typically include the following:"
                      show={showProfitsModal}
                      handleClose={() => setShowProfitsModal(false)}
                    />
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={ProfitIncome}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    onChange({
                      ProfitIncome: parseInt(floatValue, 10) || 0,
                    });
                  }}
                />
              </Form.Group>
            </Row>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0" flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="iconDiv">
              <GiReceiveMoney style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Exempt allowances under section 10*{" "}
                </h2>
                <p className="accordionSubHeader">
                  Please provide all info as per your Salary Slip
                </p>
              </div>
            </div>
          </Accordion.Header>

          <AccordionBody>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  House Rent Exemption
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Salaried individuals living in rented houses (paying rent) can claim the House Rent Allowance (HRA).
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={HRA}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    onChange({
                      HRA: parseInt(floatValue, 10) || 0,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Leave Travel Allowance (LTA) Exemption
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="allowance which is paid to the employee by the employer when the former is traveling with their family or alone
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={LTA}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    onChange({
                      LTA: parseInt(floatValue, 10) || 0,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Other Exempt allowances
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="All types of Exemption given by the Employer
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={OtherExemptedAllowances}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    onChange({
                      OtherExemptedAllowances: parseInt(floatValue, 10) || 0,
                    });
                  }}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Professional tax under section 16(iii)
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="individuals employed in various professions, trades, and employments, typically to fund local government activities.
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={ProfessionalTax}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    onChange({
                      ProfessionalTax: parseInt(floatValue, 10) || 0,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Income Chargeble on head Salary
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="individuals employed in various professions, trades, and employments, typically to fund local government activities.
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  disabled
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={HeadIncome}
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
              <BsFillHouseAddFill style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Rental Income or House Property
                </h2>
                <p className="accordionSubHeader">
                  lease add the details if you earned rent from your house
                  property or paid interest on housing loan
                </p>
              </div>
            </div>
          </Accordion.Header>

          <AccordionBody>
            <h5>Self-occupied House Property</h5>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Interest paid on loan for this house property
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="If you have a housing loan against a house you live in then you can claim a tax deduction of upto Rs. 2,00,000.
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={OwnHouseIncome}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element

                    onChange({
                      OwnHouseIncome: handleLimitFunction(
                        inputElement,
                        parseInt(parseInt(floatValue, 10) || 0, 10) || 0,
                        200000
                      ),
                    });
                  }}
                />
              </Form.Group>
            </Row>
            <div
              style={{
                Display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
                marginTop: "1rem",
              }}
            >
              <h5>Rental Property</h5>
              <p>
                30% Deduction under section 24 is automatically provided for by
                our software in Tax Calculation.
              </p>
            </div>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Annual Rent Received by you
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Please specify the portion of the rent received by you if the property is co-owned.
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={RentedrentReceived}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    setRentedRentReceived(parseInt(floatValue, 10) || 0);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Municipal Tax
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Specifying House tax you paid reduces your tax liability
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={RentedmunicipalTax1}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    setRentedMunicipalTax1(parseInt(floatValue, 10) || 0);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Interest paid on loan for this house property
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="If you have a housing loan against a house you live in then you can claim a tax deduction of upto Rs. 2,00,000.
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={RentedhomeInterestPaid}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element

                    setRentedHomeInterestPaid(
                      handleLimitFunction(
                        inputElement,
                        parseInt(parseInt(floatValue, 10) || 0, 10) || 0,
                        200000
                      )
                    );
                  }}
                />
              </Form.Group>
            </Row>
            <div
              style={{
                Display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
                marginTop: "1rem",
              }}
            >
              <h5>Deemed Let Out Property</h5>
              <p>
                30% Deduction under section 24 is automatically provided for by
                our software in Tax Calculation.
              </p>
            </div>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Estimated Annual Rent Receivable
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Please specify the portion of the rent received by you if the property is co-owned.
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={DeemedrentReceived}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    setDeemedRentReceived(parseInt(floatValue, 10) || 0);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Municipal Tax
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="Specifying House tax you paid reduces your tax liability
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={DeemedmunicipalTax1}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    setDeemedMunicipalTax1(parseInt(floatValue, 10) || 0);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ display: "flex", alignItems: "center" }}>
                  Interest paid on loan for this house property
                  <span style={{ marginLeft: "10px", alignContent: "center" }}>
                    <Link
                      id="t-2"
                      title="If you have a housing loan against a house you live in then you can claim a tax deduction of upto Rs. 2,00,000.
                    "
                    >
                      <IoInformationCircleOutline />
                    </Link>
                  </span>
                </Form.Label>
                <NumericFormat
                  placeholder="₹ 0"
                  thousandSeparator={true}
                  prefix={"₹"}
                  customInput={FormControl}
                  value={DeemedhomeInterestPaid}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    const inputElement = document.activeElement; // Get the currently focused input element

                    setDeemedHomeInterestPaid(
                      handleLimitFunction(
                        inputElement,
                        parseInt(parseInt(floatValue, 10) || 0, 10) || 0,
                        200000
                      )
                    );
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
              <FaMoneyBills style={{ height: "2em", width: "2em" }} />
              <div className="HeaderMainDiv">
                <h2 className="AccordionMainHeading">
                  {" "}
                  Other Sources of Income{" "}
                </h2>
                <p className="accordionSubHeader">Please provide all info</p>
              </div>
            </div>
          </Accordion.Header>

          <AccordionBody>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label style={{ display: "flex", alignItems: "center" }}>
                Other Income
                <span style={{ marginLeft: "10px", alignContent: "center" }}>
                  <Link
                    id="t-2"
                    title="Includes taxable freelancing income or any other taxable income
                    "
                  >
                    <IoInformationCircleOutline />
                  </Link>
                </span>
              </Form.Label>
              <NumericFormat
                placeholder="₹ 0"
                thousandSeparator={true}
                prefix={"₹"}
                customInput={FormControl}
                value={OtherIncome}
                onValueChange={(values) => {
                  const { floatValue } = values;
                  onChange({
                    OtherIncome: parseInt(floatValue, 10) || 0,
                  });
                }}
              />
            </Form.Group>
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default IncomeInfo;
