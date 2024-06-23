import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Avatar, Grid, TextField, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../../../stores/auth";
import { baseURL } from "../../../basic";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  //Style
  const paperStyle = {
    padding: 20,
    height: "90vh",
    width: 280,
    margin: "20px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  const avatarStyle = {
    backgroundColor: "#5d5de7",
  };
  const buttonStyle = {
    margin: "8px 0px",
    backgroundColor: "#5d5de7",
    width: "350px",
  };
  const fieldStyle = {
    margin: "8px 0px",
    width: "350px",
  };
  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  //Regex
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  //Input Field
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(typeof email);
    setEmailError("");
    if (!isValidEmail.test(email)) {
      setEmailError("Please enter valid email.");
    }
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  //Login Validation
  const validUser = [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
    if (email && password) {
      const header = { "Access-control-Allow-Origin": "*" };
      let result = await axios
        .post(`${baseURL}/user/login`, {
          email: email,
          password: password,
        })
        .then((result) => {
          console.log(result);
          console.log(result.data);
          if (result.data) {
            if (result) {
              console.log(result.data.data.accessToken);
              storeTokenInLS(result.data.data.accessToken);
              // localStorage.setItem(
              //   "accessTokenOfUser",
              //   JSON.stringify(result.data.data.accessToken)
              // );
              // localStorage.setItem("accessTokenOfUser", result.data.data.token);
              // storeTokenInLS
            }
          }
          // console.log(result.data.user);
          console.log(result.data.message);
          toast.success(result.data.message);
          setTimeout(() => {
            navigate("/");
          }, 4000);
        })
        .catch((err) => {
          // console.log(err.response.data);
          // setError(err.response.data.message)
          console.log(err);
          // toast.error(err.response.data.message);
          setTimeout(() => {
            //   setError("")
          }, 5000);
        });
    }
  };
  return (
    <Grid>
      <Grid elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleIcon />
          </Avatar>
          <h3>Sign in</h3>
        </Grid>
        <TextField
          id="outlined-basic"
          name="email"
          label="Email"
          placeholder="Enter your Email ID"
          variant="outlined"
          // fullWidth
          style={fieldStyle}
          onChange={onChangeEmail}
          error={emailError}
          helperText={emailError}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your Password"
          variant="outlined"
          // fullWidth
          style={fieldStyle}
          onChange={onChangePassword}
          error={passwordError}
          helperText={passwordError}
        />

        <Button
          type="submit"
          variant="contained"
          // color="primary"
          fullWidth
          style={buttonStyle}
          onClick={handleSubmit}
        >
          Sign in
        </Button>
        <Typography
          style={{ cursor: "pointer" }}
          onClick={handleForgotPassword}
        >
          Forgot password?
        </Typography>
        <Typography style={{ cursor: "pointer" }} onClick={handleSignUp}>
          Create new account
        </Typography>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default Login;
