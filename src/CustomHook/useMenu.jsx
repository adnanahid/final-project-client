import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    axios
      .get("http://localhost:5000/menu")
      .then((response) => {
        setMenu(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menu:", err);
        setError("Failed to load menu");
        setLoading(false);
      });
  }, []);

  return [menu, loading, error]; // Return error along with menu and loading state
};

export default useMenu;
