import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  panicButton: {
    backgroundColor: "#dc2626",
    marginHorizontal: 16,
    marginTop: 36,
    padding: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  panicIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  panicButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;