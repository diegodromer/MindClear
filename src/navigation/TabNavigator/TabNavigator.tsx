import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TabBarIcon from "../../components/TabBarIcon/TabBarIcon";
import HomeScreen from "../../screens/HomeScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import { RootState } from "../../store/store";
import { RootStackParamList, TabParamList } from "../../types/navigation";
import { handleNavigationFlow } from "../navigationFlow";
import styles from "./TabNavigator.styles";

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userState && navigation) {
      handleNavigationFlow({ navigation, state: userState });
    }
  }, [userState, navigation]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabBarIcon route={route.name} focused={focused} />
        ),
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarAccessibilityLabel: "Tela Home",
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarAccessibilityLabel: "Tela Configurações",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
