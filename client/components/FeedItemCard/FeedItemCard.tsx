import { Typography, Grid, Paper } from "@mui/material";
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
      <Grid justifyContent="center" alignItems="center" maxWidth={350}>
        <Paper
          style={{
            padding: "0.7rem",
          }}
        >
          {children}
        </Paper>
      </Grid>
    </>
  );
}

export default FeedItemCard;
