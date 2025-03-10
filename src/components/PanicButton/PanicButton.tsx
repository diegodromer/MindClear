import React, { useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import NovidadeModal from "../NovidadeModal/NovidadeModal";
import styles from "./styles";

const PanicButton: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.panicButton}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={require("../../../assets/imgs/alert.png")}
          style={styles.panicIcon}
          resizeMode="contain"
        />
        <Text style={styles.panicButtonText}>Botão de Pânico</Text>
      </TouchableOpacity>

      <NovidadeModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default PanicButton;
