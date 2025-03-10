import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";

export const navegarParaLogin = (navigation: StackNavigationProp<RootStackParamList>) => {
  navigation.navigate("Login");
};

export const pularEtapaInicial = (navigation: StackNavigationProp<RootStackParamList>) => {
  navigation.navigate("Main");
};
