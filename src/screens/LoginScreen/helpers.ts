import { Alert } from "react-native";

export const validateInputs = (email: string, password: string): boolean => {
  if (!email.trim() || !password.trim()) {
    Alert.alert("Erro", "Por favor, preencha todos os campos.");
    return false;
  }
  return true;
};
