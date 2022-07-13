import { Card, Avatar, Typography, Paper, Grid } from "@mui/material";
import React from "react";
import FeedItemCard from "../FeedItemCard/FeedItemCard";

type Props = {};

function ActivityList({}: Props) {
  return (
    <FeedItemCard title="Activity">
      <ul>
        <li>something</li>
        <li>something</li>
        <li>something</li>
        <li>something</li>
      </ul>
    </FeedItemCard>
  );
}

export default ActivityList;
