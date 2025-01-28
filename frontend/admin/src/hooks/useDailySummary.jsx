import { useState, useEffect } from "react";
import summary from "../api/summary.js";

export const useDailySummary = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await summary.getDailySummary();
        
          setData(response);
        } catch (err) {
          setError(err);
          console.error("Error fetching summary data:", err);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return { data, isLoading, error };
};