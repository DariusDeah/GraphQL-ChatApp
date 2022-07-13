import { Grid } from "@mui/material";
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
];

const Home: NextPage = () => {
  return (
    <Grid container columnSpacing={{ xs: 2 }}>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid
        xs={12}
        container
        style={{
          marginTop: "6rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar />
      </Grid>
      {/* <Divider color="red" /> */}
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        style={{
          marginTop: "1rem",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-around",
          width: "84%",
          margin: "auto",
        }}
      >
        <Grid xs={12} md={4} item>
          <ProfileCard />
        </Grid>
        <Grid xs={12} md={4} item>
          <ActivityList activites={activityItems} />
        </Grid>
        <Grid xs={12} md={4} item>
          <ChatList />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
