import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./outs/layout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Dashboard from "./pages/dashboard";
 import Login from "./pages/login";
 import ProtectedRoute from "./routes/ProtectedRoute"

 import Signup from "./pages/signup";


function App() {
  return (

    // <BrowserRouter>
    //   <Routes>
        
    //      <Route path="/login" element={<Login />} />
         
    //     <Route element={<Layout />}>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/profile" element={<Profile />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //     </Route>

    //        <Route
    //     path="/profile"
    //     element={
    //       <ProtectedRoute>
    //         <Profile />
    //       </ProtectedRoute>
    //     }
    //   />
    //   </Routes>
    // </BrowserRouter>


    <BrowserRouter>

  <Routes>
    <Route path="/login" element={<Login />} />\
    <Route path="/signup" element={<Signup />} />

  
    <Route element={<Layout />}>

      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />

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