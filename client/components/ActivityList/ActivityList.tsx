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
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MovingIcon from "@mui/icons-material/Moving";

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
            <Typography
              variant="body1"
              padding={2}
              display="flex"
              alignItems="start"
              paddingX={5}
            >
              {activity.includes("message") ? <MarkChatUnreadIcon /> : ""}
              {activity.includes("join") ? <GroupAddIcon /> : ""}
              {activity.includes("promote") ? <MovingIcon /> : ""}
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
