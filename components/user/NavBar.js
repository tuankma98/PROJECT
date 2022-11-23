import * as React from "react";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import { mainListItems, secondaryListItems } from "./ListMenu"

function NavBar() {
  return (
    <List component="nav">
      {mainListItems}
      <Divider sx={{ my: 1 }} />
      {secondaryListItems}
    </List>
  );
}

export default NavBar