import { TextField, Button } from "@mui/material";
import Link from "next/link";
import React, { useRef } from "react";
import styles from "./SignInForm.module.css";
type Props = {
  onSubmit: any;
};

export default function SignInForm({ onSubmit }: Props) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) {
      throw new Error("Please enter a valid email and password");
    }
    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    onSubmit(userData);
  };

  return (
    <div className={styles.signin}>
      <div
        style={{
          textAlign: "center",
          marginLeft: "8rem",
          marginRight: "8rem",
        }}
      >
        <h1>Welcome Back </h1>
        <p>
          Not a Member?
          <Link href="/Sign-Up">
            <Button variant="text"> Sign Up </Button>
          </Link>
        </p>
      </div>
      <form
        style={{ display: "flex", flexDirection: "column", margin: "2rem" }}
        className={styles.signin__form}
        onSubmit={handleFormSubmit}
      >
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
        <Button
          variant="contained"
          type="submit"
          style={{
            padding: ".7rem",
            backgroundColor: "#5452ff",
            marginTop: "1rem",
            boxShadow: "3px 3px 1rem  #d3d2ff",
          }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
