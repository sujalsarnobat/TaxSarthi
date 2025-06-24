import React,{useState,useEffect} from 'react'
import "./Profile.css"
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import States from "../../utils/States.json";
import { FaRegCircleUser } from "react-icons/fa6";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [FirstName, setFirstName] = useState("");
    const [MiddleName, setMiddleName] = useState("");
    const [LastName, setLastName] = useState("");
    const [DateOfBirth, setDateOfBirth] = useState("");
    const [FatherName, setFatherName] = useState("");
    const [Gender, setGender] = useState("");
    const [MaritalStatus, setMaritalStatus] = useState("");
    const [AadharNo, setAadharNo] = useState(0);
    const [PanCard, setPanCard] = useState("");
    const [MobileNo, setMobileNo] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    // const [PermanentAddress, setPermanentAddress] = useState("");
    const [City, setCity] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [PinCode, setPinCode] = useState("");

    const userDataString = localStorage.getItem("userInfo");
    const userData = JSON.parse(userDataString);
    const email = userData.email;

    const navigate = useNavigate();

      const handleGenderChange = (e) => {
        setGender(e.target.value);
      };
      const handleMarriedChange = (e) => {
        setMaritalStatus(e.target.value);
      };


      useEffect(() => {
        setEmail(email);
        console.log(Email);
        const fetchData = async () => {
          await axios
              .post(`https://taxsaarthi.onrender.com/user/personalInfoaccess`, {
                  Email,
              })
              .then((result) => {
                  const personalInfo = result.data;
                  console.log(personalInfo);
                  setFirstName(personalInfo.FirstName || "");
                  setMiddleName(personalInfo.MiddleName || "");
                  setLastName(personalInfo.LastName || "");
                  setDateOfBirth(personalInfo.DateOfBirth || "");
                  setFatherName(personalInfo.FatherName || "");
                  setGender(personalInfo.Gender || "");
                  setMaritalStatus(personalInfo.MaritalStatus || "");
                  setAadharNo(personalInfo.AadharNo || 0);
                  setPanCard(personalInfo.PanCard || "");
                  setMobileNo(personalInfo.MobileNo || "");
                  setAddress(personalInfo.Address || "");
                  setCity(personalInfo.City || "");
                  setSelectedState(personalInfo.selectedState || "");
                  setPinCode(personalInfo.PinCode || "");
              })
              .catch((error) => {
                  console.error("Error fetching data:", error);
              });
      }
        // Call the fetchData function
        fetchData();
      }, [Email,email])
      

async function handleSubmit(e) {
  e.preventDefault();
const Token = localStorage.getItem("token");
  await axios
    .post("https://taxsaarthi.onrender.com/user/personalInfosave", {
      Token,
      AadharNo,
      FirstName,
      MiddleName,
      LastName,
      DateOfBirth,
      FatherName,
      Gender,
      MaritalStatus,
      PanCard,
      MobileNo,
      Email,
      Address,
      City,
      selectedState,
      PinCode,
    })
    .then((result) => {
      console.log(result);

      // Assuming the server responds with a token
      const id = result.data.id;

      if (id) {
        localStorage.setItem("pid", id);
        toast.success("Personal Info Saved successfully");
        setTimeout(() => {
            navigate("/docs-list");
        }, 1500);
      } else {
        toast.error("Personal Info cannot be saved error in the system");
      }
    })
    .catch((err) => {
      console.error(err);
      toast.error("Try again after sometime");
    })
    .finally(() => {
    });
}

  return (
    <main className="profile_personal_form">
      <Stack gap={3}>
        <div className="icon_username_profile">
          <FaRegCircleUser style={{ height: "2em", width: "2em" }} />
          <h4 className="profile_username">{email}</h4>
        </div>
        <Row className="mb-1 profile_name_row">
          <Form.Group as={Col} md="4" controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="First Name *"
              className="mb-1"
            >
              <Form.Control
                type="text"
                value={FirstName}
                placeholder="First Name "
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Middle Name *"
              className="mb-1"
            >
              <Form.Control
                type="text"
                value={MiddleName}
                placeholder="Middle Name"
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name *"
              className="mb-1"
            >
              <Form.Control
                type="text"
                value={LastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-1 profile_name_row">
          <Form.Group
            as={Col}
            className="mb-1"
            md="6"
            controlId="formGridEmail"
          >
            <Form.Label>Date Of Birth *</Form.Label>
            <Form.Control
              type="text"
              value={DateOfBirth}
              placeholder="DD/MM/YYYY"
              onChange={(e) => {
                setDateOfBirth(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            className="mb-1"
            controlId="formGridEmail"
          >
            <Form.Label>Father Name *</Form.Label>
            <Form.Control
              type="text"
              value={FatherName}
              placeholder=""
              onChange={(e) => {
                setFatherName(e.target.value);
              }}
            />
          </Form.Group>
        </Row>
        <Row className="mb-1 profile_name_row">
          <Form.Group as={Col} md="6" className="mb-1">
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
          <Form.Group as={Col} md="6" className="mb-1">
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
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} md="6" controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Aadhar Card Number"
              className="mb-1"
            >
              <Form.Control
                type="text"
                value={AadharNo}
                onChange={(e) => setAadharNo(e.target.value)}
                placeholder="Aadhar Card Number"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="PanCard Number"
              className="mb-1"
            >
              <Form.Control
                type="text"
                value={PanCard}
                onChange={(e) => setPanCard(e.target.value)}
                placeholder="PanCard Number"
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group
            as={Col}
            className="mb-1"
            md="6"
            controlId="formGridEmail"
          >
            <Form.Label>Mobile Number *</Form.Label>
            <Form.Control
              type="text"
              value={MobileNo}
              placeholder="+91....."
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className="mb-1"
            md="6"
            controlId="formGridEmail"
          >
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              value={Email}
              disabled
            />
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group className="mb-1" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="Flat No, Building Name"
              type="text"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={City}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State/UT</Form.Label>
            <Form.Select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
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
              onChange={(e) => setPinCode(e.target.value)}
            />
          </Form.Group>
        </Row>
      </Stack>
      <button
        type="submit"
        className="profile_info_submit"
        onClick={handleSubmit}
      >
        Submit Personal Details
      </button>
    </main>
  );
}

export default Profile