import React from "react";
import { Text } from "react-native";

interface TabBarLabelProps {
  route: string;
}

const TabBarLabel: React.FC<TabBarLabelProps> = ({ route }) => {
  let label: string;

  switch (route) {
    case "Home":
      label = "Home";
      break;
    case "Settings":
      label = "Definições";
      break;
    default:
      label = "";
  }

  return (
    <Text
      style={{
        color: "#FFFFFF",
        fontSize: 12,
        fontFamily: "Inter",
        marginLeft: 8,
      }}
    >
      {label}
    </Text>
  );
};

export default TabBarLabel;
