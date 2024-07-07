import { useState, useEffect, createContext, useContext } from "react";
import { useIndexedDB } from "./IndexedDB";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [storedUser, setStoredUser] = useIndexedDB("auth", "user");

  useEffect(() => {
    if (storedUser) {
      setUser(storedUser);
    }
  }, [storedUser]);

  const login = (userData) => {
    setUser(userData);
    setStoredUser(userData);
  };

  const logout = () => {
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
