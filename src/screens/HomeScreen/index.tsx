import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import PanicButton from "../../components/PanicButton/PanicButton";
import { useHomeScreenLogic } from "../../hooks/useHomeScreenLogic";
import { syncTimerPeriodically } from "../../store/slices/timerSlice";
import styles from "./styles";

const HomeScreen: React.FC = () => {
  const {
    timer,
    handleReset,
    handlePromessa,
    handleMeditar,
    isLoaded,
    recoveryProgress,
    challengeProgress,
  } = useHomeScreenLogic();

  const dispatch = useDispatch();

  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timer || {};

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(syncTimerPeriodically());
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch]);

  // Função para exibir o alerta
  const showAlert = () => {
    Alert.alert(
      "Novidade em breve!",
      "Estamos trabalhando duro para trazer essa funcionalidade para você. Fique ligado para atualizações futuras!",
      [{ text: "OK", style: "default" }],
      { cancelable: true }
    );
  };

  if (!isLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color="#3F5EF6" />
          <Text style={styles.spinnerText}>Carregando...</Text>
        </View>
      </View>
    );
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground
        source={require("../../../assets/imgs/backgroundd.png")}
        style={styles.background}
      >
        <SafeAreaView style={styles.container}>
          <View
            style={[
              styles.header,
              {
                paddingTop:
                  Platform.OS === "android" ? StatusBar.currentHeight : 16,
              },
            ]}
          >
            <View style={styles.headerContent}>
              <Image
                source={require("../../../assets/imgs/brain.png")}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.logoText}>Mind Clear</Text>
            </View>
          </View>

          {/* Timer */}
          <View style={styles.timerContainer}>
            <Image
              source={require("../../../assets/imgs/young.png")}
              style={styles.timerImage}
              resizeMode="contain"
            />
            <Text style={styles.timerTitle}>
              Você está livre de pornografia por:
            </Text>
            <Text style={styles.timerDays}>{days} dias</Text>
            <Text style={styles.timerHours}>
              {`${hours}h ${minutes}m ${seconds}s`}
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handlePromessa}
            >
              <Image
                source={require("../../../assets/imgs/hand.png")}
                style={styles.buttonIcon}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>Promessa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleMeditar}
            >
              <Image
                source={require("../../../assets/imgs/clock.png")}
                style={styles.buttonIcon}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>Meditar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={handleReset}>
              <Image
                source={require("../../../assets/imgs/reset.png")}
                style={styles.buttonIcon}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>Resetar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressItem}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressLabel}>Recuperação Cerebral</Text>
                <Text style={styles.progressPercentage}>
                  {recoveryProgress.toFixed(2)}%
                </Text>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${recoveryProgress}%` },
                  ]}
                />
              </View>
            </View>

            <View style={styles.progressItem}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressLabel}>Desafio 28 dias</Text>
                <Text style={styles.progressPercentage}>
                  {challengeProgress.toFixed(2)}%
                </Text>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${challengeProgress}%` },
                  ]}
                />
              </View>
            </View>
          </View>

          <PanicButton />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;
