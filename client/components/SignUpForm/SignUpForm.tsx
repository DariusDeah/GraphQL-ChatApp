import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React, { useRef } from "react";
import styles from "./SignUpForm.module.css";

type Props = {
  onSubmit: any;
};

const SignUpForm = ({ onSubmit }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (
      !nameRef.current ||
      !emailRef.current ||
      !passwordRef.current ||
      !confirmPasswordRef.current
    ) {
      throw new Error(`Invalid values`);
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      throw new Error("passwords must match ");
    }

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };
    onSubmit(userData);
  };

  return (
    <div className="signup">
      <div
        style={{ textAlign: "center", marginRight: "4rem", marginLeft: "4rem" }}
      >
        <h1>Welcome Create Account</h1>
        <p>
          Already a Member?
          <Link href="/Sign-In">
            <Button variant="text"> Sign In </Button>
          </Link>
        </p>
      </div>
      <form
        style={{ display: "flex", flexDirection: "column", margin: "2rem" }}
        className={styles.signup__form}
        onSubmit={handleFormSubmit}
      >
        <TextField
          variant="outlined"
          placeholder="name"
          required
          inputRef={nameRef}
        />
        <TextField
          variant="outlined"
          placeholder="email"
          required
          inputRef={emailRef}
        />
        <TextField
          variant="outlined"
          placeholder="password"
          required
          inputRef={passwordRef}
        />
        <TextField
          variant="outlined"
          placeholder="confirm password"
          required
          inputRef={confirmPasswordRef}
        />
        <Button
          variant="contained"
          style={{
            padding: ".7rem",
            backgroundColor: "#5452ff",
            marginTop: "1rem",
            boxShadow: "3px 3px 1rem  #d3d2ff",
          }}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
