import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NovidadeModal from "../../components/NovidadeModal/NovidadeModal";
import { RootStackParamList } from "../../types/navigation";
import { navegarParaLogin } from "./helpers";
import styles from "./styles";

type TelaInicialNavigationProp = StackNavigationProp<
  RootStackParamList,
  "TelaInicial"
>;

const TelaInicial: React.FC = () => {
  const navigation = useNavigation<TelaInicialNavigationProp>();

  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: Platform.OS === "android" ? 0 : StatusBar.currentHeight,
        }}
      >
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../assets/imgs/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>Mind Clear</Text>
          </View>

          <View style={styles.illustrationContainer}>
            <Image
              source={require("../../../assets/imgs/background-illustration.png")}
              style={styles.backgroundIllustration}
            />
            <Image
              source={require("../../../assets/imgs/illustration.png")}
              style={styles.illustration}
            />
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navegarParaLogin(navigation)}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>Continuar com Email</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.skipText}>
                Quer pular esta etapa?{" "}
                <Text style={styles.skipLink}>Pular</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <NovidadeModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default TelaInicial;
