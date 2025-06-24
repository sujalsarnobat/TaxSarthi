import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import "./Main.css";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import axios from 'axios';
import { Spinner } from "react-bootstrap";

function SignUp() {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const data = {name,email,password,confirmPassword};


  async function handleClick(e) {
    e.preventDefault();
    setLoading(true);
    await axios
      .post("https://taxsaarthi.onrender.com/user/signup", {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((result) => {
        const { token } = result.data;
        // Store the token and user information in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("userInfo", JSON.stringify(data));

        toast.success("You are Registered successfully");
        navigate("/profile");
      })
      .catch((error) => toast.error("Try after sometime",error))
      .finally(()=>{setLoading(false)})
  }
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


  return (
    <Stack gap={2}>
      <input
        className="login-input"
        placeholder="Enter your Name"
        required
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="login-input"
        placeholder="Add your Email"
        required
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="login-input"
        placeholder="Enter Your Password"
        required
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        className="login-input"
        placeholder="Confirm Password"
        required
        type={showPassword ? "text" : "password"}
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <div className="button">
        <button className="login-button" onClick={handleClick}>
          {loading && (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
              style={{ marginRight: 20, color: "#4d7298" }}
            />
          )}
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>
      </div>
    </Stack>
  );
}

export default SignUp;
