import { Grid } from "@mui/material";
import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

type Props = {};

function ChatInfo({}: Props) {
  return (
    <Grid container>
      <ProfileCard />
    </Grid>
  );
}

export default ChatInfo;
