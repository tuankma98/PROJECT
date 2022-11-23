import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Link from "@mui/material/Link";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton button component={Link} href="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Trang chủ" />
    </ListItemButton>
    <ListItemButton button component={Link} href="/admin/courses">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Đăng khóa học" />
    </ListItemButton>
    <ListItemButton button component={Link} href="/admin">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Đăng bài viết" />
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
    <ListItemButton button component={Link} href="/admin/teachers">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Tất cả giáo viên" />
    </ListItemButton>
    <ListItemButton button component={Link} href="/admin/create-teacher">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Tạo giáo viên" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);

export const thirdListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      More info
    </ListSubheader> */}
    <ListItemButton button component={Link} href="/admin/my-courses">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Khóa học của tôi" />
    </ListItemButton>
    <ListItemButton button component={Link} href="/admin/students">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Tất cả sinh viên" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);