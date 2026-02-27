// import { Drawer, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
// import { Link } from "react-router-dom";

// const drawerWidth = 240;

// function Sidebar() {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//       }}
//     >
//       <Toolbar />

//       <List>
//         <ListItemButton component={Link} to="/">
//           <ListItemText primary="Home" />
//         </ListItemButton>

//         <ListItemButton component={Link} to="/profile">
//           <ListItemText primary="admin"/>
//         </ListItemButton>

//         <ListItemButton component={Link} to="/Dashboard">
//           <ListItemText primary="Dashboard"/>
//         </ListItemButton>

//         <ListItemButton component={Link} to="/Patient">
//           <ListItemText primary="Patient"/>
//         </ListItemButton> 

//         <ListItemButton component={Link} to="/Doctor">
//           <ListItemText primary="Doctor"/>
//         </ListItemButton> 

//          <ListItemButton component={Link} to="/Appointments">
//           <ListItemText primary="Appointments"/>
//         </ListItemButton> 

//           <ListItemButton component={Link} to="/Calendar">
//           <ListItemText primary="Calendar

// "/>
//         </ListItemButton> 
        

//       </List>
//     </Drawer>
//   );
// }

// export default Sidebar;
// export { drawerWidth };




import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Admin", icon: <AdminPanelSettingsIcon />, path: "/profile" },
    { text: "Dashboard", icon: <DashboardIcon />, path: "/Dashboard" },
    { text: "Patient", icon: <PeopleIcon />, path: "/Patient" },
    { text: "Doctor", icon: <MedicalServicesIcon />, path: "/Doctor" },
    { text: "Appointments", icon: <EventNoteIcon />, path: "/Appointments" },
    { text: "Calendar", icon: <CalendarMonthIcon />, path: "/Calendar" },
    { text: "Settings", icon: <SettingsIcon />, path: "/Settings" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#f8fbff",
          borderRight: "1px solid #e0e0e0",
        },
      }}
    >
      <Toolbar />

      {/* Sidebar Title */}
      <Box sx={{ px: 3, py: 2 }}>
        <Typography
          variant="subtitle2"
          sx={{ color: "gray", letterSpacing: 1 }}
        >
          HOSPITAL MENU
        </Typography>
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              mx: 1,
              borderRadius: 2,
              mb: 0.5,
              "&.Mui-selected": {
                backgroundColor: "#e3f2fd",
                color: "#1976d2",
              },
              "&:hover": {
                backgroundColor: "#eef6ff",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  location.pathname === item.path ? "#1976d2" : "inherit",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight:
                  location.pathname === item.path ? 600 : 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
export { drawerWidth };