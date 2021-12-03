import React, { useState, useEffect, useRef } from "react";

import Button from "../../../components/Button/Button";
import InputControl from "../../../components/InputControl/InputControl";

import styles from "../Auth.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(false);

  const validateForm = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const errors = {};
    if (email.trim() === "") {
      errors.email = "Enter Email";
    } else if (emailRegex.test(String(email).toLowerCase())) {
      errors.email = "";
    } else {
      errors.email = "Invalid Email";
    }

    if (!password) {
      errors.password = "Enter Password";
    } else if (password.length < 6)
      errors.password = "Password must be of 6 characters";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return false;
    } else {
      return true;
    }
  };

  const submission = (e) => {
    e.preventDefault();
    const emailValue = email;
    const passwordValue = password;

    if (!emailValue || !passwordValue) {
      setErrorMessage("Enter Credentials");
      return;
    }
    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    // disable login button while calling api
    // setLoginButtonDisabled(true);
  };

  return (
    <div className={styles["signin-form"]}>
      <h1 className={styles["signin-form_head"]}>Sign in</h1>
      <h3 className={styles["signin-form_sub-head"]}>Futuristic</h3>
      <form onSubmit={(e) => submission(e)}>
        <div className={styles.formFeilds}>
          <InputControl
            label="Email"
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
            }}
            placeholder="abc@xyz.com"
            error={errors.email}
          />
          <InputControl
            label="Password"
            password
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);
            }}
            placeholder="w23@e3r#rf"
            error={errors.password}
          />
          {errorMessage && <small className="error-msg">{errorMessage}</small>}

          <div style={{ display: "flex" }}>
            <Button disabled={loginButtonDisabled} type="submit">
              Sign in
            </Button>
          </div>
        </div>
      </form>
      <br />
      <p className={styles["signin_footer-text"]}>
        New here? &nbsp;
        <span className={styles["signin_special-text"]}>Sign up</span>
      </p>
    </div>
  );
}

export default Login;
