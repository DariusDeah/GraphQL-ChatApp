import {
  MailOutline,
  MapOutlined,
  PhoneAndroidRounded,
  Twitter,
} from "@mui/icons-material";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { state } from "../../MockState";
import ProfileCard from "../ProfileCard/ProfileCard";

type Props = {};
const user = state.user;
function ChatInfo({}: Props) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ marginBottom: "2rem" }}>
        {" "}
        <ProfileCard userData={user} />{" "}
      </div>
      <Card style={{ marginBottom: "2rem" }}>
        <Typography>Details</Typography>
        <div style={{ display: "flex" }}>
          <PhoneAndroidRounded />
          <Typography>2086004171</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <MapOutlined />
          <Typography>Boise Idaho</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <MailOutline />
          <Typography>Kylie@gmail.com</Typography>
        </div>
      </Card>
      <Card style={{ padding: "1.5rem" }}>
        <Typography>Started On</Typography>
        <Typography>{new Date(Date.now()).toLocaleDateString()}</Typography>
        <Typography>Last chat sent on</Typography>
        <Typography>{new Date(Date.now()).toLocaleDateString()}</Typography>
      </Card>
    </div>
  );
}

export default ChatInfo;
