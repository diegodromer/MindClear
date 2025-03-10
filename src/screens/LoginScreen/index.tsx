import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import NovidadeModal from "../../components/NovidadeModal/NovidadeModal";
import { loginUserAsync } from "../../store/slices/userSlice";
import { AppDispatch } from "../../store/store";
import { validateInputs } from "./helpers";
import styles from "./styles";

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!validateInputs(email, password)) {
      Alert.alert("Erro", "Por favor, preencha todos os campos corretamente.");
      return;
    }
    try {
      setLoading(true);

      await dispatch(loginUserAsync({ email, password })).unwrap();

      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    } catch (error: any) {
      console.error("[LoginScreen] Erro ao fazer login:", error);

      Alert.alert(
        "Erro",
        error || "Não foi possível conectar ao servidor. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../assets/imgs/brain.png")}
              style={styles.brainLogo}
              accessibilityLabel="Mind Clear logo"
            />
            <Text style={styles.logoText}>Mind Clear</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Bem-vindo de volta</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o seu email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#666"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.loginButtonText}>
              {loading ? "Carregando..." : "Fazer Login"}
            </Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Ainda não tem conta? </Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.registerLink}>Fazer Cadastro</Text>
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
