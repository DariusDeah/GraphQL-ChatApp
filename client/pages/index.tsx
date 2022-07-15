import { Container, Grid, Grow } from "@mui/material";
import type { NextPage } from "next";
import ActivityList from "../components/ActivityList/ActivityList";
import ChatList from "../components/ChatList/ChatList";
import Nav from "../components/Nav/Nav";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SearchBar from "../components/SearchBar/SearchBar";

const activityItems = [
  "New message from chat",
  "You were invited to join the chat ",
  "You were promoted to admin",
  "Mark has joined the chat ",
  "you started a new conversation ",
];

const Home: NextPage = () => {
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
            <ProfileCard />
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
    </Container>
  );
};

export default Home;
