import { MessageRounded, PlusOneRounded } from "@mui/icons-material";
import {
  AvatarGroup,
  Button,
  Card,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

type Props = {};

const avatars = [
  {
    name: "Josh Avatar",
    message: "a random text",
    sentTime: "12:00pm",
  },
  {
    name: "Kylie Avatar",
    message: "typing...",
    sentTime: "1:00pm",
  },
  {
    name: "Kylie Avatar",
    message: "typing...",
    sentTime: "1:00pm",
  },
  {
    name: "Kylie Avatar",
    message: "typing...",
    sentTime: "1:00pm",
  },
  {
    name: "Kylie Avatar",
    message: "typing...",
    sentTime: "1:00pm",
  },
];
const GroupChats = [
  {
    name: "Friends 4 Lyfe",
    message: "dude no way!",
    sentTime: "2:00pm",
    members: ["Bob", "John", "Kyle"],
  },
  {
    name: "Friends 4 Lyfe",
    message: "dude no way!",
    sentTime: "2:00pm",
    members: ["Bob", "John", "Kyle"],
  },
  {
    name: "Friends 4 Lyfe",
    message: "dude no way!",
    sentTime: "2:00pm",
    members: ["Bob", "John", "Kyle"],
  },
  {
    name: "Cool Kidz",
    message: "dude no way!",
    sentTime: "2:00pm",
    members: ["Bob", "John", "Kyle"],
  },
  {
    name: "Bailey,Amy,Ross +2",
    message: "yeah sounds like a good plan",
    sentTime: "2:00pm",
    members: ["Bob", "John", "Kyle"],
  },
];
function Sidebar({}: Props) {
  const [messages, setMessages] = useState(avatars);
  function filterMessages(e: any) {
    setMessages(
      avatars.filter((message) => message.name.includes(e.target.value))
    );
  }
  return (
    <div
      style={{
        padding: "1rem",
        borderRight: "solid lightgray 2px",
        backgroundColor: "white",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div style={{ marginBottom: "1rem", marginTop: "6rem" }}>
        <SearchBar onChange={(e) => filterMessages(e)} />
        <Typography variant="h5">
          Conversations({avatars.length + GroupChats.length})
        </Typography>
      </div>

      <div>
        {messages.map((avatar, key) => (
          <Card style={{ marginBottom: "1rem" }}>
            <div
              style={{
                padding: "1rem",
                display: "flex",
              }}
            >
              <Avatar />
              <Typography>{avatar.name}</Typography>
              {avatar.message.includes("typing") ? (
                <Typography color="green">{avatar.message}</Typography>
              ) : (
                <Typography color="GrayText">{avatar.message}</Typography>
              )}
              <Typography color="GrayText">{avatar.sentTime}</Typography>
              <Divider />
            </div>
          </Card>
        ))}
        {GroupChats.map((groupChat) => (
          <div
            style={{
              padding: "1rem",
              display: "flex",
            }}
          >
            <AvatarGroup max={4}>
              {groupChat.members.map((member) => (
                <Avatar />
              ))}
            </AvatarGroup>
            <Typography>{groupChat.name}</Typography>
            <Typography>{groupChat.message}</Typography>
            <Typography>{groupChat.sentTime}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
