import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { userLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  // request interceptor to add authorization header for every secure call to teh api
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await userLogout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [userLogout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
