import { Typography, Grid } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  children: React.ReactElement | Array<React.ReactElement>;
};

function FeedItemCard({ title, children }: Props) {
  return (
    <>
      <Typography variant="h4" textAlign="center" width={300} marginY={3}>
        {title}
      </Typography>
      <Grid
        // display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="background.paper"
        padding={2}
        maxWidth={350}
        borderRadius={1}
      >
        {children}
      </Grid>
    </>
  );
}

export default FeedItemCard;
