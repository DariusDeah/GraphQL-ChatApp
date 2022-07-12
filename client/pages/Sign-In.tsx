import { Card } from "@mui/material";
import { NextPage } from "next/types";
import React from "react";
import SignUpForm from "../components/SignUpForm/SignUpForm";

type SignInProps = {};

const SignIn: NextPage = (props: SignInProps) => {
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
      {/* <img
        src="https://www.behance.net/gallery/97596075/Minh-ha-sach-truyn-Mt-minh-khong-co-don-/modules/563550755"
        alt=" cool image"
      /> */}
      <Card style={{ height: "fit-content", padding: "4rem" }}>
        SignIn
        <SignUpForm />
      </Card>
    </div>
  );
};

export default SignIn;
