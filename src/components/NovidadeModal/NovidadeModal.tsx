import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface NovidadeModal {
  isVisible: boolean;
  onClose: () => void;
}

const PanicModal: React.FC<NovidadeModal> = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Novidade em breve!</Text>
          <Text style={styles.modalMessage}>
            Estamos trabalhando duro para trazer essa funcionalidade para você.
            Fique ligado para atualizações futuras!
          </Text>
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PanicModal;
