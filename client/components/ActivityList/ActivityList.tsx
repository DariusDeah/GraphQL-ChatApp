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
import { ChatRounded } from "@mui/icons-material";

type Props = {
  children?: React.ReactElement | Array<React.ReactElement>;
  activites: string[];
};

function ActivityList({ children, activites }: Props) {
  return (
    <FeedItemCard title="Activity">
      <List>
        {activites.map((activity, key) => (
          <>
            <Typography
              variant="body1"
              display="flex"
              marginY={4}
              alignItems="start"
              paddingX={1}
              justifyContent="space-around"
              key={key}
              width="100%"
            >
              {activity.includes("message") ? <MarkChatUnreadIcon /> : ""}
              {activity.includes("conversation") ? <ChatRounded /> : ""}
              {activity.includes("join") ? <GroupAddIcon /> : ""}
              {activity.includes("promote") ? <MovingIcon /> : ""}
              {activity}
            </Typography>
            <Divider key={key} />
          </>
        ))}
      </List>
    </FeedItemCard>
  );
}

export default ActivityList;
