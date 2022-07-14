import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type NavItemProps = {
  name: string;
  img: string;
  locationLink: string;
};

function NavItem({ name, img, locationLink }: NavItemProps) {
  return (
    <Link href={locationLink}>
      <div
        style={{
          textAlign: "center",
          padding: "0 2rem  0 2rem",
        }}
      >
        <img src={img} alt="" style={{ height: "1.7rem", width: "1.7rem" }} />
        <Typography>{name}</Typography>
      </div>
    </Link>
  );
}

export default NavItem;
