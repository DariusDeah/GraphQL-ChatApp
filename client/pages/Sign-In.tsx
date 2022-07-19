import { useMutation } from "@apollo/client";
import { Card } from "@mui/material";
import { NextPage } from "next/types";
import React from "react";
import Nav from "../components/Nav/Nav";
import SignInForm from "../components/SignInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import { loginUser } from "../graphql/user.graphql";

type SignInProps = {};
type loginFormData = {
  email: string;
  password: string;
};
const SignIn: NextPage = (props: SignInProps) => {
  const [loginUserMutation, { data, loading, error }] = useMutation(loginUser);
  const handleLogin = (userData: loginFormData) => {
    loginUserMutation({
      variables: {
        email: userData.email,
        password: userData.password,
      },
    });
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
      {/* <img
        src="https://www.behance.net/gallery/97596075/Minh-ha-sach-truyn-Mt-minh-khong-co-don-/modules/563550755"
        alt=" cool image"
      /> */}
      <Card style={{ height: "fit-content", padding: "4rem" }}>
        Sign In
        <SignInForm onSubmit={handleLogin} />
      </Card>
    </div>
  );
};

export default SignIn;
