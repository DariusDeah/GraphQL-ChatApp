import { Card } from "@mui/material";
import { NextPage } from "next/types";
import React from "react";
import Nav from "../components/Nav/Nav";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import WelcomeSvg from "../components/ui/WelcomeSvg.ui";

type Props = {};

type formData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp({}: Props) {
  const handleSignup = (signupFormData: formData) => {
    console.log(signupFormData);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "10rem",
        width: "100%",
        height: "100%",
      }}
    >
      <Nav />
      <div
        style={{
          width: "15rem",
          position: "absolute",
          top: "2rem",
          left: "10rem",
        }}
      >
        <WelcomeSvg />
      </div>
      {/* <img
            src="https://www.behance.net/gallery/97596075/Minh-ha-sach-truyn-Mt-minh-khong-co-don-/modules/563550755"
            alt=" cool image"
          /> */}
      <Card style={{ height: "fit-content", padding: "4rem" }}>
        Sign Up 👤
        <SignUpForm onSubmit={handleSignup} />
      </Card>
    </div>
  );
}
