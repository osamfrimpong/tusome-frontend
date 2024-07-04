import React, { useState, useEffect } from "react";
import { useDB } from "./IndexedDB"; // Assuming IndexedDB context is exported as useDB

const TokenManager = ({ children }) => {
  const db = useDB(); // Accessing IndexedDB context
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      if (db) {
        try {
          const tx = db.transaction("tokens", "readonly");
          const store = tx.objectStore("tokens");
          const token = await store.get("authToken");

          if (token) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error("Error checking token:", error);
        }
      }
    };

    checkToken();
  }, [db]);

  const handleLogout = () => {
    if (db) {
      const tx = db.transaction("tokens", "readwrite");
      const store = tx.objectStore("tokens");
      store
        .clear()
        .then(() => {
          setIsLoggedIn(false);
        })
        .catch((error) => {
          console.error("Error clearing token:", error);
        });
    }
  };

  return children({ isLoggedIn, handleLogout });
};

export default TokenManager;
