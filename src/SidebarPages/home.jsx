




// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Card,
//   CardContent,
// } from "@mui/material";

// import PeopleIcon from "@mui/icons-material/People";
// import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// import HotelIcon from "@mui/icons-material/Hotel";

// function StatCard({ title, value, icon, color }) {
//   return (
//     <Card
//       sx={{
//         borderRadius: 3,
//         boxShadow: 3,
//         transition: "0.3s",
//         "&:hover": {
//           transform: "translateY(-5px)",
//           boxShadow: 6,
//         },
//       }}
//     >
//       <CardContent>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Box>
//             <Typography variant="subtitle2" color="text.secondary">
//               {title}
//             </Typography>
//             <Typography variant="h4" fontWeight={600}>
//               {value}
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               backgroundColor: color,
//               color: "#fff",
//               p: 1.5,
//               borderRadius: 2,
//             }}
//           >
//             {icon}
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// }

// function Home() {
//   return (
//     <Box>
//       {/* Page Title */}
//       <Typography variant="h4" fontWeight={600} gutterBottom>
//         Hospital Management Dashboard
//       </Typography>

//       {/* Stats Cards */}
//       <Grid container spacing={3} mt={1}>
//         <Grid item xs={12} sm={6} md={3}>
//           <StatCard
//             title="Total Patients"
//             value="1,245"
//             icon={<PeopleIcon />}
//             color="#1976d2"
//           />
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <StatCard
//             title="Doctors"
//             value="85"
//             icon={<MedicalServicesIcon />}
//             color="#2e7d32"
//           />
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <StatCard
//             title="Appointments Today"
//             value="54"
//             icon={<EventAvailableIcon />}
//             color="#ed6c02"
//           />
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <StatCard
//             title="Available Beds"
//             value="32"
//             icon={<HotelIcon />}
//             color="#9c27b0"
//           />
//         </Grid>
//       </Grid>

//       {/* Recent Activity */}
//       <Paper
//         sx={{
//           p: 3,
//           mt: 4,
//           borderRadius: 3,
//           boxShadow: 2,
//         }}
//       >
//         <Typography variant="h6" fontWeight={600} gutterBottom>
//           Recent Activity
//         </Typography>

//         <Typography sx={{ mb: 1 }}>
//           • John Doe admitted to Cardiology Ward
//         </Typography>
//         <Typography sx={{ mb: 1 }}>
//           • Dr. Smith completed 5 surgeries today
//         </Typography>
//         <Typography>
//           • Emergency case admitted at 10:45 AM
//         </Typography>
//       </Paper>
//     </Box>
//   );
// }

// export default Home;





import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HotelIcon from "@mui/icons-material/Hotel";

function StatCard({ title, value, icon, color }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-4px)",
          transition: "0.3s",
        },
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h4" fontWeight={600}>
              {value}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: color,
              color: "#fff",
              p: 1.5,
              borderRadius: 2,
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

function Home() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Page Title */}
      <Typography variant="h4" fontWeight={600} mb={3}>
        Hospital Dashboard
      </Typography>

      {/* ================== STAT CARDS ================== */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Patients"
            value="1,245"
            icon={<PeopleIcon />}
            color="#1976d2"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Doctors"
            value="85"
            icon={<MedicalServicesIcon />}
            color="#2e7d32"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Appointments Today"
            value="54"
            icon={<EventAvailableIcon />}
            color="#ed6c02"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Available Beds"
            value="32"
            icon={<HotelIcon />}
            color="#9c27b0"
          />
        </Grid>
      </Grid>

      {/* ================== CHART SECTION ================== */}
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 2,
              height: 300,
            }}
          >
            <Typography variant="h6" mb={2}>
              Patient Growth (Monthly)
            </Typography>

            {/* Chart Placeholder */}
            <Box
              sx={{
                height: "80%",
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "gray",
              }}
            >Chart Area 
              
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 2,
              height: 300,
            }}
          >
            <Typography variant="h6" mb={2}>
              Bed Occupancy
            </Typography>

            <Box
              sx={{
                height: "80%",
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "gray",
              }}
            >
              Pie Chart Area
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* ================== RECENT PATIENTS TABLE ================== */}
      <Paper
        sx={{
          p: 3,
          mt: 4,
          borderRadius: 3,
          boxShadow: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Recent Admissions
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Department</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Admitted On</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Cardiology</TableCell>
              <TableCell>
                <Chip label="Admitted" color="success" />
              </TableCell>
              <TableCell>27 Feb 2026</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Sarah Lee</TableCell>
              <TableCell>Neurology</TableCell>
              <TableCell>
                <Chip label="Under Treatment" color="warning" />
              </TableCell>
              <TableCell>26 Feb 2026</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Michael Brown</TableCell>
              <TableCell>Orthopedics</TableCell>
              <TableCell>
                <Chip label="Discharged" color="primary" />
              </TableCell>
              <TableCell>25 Feb 2026</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default Home;