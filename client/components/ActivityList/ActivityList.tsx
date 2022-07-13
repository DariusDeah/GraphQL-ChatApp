import {
  Card,
  Avatar,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import React from "react";
import FeedItemCard from "../FeedItemCard/FeedItemCard";

type Props = {
  children?: React.ReactElement | Array<React.ReactElement>;
  activites: string[];
};

function ActivityList({ children, activites }: Props) {
  return (
    <FeedItemCard title="Activity">
      <List>
        {activites.map((activity) => (
          <>
            <Typography variant="body1" padding={2}>
              {activity}
            </Typography>
            <Divider />
          </>
        ))}
      </List>
    </FeedItemCard>
  );
}

export default ActivityList;
