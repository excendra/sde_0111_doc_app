// import { createContext, useState } from "react";
// import users from "../data/user";

// export const AuthContext = createContext();

// function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = (email, password) => {
//     const foundUser = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (foundUser) {
//       setIsLoggedIn(true);
//       return true;
//     }

//     return false;
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthProvider;






import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Get users from localStorage
  const getStoredUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };

  // Save users to localStorage
  const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  // Restore login on refresh
//   useEffect(() => {
//     const storedUser = localStorage.getItem("currentUser");

//     if (storedUser) {
//       setIsLoggedIn(true);
//       setCurrentUser(JSON.parse(storedUser));
//     }
//   }, []);




  const signup = (email, password) => {
    const users = getStoredUsers();

    const userExists = users.find((user) => user.email === email);
    if (userExists) return false;

    const newUser = { email, password };
    const updatedUsers = [...users, newUser];

    saveUsers(updatedUsers);

    setIsLoggedIn(true);
    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    return true;
  };

  const login = (email, password) => {
    const users = getStoredUsers();

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) return false;

    setIsLoggedIn(true);
    setCurrentUser(foundUser);
    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    return true;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  // this is something   

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, currentUser, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;