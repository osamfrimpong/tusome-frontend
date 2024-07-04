import React, { useEffect, useState } from "react";
import { openDB } from "idb";

const IndexedDB = ({ children }) => {
  const [db, setDB] = useState(null);

  useEffect(() => {
    const initializeDB = async () => {
      try {
        const instance = await openDB("auth", 1, {
          upgrade(db) {
            db.createObjectStore("tokens");
          },
        });
        setDB(instance);
      } catch (error) {
        console.error("Failed to initialize IndexedDB", error);
      }
    };

    initializeDB();
  }, []);

  return db ? React.cloneElement(children, { db }) : null;
};

export default IndexedDB;
