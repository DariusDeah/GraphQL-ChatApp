import { useQuery } from "@apollo/client";
import { Container, Grid } from "@mui/material";
import React from "react";
import Nav from "../components/Nav/Nav";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { findUsers } from "../graphql/user.graphql";

type Props = {};

function Search({}: Props) {
  const { data, loading, error } = useQuery(findUsers, {
    variables: { name: "New User guy" },
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
        marginY={5}
        style={{
          marginTop: "6rem",
          justifyContent: "center",
        }}
      >
        <SearchBar />
      </Grid>

      <Grid container columnSpacing={2} rowSpacing={2}>
        {data &&
          data.users.map((user: any) => (
            <Grid item xs={4}>
              <ProfileCard userData={user} key={user._id} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Search;
