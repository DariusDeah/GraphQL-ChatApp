import { Avatar, Card, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import FeedItemCard from "../FeedItemCard/FeedItemCard";

type Props = {};

function ProfileCard({}: Props) {
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
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          />
          <Typography variant="h4">Josh Hayward</Typography>
        </div>
      </div>
    </FeedItemCard>
  );
}

export default ProfileCard;
