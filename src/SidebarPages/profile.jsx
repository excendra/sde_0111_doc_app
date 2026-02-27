


import { Box, Typography, Card, CardContent, Grid, Avatar, Paper } from "@mui/material";

function Profile() {
  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Admin Info Card */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar sx={{ width: 60, height: 60 }}>
            A
          </Avatar>
          <Box>
            <Typography variant="h6">Admin User</Typography>
            <Typography variant="body2" color="text.secondary">
              admin@hospital.com
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Stats Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Patients</Typography>
              <Typography variant="h4">1,245</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Doctors</Typography>
              <Typography variant="h4">85</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pending Appointments</Typography>
              <Typography variant="h4">12</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;