import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { RootStackParamList } from "../../types/navigation";
import styles from "./styles";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { user, isLoggedOut } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const redirecionarUsuario = () => {
      try {
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
      } catch (error) {
        console.error("[SplashScreen] Erro ao redirecionar usuário:", error);
      }
    };

    const timeout = setTimeout(redirecionarUsuario, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [user, isLoggedOut, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/imgs/brain.png")}
        style={styles.brainImage}
        accessibilityLabel="Logo do Mind Clear"
      />
    </View>
  );
};

export default SplashScreen;
