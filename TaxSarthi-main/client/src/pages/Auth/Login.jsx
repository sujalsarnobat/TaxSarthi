import React, { useState, useEffect } from "react";
// import Stack from "react-bootstrap/Stack";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SignIn from "../../components/Auth/SignIn";
import SignUp from "../../components/Auth/SignUp";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [key, setKey] = useState("login");

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/docs-list");
  }, [navigate]);
  return (
    <section className="Login-sec">
      <div className="login-info">
        {/* <Stack gap={3}> */}
        <img
          src="https://assets1.cleartax-cdn.com/cleartax/images/1608202921_signup.png"
          alt="random.png"
        />
        <h3>Maximum tax savings on ITR</h3>
        <p>
          <img
            src="https://assets1.cleartax-cdn.com/cleartax/images/1629891696_ic_tickmark1.svg"
            alt="tick.svg"
          />
          {"  "}
          Simplified Process
        </p>
        <p>
          <img
            src="https://assets1.cleartax-cdn.com/cleartax/images/1629891696_ic_tickmark1.svg"
            alt="tick.svg"
          />
          {"  "}
          Easy to understand taxes
        </p>
        {/* </Stack> */}
      </div>
      <div className="login-form">
        <h1>Welcome back!</h1>
        <p>Login or Signup to proceed</p>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          fill
        >
          <Tab className="letters" eventKey="login" title="Login">
            <SignIn />
          </Tab>
          <Tab eventKey="signup" title="SignUp">
            <SignUp />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Login;
