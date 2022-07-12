import { AppBar, Avatar, MenuItem, Typography } from "@mui/material";
import React from "react";
import NavItem from "../NavItems/NavItems";

type Props = {};

const navItems = [
  {
    name: "Home",
    img: "https://cdn-icons-png.flaticon.com/512/8026/8026483.png",
  },
  {
    name: "About",
    img: "https://cdn-icons-png.flaticon.com/512/7951/7951666.png",
  },
  {
    name: "Chat",
    img: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
  },
];

function Nav({}: Props) {
  return (
    <AppBar
      style={{
        padding: ".3rem",
        backgroundColor: "white",
        color: "black",
        width: "100",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733583.png"
          alt=""
          style={{ height: "4rem", width: "4rem" }}
        />
        <MenuItem style={{}}>
          {navItems.map((item) => (
            <NavItem name={item.name} img={item.img} />
          ))}
        </MenuItem>
        <MenuItem>
          <Avatar src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
          <p> {""} Josh Hayward</p>
        </MenuItem>
      </div>
    </AppBar>
  );
}

export default Nav;
