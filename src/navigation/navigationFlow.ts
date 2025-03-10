import { NavigationProp } from "@react-navigation/native";
import { RootState } from "../store/store";
import { RootStackParamList } from "../types/navigation";

type NavigationFlowProps = {
  navigation: NavigationProp<RootStackParamList>;
  state: RootState["user"];
};

export const handleNavigationFlow = ({ navigation, state }: NavigationFlowProps) => {
  const { user, isLoggedOut } = state;

  if (isLoggedOut) {
    if (navigation.getState().routes[0]?.name !== "Login") {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
    return;
  }

  if (user) {
    if (navigation.getState().routes[0]?.name !== "Main") {
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    }
    return;
  }

  if (navigation.getState().routes[0]?.name !== "TelaInicial") {
    navigation.reset({
      index: 0,
      routes: [{ name: "TelaInicial" }],
    });
  }
};
