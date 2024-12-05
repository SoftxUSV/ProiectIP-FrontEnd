import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const menuItems = [
    { text: "FACULTATI", icon: <AccountTreeIcon />, path: "/facultati", textColor: "black" }, 
    { text: "GRUPE", icon: <GroupIcon />, path: "/grupe", textColor: "black" },
    { text: "MATERIA", icon: <MenuBookIcon />, path: "/materia", textColor: "black" },
    { text: "CALENDAR", icon: <CalendarTodayIcon />, path: "/calendar", textColor: "black" },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              "&:hover": {
                backgroundColor: "#ced3d7",
              },
              border: "2px solid #00796b",
              borderRadius: "4px", 
            }}
          >
            <Link
              to={item.path}
              style={{
                textDecoration: "none", 
                display: "flex", 
                width: "100%", 
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  color: item.textColor, // Set custom text color
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
