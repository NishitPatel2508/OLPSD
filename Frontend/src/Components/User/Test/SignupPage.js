import styles from "./SignupPage.module.css";
// import GroupComponent from "./GroupComponent";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Typography, Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import { baseURL } from "../../../basic";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    if (!isValidEmail.test(email)) {
      setEmailError("Please enter valid email.");
    }
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);

    if (!isPasswordValid.test(password)) {
      setPasswordError(
        "Password must be greater than 8 characters & contain minimum 1 special charater & number."
      );
    } else {
      setPasswordError("");
    }
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);

    if (password !== e.target.value) {
      setConfirmPasswordError("Confirm password must be match with password");
    } else {
      setConfirmPasswordError("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setNameError("Name is required.");
    } else {
      setNameError("");
    }
    if (!email) {
      setEmailError("Email is required.");
    }
    if (!password) {
      setPasswordError("Password is required.");
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required.");
    }
    if (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword == password &&
      isPasswordValid.test(password) &&
      isValidEmail.test(email)
    ) {
      const header = { "Access-control-Allow-Origin": "*" };

      let result = await axios
        .post(`${baseURL}/users/createuser`, {
          name: name,
          email: email,
          password: password,
          header,
        })
        .then((result) => {
          console.log(result);
          // console.log("firstname: ", name);
          // localStorage.firstname = name;
          toast.success("User Registration successfully !");
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        })
        .catch((err) => {
          // console.log(err.response.data);
          console.log(err.response.data.message);
          // toast.error(err.response.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 5000);
          // setError(err.response.data.message);
        });
    }
  };

  return (
    <>
      <div className={styles.signupPage}>
        <div className={styles.wrapperBlobs}>
          {/* <img className={styles.blobsIcon} alt="" src="" /> */}
        </div>
        <section className={styles.form}>
          <div className={styles.createAccountParent}>
            <h1 className={styles.createAccount}>{`Create Account `}</h1>
            {/* <h1 style={{marginTop:"25px"}}>{`Welcome Instructor `}</h1> */}
            {/* <GroupComponent /> */}
            <form className="row " onSubmit={handleSubmit}>
              {/* <h1 className='text-center'>Register</h1> */}
              <div className="row " style={{ marginTop: "55px" }}>
                <div className="col-md-5 ">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    name="Nname"
                    type="text"
                    placeholder="Enter your Name"
                    variant="outlined"
                    fullWidth
                    // style={fieldStyle}
                    onChange={onChangeName}
                    error={nameError}
                    helperText={nameError}
                  />
                </div>
                <div className="col-md-5 ">
                  <TextField
                    id="outlined-basic"
                    name="email"
                    label="Email"
                    placeholder="Enter your Email ID"
                    variant="outlined"
                    fullWidth
                    // style={fieldStyle}
                    onChange={onChangeEmail}
                    error={emailError}
                    helperText={emailError}
                  />
                </div>

                <div className="col-md-10 mt-4">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your Password"
                    variant="outlined"
                    fullWidth
                    // style={fieldStyle}
                    onChange={onChangePassword}
                    error={passwordError}
                    helperText={passwordError}
                  />
                </div>

                <div className="col-md-10 mt-4">
                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    name="password"
                    type="password"
                    placeholder="Enter your Password"
                    variant="outlined"
                    fullWidth
                    // style={fieldStyle}
                    onChange={onChangeConfirmPassword}
                    error={confirmPasswordError}
                    helperText={confirmPasswordError}
                  />
                </div>
                <div className="col-md-10 mt-1">
                  <Button
                    type="submit"
                    variant="contained"
                    // color="primary"
                    fullWidth
                    // style={buttonStyle}
                    // onClick={handleSubmit}
                    style={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      background: "#7718eb",
                      borderRadius: "8px",
                      border: "none",
                      "&:hover": { background: "#f4ebff" },
                    }}
                  >
                    Sign up
                  </Button>
                </div>
              </div>
              <Typography style={{ fontSize: "15px", marginTop: "12px" }}>
                <Link underline="none">Have an Student Account?</Link>
                <Link
                  // href="/login"
                  onClick={handleLogin}
                  underline="none"
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Login
                </Link>
              </Typography>
            </form>
          </div>
        </section>
        <img
          className={styles.illustrationIcon}
          loading="lazy"
          alt=""
          src="/images/Illustration.png"
        />
        <div className={styles.logo}>
          <img
            // className={styles.logoChild}
            loading="lazy"
            alt=""
            src="/images/brainwave.svg"
          />
        </div>
        {/* <Typography style={{fontSize:"15px", marginTop:"12px"}} >
              
              <Link  underline="none">Have an Account of an Instructor?</Link>
              <Link href="/login" underline="none" style={{
                color:"blue",
                fontWeight:"bold"
              }}>  Login</Link>
            </Typography> */}
      </div>
      <ToastContainer />
    </>
  );
};

export default SignupPage;
