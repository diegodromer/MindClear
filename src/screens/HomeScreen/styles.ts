import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  spinnerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  spinnerText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "#3F5EF6",
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  headerContent: {
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
  timerContainer: {
    alignItems: "center",
    paddingVertical: 12,
  },
  timerImage: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  timerTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter",
    marginBottom: 4,
  },
  timerDays: {
    color: "#FFFFFF",
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    marginBottom: 4,
  },
  timerHoursContainer: {
    backgroundColor: "#000000",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignItems: "center",
  },
  timerHours: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  buttonIcon: {
    width: 48,
    height: 48,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Inter",
  },
  progressContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  progressItem: {
    padding: 16,
    backgroundColor: "#030716",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    gap: 8,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Inter",
  },
  progressPercentage: {
    color: "#33AFFF",
    fontSize: 14,
    fontFamily: "Inter",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#1e293b",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#33AFFF",
  },
  panicIcon: {
    width: 24,
    height: 24,
  },
  panicButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },

});

export default styles;
