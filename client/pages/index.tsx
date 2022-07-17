import { useQuery } from "@apollo/client";
import { Button, Container, Grid, Grow } from "@mui/material";
import type { NextPage } from "next";
import { useEffect } from "react";
import ActivityList from "../components/ActivityList/ActivityList";
import ChatList from "../components/ChatList/ChatList";
import Nav from "../components/Nav/Nav";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { findUsers } from "../graphql/user.graphql";
import { state } from "../MockState";

const activityItems = [
  "New message from chat",
  "You were invited to join the chat ",
  "You were promoted to admin",
  "Mark has joined the chat ",
  "you started a new conversation ",
];

const user = state.account;

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(findUsers, {
    variables: { name: "happy chatter" },
  });
  if (data) {
    console.log({ data });
  }
  return (
    <Container>
      <Grid item xs={12}>
        <Nav />
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          marginTop: "6rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar />
      </Grid>
      <Grid container justifyContent="center" width="100%">
        <Grow in appear timeout={900}>
          <Grid xs={12} md={4} item>
            <ProfileCard userData={user} />
          </Grid>
        </Grow>
        <Grow in timeout={1400}>
          <Grid xs={12} md={4} item>
            <ActivityList activites={activityItems} />
          </Grid>
        </Grow>
        <Grow in timeout={1650}>
          <Grid xs={12} md={4} item>
            <ChatList />
          </Grid>
        </Grow>
      </Grid>
      <Button onClick={() => console.log(data)}>Grapql test</Button>
    </Container>
  );
};

export default Home;
