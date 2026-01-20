import React from "react";
import { Divider, List, Toolbar, Typography } from "@mui/material";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { SidebarItem } from "./SidebarItem";

import { useNavigate } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Educabot Admin
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <SidebarItem
          text="Dashboard"
          icon={<DashboardIcon />}
          disabled={true}
        />
        <SidebarItem
          text="Enrollments"
          icon={<PeopleIcon />}
          selected={true}
          onClick={() => navigate("/")}
        />
        <SidebarItem text="Settings" icon={<SettingsIcon />} disabled={true} />
      </List>
    </div>
  );
};
