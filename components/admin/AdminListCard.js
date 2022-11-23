import * as React from "react";
import Paper from "@mui/material/Paper";
import MediaCard from "./AdminMediaCard";

function AdminListCard() {
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "row", gap: "10px" }}>
      <MediaCard />
    </Paper>
  );
}

export default AdminListCard;
