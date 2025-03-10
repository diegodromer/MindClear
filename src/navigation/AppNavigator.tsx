import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import TelaInicial from "../screens/TelaInitial";
import { RootStackParamList } from "../types/navigation";
import TabNavigator from "./TabNavigator/TabNavigator";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />

      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="TelaInicial" component={TelaInicial} />

      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
