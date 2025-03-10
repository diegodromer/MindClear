import { NavigationProp } from "@react-navigation/native";
import { clearUserAsync } from "../../store/slices/userSlice";
import { AppDispatch } from "../../store/store";

export const handleLogout = async (
  navigation: NavigationProp<any>,
  dispatch: AppDispatch
) => {
  try {
    await dispatch(clearUserAsync()).unwrap();
    navigation.reset({ index: 0, routes: [{ name: "Login" }] });
  } catch (error) {
    console.error("[SettingsScreen] Erro ao fazer logout:", error);
  }
};
