import { useState, useEffect } from "react";
import { openDB } from "idb";

export const useIndexedDB = (storeName, key) => {
  const [storedValue, setStoredValue] = useState(null);
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initDB = async () => {
      try {
        const database = await openDB("MyDatabase", 1, {
          upgrade(db) {
            if (!db.objectStoreNames.contains(storeName)) {
              db.createObjectStore(storeName);
            }
          },
        });
        console.log("Database initialized:", database);
        setDb(database);
      } catch (error) {
        console.error("Failed to open DB", error);
      }
    };

    initDB();
  }, [storeName]);

  useEffect(() => {
    const fetchValue = async () => {
      if (db) {
        const value = await db.get(storeName, key);
        console.log(`Fetched value from ${storeName} with key ${key}:`, value);
        setStoredValue(value);
      }
    };

    fetchValue();
  }, [db, storeName, key]);

  const setValue = async (value) => {
    if (db) {
      await db.put(storeName, value, key);
      console.log(`Stored value in ${storeName} with key ${key}:`, value);
      setStoredValue(value);
    }
  };

  return [storedValue, setValue];
};
