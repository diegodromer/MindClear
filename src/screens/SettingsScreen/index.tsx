import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { handleLogout } from "./helpers";
import styles from "./styles";

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require("../../../assets/imgs/backgroundd.png")}
        style={styles.container}
      >
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: Platform.OS === "android" ? 0 : StatusBar.currentHeight,
          }}
        >
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../../../assets/imgs/brain.png")}
                style={styles.logo}
              />
              <Text style={styles.logoText}>Mind Clear</Text>
            </View>
          </View>

          {/* Conteúdo Principal */}
          <View style={styles.mainContent}>
            <Image
              source={require("../../../assets/imgs/logo.png")}
              style={styles.profileImage}
            />
            <View style={styles.textAndButtonContainer}>
              {/* Informações do Usuário */}
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>
                  {user?.name ?? "Usuário"}
                </Text>
                <Text style={styles.profileEmail}>
                  {user?.email ?? "Email não disponível"}
                </Text>
              </View>

              {/* Botão de Logout */}
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => handleLogout(navigation, dispatch)}
              >
                <Image
                  source={require("../../../assets/imgs/logout-icon.png")}
                  style={styles.logoutIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default SettingsScreen;
