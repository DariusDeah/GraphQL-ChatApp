import { Container, Grid } from "@mui/material";
import React from "react";
import ActivityList from "../components/ActivityList/ActivityList";
import ChatBox from "../components/ChatBox/ChatBox";
import ChatInfo from "../components/ChatInfo/ChatInfo";
import ChatList from "../components/ChatList/ChatList";
import Nav from "../components/Nav/Nav";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Sidebar from "../components/Sidebar/Sidebar";

type Props = {};

function Chat({}: Props) {
  return (
    <div
    //   style={{
    //     margin: "auto",
    //     marginTop: "6rem",
    //   }}
    >
      <Grid item xs={12}>
        <Nav />
      </Grid>

      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={0} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={7}>
          <ChatBox />
        </Grid>
        <Grid item xs={0} md={2}>
          <ChatInfo />
        </Grid>
      </Grid>
    </div>
  );
}

export default Chat;
