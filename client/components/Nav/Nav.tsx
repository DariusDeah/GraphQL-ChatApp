import { GridOn } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Login_Status_Time_Range } from "../../config";
import { state } from "../../MockState";
import NavItem from "../NavItems/NavItems";

type Props = {};

const navItems = [
  {
    name: "Home",
    img: "https://cdn-icons-png.flaticon.com/512/8026/8026483.png",
    linkTo: "/",
  },
  {
    name: "About",
    img: "https://cdn-icons-png.flaticon.com/512/7951/7951666.png",
    linkTo: "/about",
  },
  {
    name: "Chat",
    img: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    linkTo: "/Chat",
  },
];

function Nav({}: Props) {
  const user = state.account;
  return (
    <AppBar
      style={{
        backgroundColor: "white",
        color: "black",
        height: "fit-content",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <MenuItem>
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733583.png"
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
          <Typography variant="h4">ChatMe</Typography>
        </MenuItem>

        <MenuItem>
          {navItems.map((item, key) => (
            <MenuItem key={key}>
              <NavItem
                name={item.name}
                img={item.img}
                locationLink={item.linkTo}
              />
            </MenuItem>
          ))}
        </MenuItem>

        <MenuItem
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "20%",
          }}
        >
          {user.lastLoginAt >= Login_Status_Time_Range ? (
            <Button style={{ backgroundColor: "#ecfefa", color: "green" }}>
              Online
            </Button>
          ) : (
            <Button style={{ backgroundColor: "#EDCBCA", color: "red" }}>
              Offline
            </Button>
          )}
          <Avatar src={user.photo} />
          <p> {user.name}</p>
        </MenuItem>
      </div>
    </AppBar>
  );
}

export default Nav;
