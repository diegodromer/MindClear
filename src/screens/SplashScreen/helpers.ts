import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";

export const redirecionarUsuario = (
  navigation: NavigationProp<RootStackParamList>,
  isLoggedOut: boolean,
  user: any
) => {
  if (isLoggedOut) {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  } else if (user) {
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  } else {
    navigation.reset({
      index: 0,
      routes: [{ name: "TelaInicial" }],
    });
  }
};
