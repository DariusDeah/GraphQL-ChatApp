import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import React from "react";
import Nav from "../components/Nav/Nav";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { findUsers } from "../graphql/user.graphql";

type Props = {};

function Search({}: Props) {
  const { data, loading, error } = useQuery(findUsers, {
    variables: { name: "happy chatter" },
  });
  if (data) {
    console.log({ data });
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Nav />
      </Grid>

      <Grid
        container
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

      <Grid item xs={12} md={3} flexDirection="row">
        {data &&
          data.users.map((user: any) => (
            <ProfileCard userData={user} key={user._id} />
          ))}
        <ProfileCard userData={{ name: "Jake", email: "jake@gmail.com" }} />
        <ProfileCard userData={{ name: "Jake", email: "jake@gmail.com" }} />
        <ProfileCard userData={{ name: "Jake", email: "jake@gmail.com" }} />
      </Grid>
    </Grid>
  );
}

export default Search;
