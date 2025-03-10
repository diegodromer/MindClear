import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A14",
    padding: 24,
  },
  logoContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  logo: {
    width: 52,
    height: 52,
    marginRight: 12,
    tintColor: "#00A3FF",
  },
  title: {
    fontSize: 36,
    fontFamily: "Poppins-Bold",
    color: "#FFFFFF",
  },
  illustrationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backgroundIllustration: {
    position: "absolute",
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: "contain",
  },
  illustration: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: "contain",
  },
  bottomContainer: {
    width: "100%",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#3F5EF6",
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  skipText: {
    color: "#FFFFFF",
    fontFamily: "Inter",
    textAlign: "center",
    fontSize: 14,
  },
  skipLink: {
    color: "#00A3FF",
    fontFamily: "Inter",
  },
});
