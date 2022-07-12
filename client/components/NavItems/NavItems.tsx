import { Typography } from "@mui/material";
import React from "react";

type NavItemProps = {
  name: string;
  img: string;
};

function NavItem({ name, img }: NavItemProps) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "0 2rem  0 2rem",
      }}
    >
      <img src={img} alt="" style={{ height: "1.7rem", width: "1.7rem" }} />
      <Typography>{name}</Typography>
    </div>
  );
}

export default NavItem;
