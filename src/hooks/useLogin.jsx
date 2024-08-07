/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

// custom hooks agar bisa reusable
export const useLogin = () => {
  const [username, setUsername] = useState("");

  // memaksa ke login ketika tidak ada token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/";
    }
  }, []);

  return username;
};
