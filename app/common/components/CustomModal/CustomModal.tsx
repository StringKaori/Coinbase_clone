import { Modal, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SimpleButton } from "../SimpleButton/SimpleButton";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  message: string;
}

const CustomModal = (props: CustomModalProps) => {
  return (
    <Modal 
        transparent={true} 
        animationType="fade" 
        visible={props.visible}
        onRequestClose={props.onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalMessage}>{props.message}</Text>
          <SimpleButton 
            content={"ok"} 
            handler={props.onClose}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay background color
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 250,
  },
  modalMessage: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
});

export { CustomModal };
