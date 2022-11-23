import * as React from "react";
import Paper from "@mui/material/Paper";
import MediaCard from "./MediaCard";

function ListCard() {
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "row", gap: "10px" }}>
      <MediaCard />
    </Paper>
  );
}

export default ListCard;
