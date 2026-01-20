import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface SidebarItemProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  icon,
  onClick,
  selected,
  disabled,
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick} selected={selected} disabled={disabled}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
