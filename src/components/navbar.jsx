import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Badge,
  InputBase
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: "linear-gradient(90deg, #0f4c75, #3282b8)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Left - Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocalHospitalIcon sx={{ fontSize: 30 }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            CityCare Hospital
          </Typography>
        </Box>

        {/* Center - Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f1f3f4",
            padding: "4px 12px",
            borderRadius: "30px",
            width: "40%",
          }}
        >
          <SearchIcon sx={{ color: "gray", mr: 1 }} />
          <InputBase
            placeholder="Search patients, doctors..."
            sx={{ flex: 1 }}
          />
        </Box>

        {/* Right - Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Avatar
            alt="Doctor"
            src="https://i.pravatar.cc/40"
            sx={{ width: 36, height: 36 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;