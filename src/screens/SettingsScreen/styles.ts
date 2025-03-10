import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logo: {
    width: 24,
    height: 24,
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  mainContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  textAndButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 16,
    borderRadius: 8,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
  profileEmail: {
    color: "#64748B",
    fontSize: 14,
    fontFamily: "Inter",
  },
  logoutButton: {
    backgroundColor: "#DC2626",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutIcon: {
    width: 40,
    height: 40,
  },
});

export default styles;
