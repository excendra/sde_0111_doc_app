import { Drawer, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component={Link} to="/profile">
          <ListItemText primary="admin"/>
        </ListItemButton>

        <ListItemButton component={Link} to="/Dashboard">
          <ListItemText primary="Dashboard"/>
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Sidebar;
export { drawerWidth };