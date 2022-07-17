import { Message } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { SetStateAction, useEffect, useState } from "react";
import MessageBox from "../Message/Message";

type Props = {};

function ChatBox({}: Props) {
  const chatMessages = [
    {
      message: "Hey wuts up?",
      sender: {
        name: "Jane",
        id: "123",
      },
    },

    {
      message: "I'm a fruit.",
      sender: {
        name: "Josh",
        id: "234",
      },
    },
    {
      message: "Umm Really?",
      sender: {
        name: "Jane",
        id: "123",
      },
    },
    {
      message:
        "Orange you glad i didn't say apple...wait i dont think thats how the joke goes😂😅",
      sender: {
        name: "Josh",
        id: "234",
      },
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel magna alignItems  etiam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam. Fusce vel magna sed diam   sed diam. Fusce vel magna sed diam sed diam. Fusce vel magna sed diam sed diam",
      sender: {
        name: "Josh",
        id: "234",
      },
    },
  ];

  const [messages, setMessages] = useState(chatMessages);

  function addToChat(e: any) {
    const userInfo = {
      name: "Josh",
      id: "234",
    };

    const message = { message: e.target.value, sender: userInfo };
    setMessages((prev: any) => {
      return [...prev, message];
    });
    console.log(messages);
  }

  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        item
        xs={12}
        height="10%"
        padding={3}
        style={{
          marginTop: "5rem",
          borderBottom: "2px solid lightgray",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{ height: "4rem", width: "4rem" }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3276&q=80"
          />
          <Typography variant="h5">Kylie Ross</Typography>
        </div>
        <div>
          <Button>ONline</Button>
        </div>
      </Grid>
      <Grid item xs={12} height="70%" padding={2} overflow="auto">
        <Box>
          {messages.length > 1 &&
            messages.map((message) => (
              <MessageBox message={message.message} sender={message.sender} />
            ))}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        height="10%"
        style={{ backgroundColor: "white", zIndex: 1 }}
      >
        <Paper>
          {/* <TextField
            variant="filled"
            placeholder="message"
            style={{ borderRadius: "50%" }}
          /> */}
          <TextField
            onSubmit={(e) => addToChat(e)}
            style={{
              borderRadius: "12rem",
              backgroundColor: "lightgray",
              border: "none",
            }}
          />
          <Button type="submit">Send</Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ChatBox;
