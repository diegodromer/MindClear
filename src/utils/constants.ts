import { Platform } from "react-native";

const LOCAL_IP = "192.168.0.104";

export const BASE_URL =
  Platform.OS === "android"
    ? "http://10.0.2.2:3000/api/users"
    : `http://${LOCAL_IP}:3000/api/users`; 
