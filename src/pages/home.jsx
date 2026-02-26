import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
} from "@mui/material";

function Home() {
  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>
        Hospital Management System 
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Patients</Typography>
              <Typography variant="h4">1,245</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Doctors</Typography>
              <Typography variant="h4">85</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Appointments Today</Typography>
              <Typography variant="h4">54</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Available Beds</Typography>
              <Typography variant="h4">32</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>

        <Typography>
          • John Doe admitted to Cardiology Ward
        </Typography>
        <Typography>
          • Dr. Smith completed 5 surgeries today
        </Typography>
        <Typography>
          • Emergency case admitted at 10:45 AM
        </Typography>
      </Paper>
    </Box>
  );
}

export default Home;