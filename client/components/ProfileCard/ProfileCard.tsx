import { Avatar, AvatarGroup, Button, Card, Typography } from "@mui/material";
import React from "react";
import FeedItem from "../FeedItem/FeedItem";

type Props = {
  userData: {
    name: string;
    email: string;
    photo?: string;
    friends?: string[];
    bio: string;
  };
};

function ProfileCard({ userData }: Props) {
  return (
    <Card>
      <div style={{ padding: "0.5rem" }}>
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
          {userData.photo && (
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
          )}
          <Typography variant="h4">{userData.name}</Typography>
          <div
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            <Typography variant="h5">Friends</Typography>
            {userData.friends ? (
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
            ) : (
              <Typography>No Friends Found </Typography>
            )}
          </div>
          <div
            style={{
              marginTop: "1rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <Typography variant="h5">Bio:</Typography>
            {userData.bio ? (
              <Typography variant="body1">{userData.bio}</Typography>
            ) : (
              <Typography>{userData.name} has no bio yet </Typography>
            )}
          </div>
          {/* only show on non current user device */}
          <Button variant="outlined">Chat With Me!</Button>
        </div>
      </div>
    </Card>
  );
}

export default ProfileCard;
