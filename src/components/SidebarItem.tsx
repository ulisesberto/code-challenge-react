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
    <ListItem disablePadding sx={{ mb: 0.5 }}>
      <ListItemButton
        onClick={onClick}
        selected={selected}
        disabled={disabled}
        sx={{
          borderRadius: "0 24px 24px 0",
          mr: 1,
          "&.Mui-selected": {
            bgcolor: "rgba(0, 163, 255, 0.08)",
            color: "primary.main",
            "& .MuiListItemIcon-root": {
              color: "primary.main",
            },
            "&:hover": {
              bgcolor: "rgba(0, 163, 255, 0.12)",
            },
          },
          "& .MuiListItemText-primary": {
            fontWeight: selected ? 600 : 400,
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 40 }}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
