import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("/api/restaurants");

        // const response = await axios.get("http://localhost:5000/api/restaurants");
        
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <DataContext.Provider value={{ restaurants }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;






