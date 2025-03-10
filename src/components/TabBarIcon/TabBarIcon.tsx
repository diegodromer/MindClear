import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import styles from "./TabBarIcon.styles";

interface TabBarIconProps {
  route: string;
  focused: boolean;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ route, focused }) => {
  let iconName: string;
  let label: string;

  switch (route) {
    case "Home":
      iconName = "home-outline";
      label = "Home";
      break;
    case "Settings":
      iconName = "settings-outline";
      label = "Definições";
      break;
    default:
      iconName = "";
      label = "";
  }

  return (
    <View style={styles.container}>
      <View style={[styles.iconWrapper, focused && styles.iconWrapperFocused]}>
        <Ionicons
          name={iconName}
          size={20}
          color={focused ? "#FFFFFF" : "#A0A0A0"}
          style={focused ? styles.iconSpacing : undefined}
        />
        {focused && <Text style={styles.label}>{label}</Text>}
      </View>
    </View>
  );
};

export default TabBarIcon;
