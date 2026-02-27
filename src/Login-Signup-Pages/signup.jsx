import { useState, useContext } from "react";
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

function Signup() {
//   const { signup } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = () => {
//     if (!email || !password) {
//       alert("Please fill all fields");
//       return;
//     }

//     const success = signup(email, password);

//     if (success) {
//       navigate("/dashboard"); // after signup
//     } else {
//       alert("User already exists");
//     }
//   };


const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    const success = signup(email, password);

    if (!success) {
      alert("User already exists");
      return;
    }

    alert("Account created successfully");
    navigate("/login");
  };












  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Paper sx={{ p: 4, width: 300, position: "relative" }}>
        
        {/* Close Button */}
        <IconButton
          onClick={() => navigate("/")}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleSignup}
        >
          Create Account
        </Button>

        <Typography variant="body2" mt={2}>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Signup;