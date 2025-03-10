import React from "react";
import { useAppDispatch } from "../store/hooks";
import { clearTokenAsync } from "../store/slices/authSlice";
import { clearUserAsync } from "../store/slices/userSlice";
const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(clearTokenAsync());
      await dispatch(clearUserAsync());
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
