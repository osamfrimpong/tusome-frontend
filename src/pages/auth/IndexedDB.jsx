import React, { createContext, useContext, useEffect, useState } from "react";
import { openDB } from "idb";

const IndexedDBContext = createContext(null);

export const useIndexedDB = () => {
  return useContext(IndexedDBContext);
};

const IndexedDB = ({ children }) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initDB = async () => {
      const database = await openDB("my-database", 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains("tokens")) {
            db.createObjectStore("tokens", { keyPath: "email" });
          }
        },
      });
      setDb(database);
    };

    initDB();
  }, []);

  return (
    <IndexedDBContext.Provider value={db}>{children}</IndexedDBContext.Provider>
  );
};

export default IndexedDB;
