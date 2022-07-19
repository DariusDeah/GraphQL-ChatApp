import { SearchOffRounded, SearchRounded } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import React, { FormEvent, useRef } from "react";

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: any;
};

function SearchBar({ onChange, onSubmit }: Props) {
  const searchRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!searchRef.current) {
      throw new Error("Search inputTypes  cannot be null");
    }

    onSubmit(searchRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
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
          id="search"
          variant="standard"
          placeholder="Search..."
          fullWidth
          inputRef={searchRef}
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}

export default SearchBar;
