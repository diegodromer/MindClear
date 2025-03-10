import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBarStyle: {
    flexDirection: "column",
    backgroundColor: "#020510",
    borderTopColor: "transparent",
    borderTopWidth: 0,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Platform.OS === "android" ? 8 : 12,
    paddingTop: Platform.OS === "android" ? 8 : 12,
  },
});

export default styles;
