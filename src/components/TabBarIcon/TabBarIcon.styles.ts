import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: 48,
    height: 48,
  },
  iconWrapperFocused: {
    backgroundColor: "#3F5EF6",
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#3F5EF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    minWidth: 120,
  },
  iconSpacing: {
    marginRight: 8,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter",
    includeFontPadding: false,
    textAlign: "center",
  },
});

export default styles;
