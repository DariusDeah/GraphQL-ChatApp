import { Avatar, Card, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import FeedItemCard from "../FeedItemCard/FeedItemCard";

type Props = {};

function ProfileCard({}: Props) {
  return (
    <FeedItemCard title="Profile">
      <Avatar />
      {/* <Typography>My Name</Typography> */}
    </FeedItemCard>
  );
}

export default ProfileCard;
