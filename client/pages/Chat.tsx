import { Container, Grid } from "@mui/material";
import React from "react";
import ActivityList from "../components/ActivityList/ActivityList";
import ChatList from "../components/ChatList/ChatList";
import Nav from "../components/Nav/Nav";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SearchBar from "../components/SearchBar/SearchBar";

type Props = {};

function Chat({}: Props) {
  return (
    <div
      style={{
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <Grid item xs={12}>
        <Nav />
      </Grid>

      <Grid container alignItems="center" marginTop={15}>
        <Grid item xs={3}>
          sidebar
        </Grid>
        <Grid item xs={7}>
          chat section
        </Grid>
        <Grid item xs={2}>
          chat info
        </Grid>
      </Grid>
    </div>
  );
}

export default Chat;
