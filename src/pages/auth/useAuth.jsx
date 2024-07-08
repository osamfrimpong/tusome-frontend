import { useState, useEffect, createContext, useContext } from "react";
import { useIndexedDB } from "./IndexedDB";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [storedUser, setStoredUser] = useIndexedDB("auth", "user");

  useEffect(() => {
    if (storedUser) {
      console.log("Setting user from storedUser:", storedUser);
      setUser(storedUser);
    }
  }, [storedUser]);

  const login = (userData) => {
    console.log("Logging in user:", userData);
    setUser(userData.user); // Assuming user data is nested under `user` key
    setStoredUser(userData.user);
  };

  const logout = () => {
    console.log("Logging out user");
    setUser(null);
    setStoredUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
