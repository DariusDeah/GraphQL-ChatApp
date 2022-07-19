import { useQuery } from "@apollo/client";
import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { findUsers } from "../graphql/user.graphql";

type Props = {};

function Search({}: Props) {
  const [name, setName] = useState("");
  const { data, loading, error } = useQuery(findUsers, {
    variables: { name },
  });
  if (data) {
    console.log({ data });
  }
  const onSearchSubmit = (nameSearch: string) => {
    setName(nameSearch);
  };
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
        <SearchBar onSubmit={onSearchSubmit} />
      </Grid>

      <Grid container columnSpacing={2} rowSpacing={2}>
        {data &&
          data.users.map((user: any) => (
            <Grid item xs={12} md={4}>
              <ProfileCard userData={user} key={user._id} />
            </Grid>
          ))}
        {loading && <Typography variant="h4">Loading...</Typography>}
        {error && <Typography variant="h4">{name} was not found</Typography>}
      </Grid>
    </Container>
  );
}

export default Search;
