import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./SidebarPages/home";
import Profile from "./SidebarPages/profile";
import Dashboard from "./SidebarPages/dashboard";
 import Login from "./Login-Signup-Pages/login";
 import ProtectedRoute from "./routes/ProtectedRoute"
 import Signup from "./Login-Signup-Pages/signup";
import { Doctor } from "./SidebarPages/Doctor";
import Patient from "./SidebarPages/Patient";
import Appointments from "./SidebarPages/Appointments";
import Calendar from "./SidebarPages/Calendar";
import Settings from "./SidebarPages/Settings";


function App() {
  return (



    <BrowserRouter>

  <Routes>
    <Route path="/login" element={<Login />} />\
    <Route path="/signup" element={<Signup />} />

  
    <Route element={<Layout />}>

      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/Patient" element={<Patient />} />
       <Route path="/Doctor" element={<Doctor />} />
       <Route path="/Appointments" element={<Appointments/>} />
      <Route path="/Calendar" element={<Calendar/>} />

        <Route path="/Settings" element={<Settings/>} />

      

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      /> 
    </Route>

  </Routes>
</BrowserRouter>
  );
}

export default App;