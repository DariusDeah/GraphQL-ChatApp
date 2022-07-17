import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

type Props = {
  message: string;
  sender: {
    name: string;
    email?: string;
    avatar?: string;
    id: string;
  };
};

function MessageBox({ message, sender }: Props) {
  const chatBubbleColor = sender.id === "123" ? "lightblue" : "lightgray";
  return (
    <Grid container>
      {sender.id === "123" && (
        <Grid
          item
          container
          xs={12}
          alignItems="center"
          justifyContent="flex-start"
          padding={2}
          width={50}
        >
          <div>
            <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3276&q=80" />
            <Typography>{sender.name}</Typography>
          </div>
          <div>
            <Typography
              style={{
                padding: "1.2rem",
                backgroundColor: chatBubbleColor,
                borderRadius: "4rem",
              }}
            >
              {message}
            </Typography>
            <Typography>Time is here</Typography>
          </div>
        </Grid>
      )}
      {sender.id !== "123" && (
        <Grid
          item
          container
          xs={12}
          alignItems="center"
          justifyContent="flex-end"
          width={2}
          padding={2}
        >
          <div>
            <Typography
              style={{
                padding: "1.7rem",
                backgroundColor: chatBubbleColor,
                borderRadius: "4rem",
              }}
            >
              {message}
            </Typography>
            <Typography>Time is here</Typography>
          </div>
        </Grid>
      )}
    </Grid>
  );
}

export default MessageBox;
