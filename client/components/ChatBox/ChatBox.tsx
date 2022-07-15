import { AppBar, Avatar, Box, Grid, Paper, TextField } from "@mui/material";
import React from "react";

type Props = {};

function ChatBox({}: Props) {
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        height="10%"
        style={{
          marginTop: "5rem",
          borderBottom: "2px solid lightgray",
          backgroundColor: "white",
        }}
      >
        <Avatar />
      </Grid>
      <Grid item xs={12} height="70%">
        <Box>this is where messages go</Box>
      </Grid>
      <Grid item xs={12} height="10%" style={{ backgroundColor: "white" }}>
        <Paper>
          {/* <TextField
            variant="filled"
            placeholder="message"
            style={{ borderRadius: "50%" }}
          /> */}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ChatBox;
