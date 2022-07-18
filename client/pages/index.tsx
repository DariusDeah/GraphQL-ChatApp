import { useQuery } from "@apollo/client";
import { Button, Container, Grid, Grow } from "@mui/material";
import type { NextPage } from "next";
import { useEffect } from "react";
import ActivityList from "../components/ActivityList/ActivityList";
import ChatList from "../components/ChatList/ChatList";
import FeedItem from "../components/FeedItem/FeedItem";
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
  return (
    <Container>
      <Grid item xs={12}>
        <Nav />
      </Grid>

      <Grid
        container
        justifyContent="center"
        width="100%"
        alignItems="start"
        marginTop={12}
      >
        <Grow in appear timeout={900}>
          <Grid xs={12} md={4} item>
            <FeedItem title="Profile">
              <ProfileCard userData={user} />
            </FeedItem>
          </Grid>
        </Grow>
        <Grow in timeout={1400}>
          <Grid xs={12} md={4} item>
            <FeedItem title="Activity">
              <ActivityList activites={activityItems} />
            </FeedItem>
          </Grid>
        </Grow>
        <Grow in timeout={1650}>
          <Grid xs={12} md={4} item>
            <FeedItem title="Chats">
              <ChatList />
            </FeedItem>
          </Grid>
        </Grow>
      </Grid>
    </Container>
  );
};

export default Home;
