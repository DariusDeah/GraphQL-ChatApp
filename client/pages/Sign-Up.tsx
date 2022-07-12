import { Card } from "@mui/material";
import { NextPage } from "next/types";
import React from "react";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import WelcomeSvg from "../components/ui/welcomeSvg.ui";

type Props = {};

export default function SignUp({}: Props) {
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
        <SignUpForm />
      </Card>
    </div>
  );
}
