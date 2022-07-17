import { Avatar, AvatarGroup, Button, Typography } from "@mui/material";
import React from "react";
import FeedItemCard from "../FeedItemCard/FeedItemCard";

type Props = {
  userData: {
    name: string;
    email: string;
    photo: string;
    mesagesSent: number;
    friends: string[];
  };
};

function ProfileCard({ userData }: Props) {
  return (
    <FeedItemCard title="Profile">
      <div style={{ padding: "0rem" }}>
        <img
          style={{
            objectFit: "fill",
            width: "100%",
            height: "20vh",
            borderRadius: "0.5rem",
          }}
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt=""
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar
            sx={{
              width: "7rem",
              height: "7rem",
              marginTop: "-4rem",
              borderRadius: "100%",
              border: "solid 0.5rem white",
            }}
            src={userData.photo}
          />
          <Typography variant="h4">{userData.name}</Typography>
          <div
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            <Typography variant="h5">Friends</Typography>
            <AvatarGroup max={userData.friends.length}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </div>
          <div
            style={{
              marginTop: "1rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <Typography variant="h5">Messages Sent</Typography>
            <Typography variant="body1">{userData.mesagesSent}</Typography>
          </div>
          {/* only show on non current user device */}
          <Button variant="outlined">Chat With Me!</Button>
        </div>
      </div>
    </FeedItemCard>
  );
}

export default ProfileCard;
