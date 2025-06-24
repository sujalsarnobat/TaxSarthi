// FormFilling.js
import React, { useState, useEffect, useCallback } from "react";
import PersonalInfo from "./PersonalInfo";
import EmployerInfo from "./EmployerInfo";
import IncomeInfo from "./IncomeInfo";
import DeductionsInfo from "./DeductionsInfo";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import axios from "axios";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import { FaMoneyBills } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { Steps } from "antd";
import "../Accordion.css";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Feedback from "../../../components/mis/Feedback";

function OldMulti() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isLimitCrossed, setIsLimitCrossed] = useState(false);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedbackModal, setshowFeedbackModal] = useState(false);

  const toggleFeedbackModal = () => {
    setshowFeedbackModal(!showFeedbackModal);
  };

  const [formData, setFormData] = useState({
    AadharNo: 0,
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Name: "",
    DateOfBirth: "",
    FatherName: "",
    Gender: "",
    MaritalStatus: "",
    PanCard: "",
    MobileNo: "",
    Email: "",
    Address: "",
    PermanentAddress: "",
    City: "",
    selectedState: "",
    PinCode: "",
    employerName: "",
    employerAddress: "",
    employerPanNumber: "",
    tanNumber: "",
    employeeReferenceNo: "",
    Year: "",
    TaxDeducted: "",
    Salary: 0,
    PrerequisiteIncome: 0,
    ProfitIncome: 0,
    OtherIncome: 0,
    HRA: 0,
    LTA: 0,
    OtherExemptedAllowances: 0,
    ProfessionalTax: 0,
    OwnHouseIncome: 0,
    //deductions
    section80C: 0,
    section80CCC: 0,
    section80CCD1: 0,
    section80CCD2: 0,
    section80CCD1B: 0,
    section80CCF: 0,
    section80CCG: 0,
    section80D: 0,
    section80DD: 0,
    section80DDB: 0,
    section80E: 0,
    section80EE: 0,
    section80G: 0,
    section80GGA: 0,
    section80GGC: 0,
    section80QQB: 0,
    section80RRB: 0,
    section80TTA: 0,
    section80U: 0,

    RentedHouseIncome: 0,
    DeemdedHouseIncome: 0,
    OldFinalTax: 0,
    OldFinalCess: 0,
    NewFinalTax: 0,
    NewFinalCess: 0,
    PreferredSystem: "NewRegime",
  });

  const Token = localStorage.getItem("token");

  const handleFormDataChange = useCallback((newData) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...newData }));
  }, []);

  const handleLimitFunction = (element, value, limit) => {
    const inputValue = parseInt(value, 10) || 0;

    if (element) {
      if (inputValue > limit) {
        // Perform some operation when value exceeds the limit

        // Set border color to red
        toast.error(`Max Limit is Rs ${limit}`);
        element.style.borderColor = "red";
        setIsLimitCrossed(true);
        return inputValue; // You can set it to the limit or perform a different operation here
      }

      // If value is within the limit, return the original value
      element.style.borderColor = ""; // Reset border color
    }
    setIsLimitCrossed(false);
    return inputValue;
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const {
    AadharNo,
    FirstName,
    MiddleName,
    LastName,
    Name,
    DateOfBirth,
    FatherName,
    Gender,
    MaritalStatus,
    PanCard,
    MobileNo,
    Email,
    Address,
    PermanentAddress,
    City,
    selectedState,
    PinCode,
    employerName,
    employerAddress,
    employerPanNumber,
    tanNumber,
    employeeReferenceNo,
    Year,
    TaxDeducted,
    Salary,
    PrerequisiteIncome,
    ProfitIncome,
    OtherIncome,
    HRA,
    LTA,
    OtherExemptedAllowances,
    ProfessionalTax,
    OwnHouseIncome,
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
    RentedHouseIncome,
    DeemdedHouseIncome,
    OldFinalTax,
    OldFinalCess,
    NewFinalTax,
    NewFinalCess,
    PreferredSystem,
  } = formData;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (
      !AadharNo &&
      !FirstName &&
      !MiddleName &&
      !LastName &&
      !Name &&
      !DateOfBirth &&
      !FatherName &&
      !Gender &&
      !MaritalStatus &&
      !PanCard &&
      !MobileNo &&
      !Email &&
      !Address &&
      !PermanentAddress &&
      !City &&
      !selectedState &&
      !PinCode &&
      !employerName &&
      !employerAddress &&
      !employerPanNumber &&
      !tanNumber &&
      !employeeReferenceNo &&
      !Year &&
      !TaxDeducted &&
      !Salary
    ) {
      setIsLimitCrossed(true);
      toast.error("The required fields are not added");
      e.preventDefault();
      setIsLimitCrossed(false);
      return;
    }

    setIsLoading(true);
    e.preventDefault();
    if (isCheckboxChecked) {
      try {
        const response = await axios.post(
          "https://taxsaarthi.onrender.com/api/v1/tax/calculations",
          {
            Token,
            AadharNo,
            FirstName,
            MiddleName,
            LastName,
            Name,
            DateOfBirth,
            FatherName,
            Gender,
            MaritalStatus,
            PanCard,
            MobileNo,
            Email,
            Address,
            PermanentAddress,
            City,
            selectedState,
            PinCode,
            employerName,
            employerAddress,
            employerPanNumber,
            tanNumber,
            employeeReferenceNo,
            Year,
            TaxDeducted,
            Salary,
            PrerequisiteIncome,
            ProfitIncome,
            OtherIncome,
            HRA,
            LTA,
            OtherExemptedAllowances,
            ProfessionalTax,
            OwnHouseIncome,
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
            RentedHouseIncome,
            DeemdedHouseIncome,
            OldFinalTax,
            OldFinalCess,
            NewFinalTax,
            NewFinalCess,
            PreferredSystem,
          } // Send the formData directly in the request body
        );

        // Handle success, if needed
        console.log(response.data); // Log the response data
        toast.success("Data is saved. You will be redirected in a few seconds");
        navigate("/doc");
      } catch (err) {
        toast.error("Try again after some time");
        console.error(err);
      } finally {
        // Reset isLoading to false when the submission is complete (success or failure)
        setIsLoading(false);
      }
    } else {
      toast.warning("Please verify the information before submitting.");
    }
  };

  const steps = [
    <PersonalInfo
      formData={formData}
      onChange={handleFormDataChange}
      handleLimitFunction={handleLimitFunction}
    />,
    <EmployerInfo
      formData={formData}
      onChange={handleFormDataChange}
      handleLimitFunction={handleLimitFunction}
    />,
    <IncomeInfo
      formData={formData}
      onChange={handleFormDataChange}
      handleLimitFunction={handleLimitFunction}
    />,
    <DeductionsInfo
      formData={formData}
      onChange={handleFormDataChange}
      handleLimitFunction={handleLimitFunction}
    />,
  ];

  const antdSteps = [
    {
      title: "Personal Info",
      status: step > 1 ? "finish" : "process",
      icon: <UserOutlined style={{ color: "var(--primary)" }} />,
    },
    {
      title: "Employer Info",
      status: step > 2 ? "finish" : "wait",
      icon: <LaptopOutlined style={{ color: "var(--primary)" }} />,
    },
    {
      title: "Income Sources",
      status: step > 3 ? "process" : "wait",
      icon: <FaMoneyBills style={{ color: "var(--primary)" }} />,
    },
    {
      title: "Deductions",
      status: step === steps.length ? "finish" : "wait",
      icon: <TbPigMoney style={{ color: "var(--primary)" }} />,
    },
  ];

  useEffect(() => {
    const StandardDeductions = 50000;

    const totalIncome =
      Salary +
      PrerequisiteIncome +
      ProfitIncome +
      OtherIncome -
      HRA -
      LTA -
      OtherExemptedAllowances -
      ProfessionalTax -
      OwnHouseIncome +
      RentedHouseIncome +
      DeemdedHouseIncome;
    const totalDeductions =
      section80C +
      section80CCC +
      section80CCD1 +
      section80CCD2 +
      section80CCD1B +
      section80CCF +
      section80CCG +
      section80D +
      section80DD +
      section80DDB +
      section80E +
      section80EE +
      section80G +
      section80GGA +
      section80GGC +
      section80QQB +
      section80RRB +
      section80TTA +
      section80U;

    const taxableIncome = totalIncome - StandardDeductions - totalDeductions;

    // Function to calculate old regime tax
    const calculateOldRegimeTax = (income) => {
      const TAX_REBATE = {
        old: 500000,
      };

      const calculateSlabTax = (income, rate) => {
        return income * rate;
      };

      const OldtaxDetails = {};

      if (income >= TAX_REBATE.old) {
        OldtaxDetails.slab1 = calculateSlabTax(Math.min(income, 250000), 0);
        OldtaxDetails.slab2 = calculateSlabTax(
          Math.min(Math.max(income - 250000, 0), 500000 - 250000),
          0.05
        );

        OldtaxDetails.slab3 = calculateSlabTax(
          Math.min(Math.max(income - 500000, 0), 1000000 - 500000),
          0.2
        );
        OldtaxDetails.slab4 = calculateSlabTax(
          Math.max(income - 1000000, 0),
          0.3
        );
      }

      // Store OldtaxDetails in localStorage
      localStorage.setItem("OldtaxDetails", JSON.stringify(OldtaxDetails));
    };

    const calculateNewRegimeTax = (income) => {
      const TAX_REBATE_NEW = {
        new: 700000,
      };

      const calculateSlabTax = (income, rate) => income * rate;

      const NewtaxDetails = {};

      if (income >= TAX_REBATE_NEW.new) {
        NewtaxDetails.slab1 = calculateSlabTax(Math.min(income, 250000), 0);
        NewtaxDetails.slab2 = calculateSlabTax(
          Math.min(Math.max(income - 250000, 0), 500000 - 250000),
          0.05
        );

        NewtaxDetails.slab3 = calculateSlabTax(
          Math.min(Math.max(income - 500000, 0), 750000 - 500000),
          0.1
        );

        NewtaxDetails.slab4 = calculateSlabTax(
          Math.min(Math.max(income - 750000, 0), 1000000 - 750000),
          0.15
        );

        NewtaxDetails.slab5 = calculateSlabTax(
          Math.min(Math.max(income - 1000000, 0), 1250000 - 1000000),
          0.2
        );

        NewtaxDetails.slab6 = calculateSlabTax(
          Math.min(Math.max(income - 1250000, 0), 1500000 - 1250000),
          0.25
        );

        NewtaxDetails.slab7 = calculateSlabTax(
          Math.max(income - 1500000, 0),
          0.3
        );
      }

      localStorage.setItem("NewtaxDetails", JSON.stringify(NewtaxDetails));
    };

    calculateOldRegimeTax(taxableIncome);
    calculateNewRegimeTax(totalIncome);
  }, [
    Salary,
    PrerequisiteIncome,
    ProfitIncome,
    OtherIncome,
    HRA,
    LTA,
    OtherExemptedAllowances,
    ProfessionalTax,
    OwnHouseIncome,
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
    RentedHouseIncome,
    DeemdedHouseIncome,
  ]);

  return (
    <section id="form-filling">
      <Steps
        current={step - 1}
        items={antdSteps}
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      <div className="personalInfo">
        <form onSubmit={handleSubmit}>
          {steps[step - 1]}
          <div
            style={{
              marginTop: "20px",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            {step > 1 && (
              <Button
                style={{ background: "var(--tertiary-light)" }}
                variant="secondary"
                onClick={prevStep}
              >
                Previous
              </Button>
            )}
            {step < steps.length && (
              <Button
                style={{ background: "var(--primary)" }}
                variant="primary"
                onClick={nextStep}
                disabled={isLimitCrossed}
              >
                Next
              </Button>
            )}
            {step === steps.length && (
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "15px",
                  border: "2px solid var(--primary)",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              >
                <Form.Group
                  className=""
                  id="formGridCheckbox"
                  style={{ margin: "auto" }}
                >
                  <Form.Check
                    type="checkbox"
                    label="Have you verified the Information"
                    onChange={(e) => {
                      setIsCheckboxChecked(e.target.checked);
                    }}
                  />
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  disabled={isLoading && (!isCheckboxChecked || isLimitCrossed)}
                  onClick={handleSubmit}
                >
                  {isLoading && (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  {isLoading ? "Loading..." : "Submit"}
                </Button>
              </span>
            )}
          </div>
        </form>
      </div>
      <div>
        <button onClick={toggleFeedbackModal} className="form_feedback_button">
          Feedback
        </button>
        <Feedback
          showModal={showFeedbackModal}
          handleClose={toggleFeedbackModal}
        />
      </div>
    </section>
  );
}

export default OldMulti;
