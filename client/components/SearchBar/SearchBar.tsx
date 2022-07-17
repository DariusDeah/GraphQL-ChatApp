import { SearchOffRounded, SearchRounded } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import React from "react";

type Props = {
  onChange?: (value: any) => void;
};

function SearchBar({ onChange }: Props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: ".7rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <SearchRounded />
      <TextField
        variant="standard"
        placeholder="Search..."
        fullWidth
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
