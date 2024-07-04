import React, { useEffect, useState, createContext, useContext } from "react";
import { openDB } from "idb";

const DBContext = createContext();

export const useDB = () => {
  return useContext(DBContext);
};

const IndexedDB = ({ children }) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initDB = async () => {
      try {
        const database = await openDB("MyDatabase", 1, {
          upgrade(db) {
            if (!db.objectStoreNames.contains("tokens")) {
              db.createObjectStore("tokens");
            }
          },
        });
        setDb(database);
      } catch (error) {
        console.error("Failed to open DB", error);
      }
    };

    initDB();
  }, []);

  return <DBContext.Provider value={db}>{children}</DBContext.Provider>;
};

export default IndexedDB;
