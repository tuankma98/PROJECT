import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Link from "@mui/material/Link";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton button component={Link} href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Trang chủ" />
    </ListItemButton>
    <ListItemButton button component={Link} href="/courses">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Khóa học" />
    </ListItemButton>
    <ListItemButton button component={Link} href="/blog">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Bài viết" />
    </ListItemButton>
    <ListItemButton button component={Link} href="/about-us">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Giới thiệu" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Chương trình khác" />
    </ListItemButton> */}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      More info
    </ListSubheader> */}
    <ListItemButton button component={Link} href="/create-blog">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Tạo bài viết" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);
