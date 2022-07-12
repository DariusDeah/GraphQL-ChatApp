import { SearchOffRounded, SearchRounded } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";

type Props = {};

function SearchBar({}: Props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: ".7rem",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
      }}
    >
      <SearchRounded />
      <TextField variant="standard" placeholder="Search..." fullWidth />
    </div>
  );
}

export default SearchBar;
