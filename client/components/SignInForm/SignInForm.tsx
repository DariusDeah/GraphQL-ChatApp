import { TextField, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./SignInForm.module.css";
type Props = {};

export default function SignInForm({}: Props) {
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
      >
        <TextField variant="outlined" placeholder="email" required />
        <TextField variant="outlined" placeholder="password" required />
        <Button
          variant="contained"
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
