import { Button, TextField } from "@mui/material";
import React from "react";
import styles from "./SignUpForm.module.css";

type Props = {};

const SignUpForm = (props: Props) => {
  return (
    <div className="signup">
      <div style={{ textAlign: "center" }}>
        <h1>Welcome Create Account</h1>
        <p>Already have an account? SignIn</p>
      </div>
      <form
        style={{ display: "flex", flexDirection: "column", margin: "2rem" }}
        className={styles.signup__form}
      >
        <TextField variant="outlined" placeholder="name" required />
        <TextField variant="outlined" placeholder="email" required />
        <TextField variant="outlined" placeholder="password" required />
        <TextField variant="outlined" placeholder="confirm password" required />
        <Button
          variant="contained"
          style={{
            padding: ".7rem",
            backgroundColor: "#5452ff",
            marginTop: "1rem",
            boxShadow: "3px 3px 1rem  #d3d2ff",
          }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
