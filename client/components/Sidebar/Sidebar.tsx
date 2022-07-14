import { MessageRounded } from "@mui/icons-material";
import { AvatarGroup, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";
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
];
function Sidebar({}: Props) {
  return (
    <Paper
      style={{ backgroundColor: "white", padding: "1rem", maxHeight: "100vh" }}
    >
      <div>
        <h1>Messages</h1>
        <SearchBar />
      </div>

      <div>
        <Typography variant="h5">Chats</Typography>
        {avatars.map((avatar, key) => (
          <div
            style={{
              padding: "1rem",
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
          </div>
        ))}
      </div>

      <div>
        <Typography variant="h5">Groups</Typography>
        {GroupChats.map((groupChat) => (
          <div
            style={{
              padding: "1rem",
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
    </Paper>
  );
}

export default Sidebar;
