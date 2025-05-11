import { BooleanSetter } from "@common/types/SetStateType";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface LogOutModalProps {
  modalVisible: boolean;
  setModalVisible: BooleanSetter;
  handleExit: () => void;
}

const LogOutModal = (props: LogOutModalProps) => {
  const { modalVisible, setModalVisible, handleExit } = props;
  const styles = createStyles();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Confirmation</Text>
          <Text style={styles.modalMessage}>Do you really want to leave?</Text>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.confirmButton]}
              onPress={handleExit}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const createStyles = () =>
  StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      width: "80%",
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    modalMessage: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: "center",
    },
    modalButtonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    modalButton: {
      width: "45%",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    cancelButton: {
      backgroundColor: "#f5f5f5",
      borderWidth: 1,
      borderColor: "#ddd",
    },
    confirmButton: {
      backgroundColor: "#a04dae",
    },
    cancelButtonText: {
      color: "#333",
      fontWeight: "500",
    },
    confirmButtonText: {
      color: "white",
      fontWeight: "500",
    },
  });

export { LogOutModal };
