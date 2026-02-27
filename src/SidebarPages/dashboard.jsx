import { Typography, Box, Paper } from "@mui/material";

function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography>
          This is the main content area of your dashboard.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Dashboard;