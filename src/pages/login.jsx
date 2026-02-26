
// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Paper,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// function Login() {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     const success = login(email, password);

//     if (success) {
//       navigate("/profile");
//       alert("done")
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" mt={8}>
//       <Paper sx={{ p: 4, width: 400, position: "relative" }}>

//         {/* Close Button */}
//         <IconButton
//           onClick={() => navigate("/")}
//           sx={{ position: "absolute", top: 8, right: 8 }}
//         >
//           <CloseIcon />
//         </IconButton>

//         <Typography variant="h5" gutterBottom>
//           Login
//         </Typography>

//         <TextField
//           fullWidth
//           label="Email"
//           margin="normal"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <TextField
//           fullWidth
//           label="Password"
//           type="password"
//           margin="normal"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <Button fullWidth variant="contained" onClick={handleLogin}>
//           Login
//         </Button>
//       </Paper>
//     </Box>
//   );
// }

// export default Login;





import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(email, password);

    if (success) {
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Paper sx={{ p: 4, width: 400, position: "relative" }}>

        {/* Close Button */}
        <IconButton
          onClick={() => navigate("/")}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>

        {/* Signup Link */}
        <Typography variant="body2" mt={2}>
          Don’t have an account?{" "}
          <Link to="/signup">Sign up</Link>
        </Typography>

      </Paper>
    </Box>
  );
}

export default Login;