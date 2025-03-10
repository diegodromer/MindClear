import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { Provider } from "react-redux";
import useFonts from "./src/hooks/user/useFonts";
import AppNavigator from "./src/navigation/AppNavigator";
import {
  loadTimerFromAsyncStorage,
  loadTimerFromStorage,
} from "./src/store/slices/timerSlice";
import { loadUserAsync } from "./src/store/slices/userSlice";
import store from "./src/store/store";
import { globalStyles } from "./src/styles/globalStyles";

const App: React.FC = () => {
  const fontsLoaded = useFonts();

  useEffect(() => {
    const carregarDados = async () => {
      const dispatch = store.dispatch as typeof store.dispatch;

      await dispatch(loadUserAsync());

      const timer = await loadTimerFromAsyncStorage();
      if (timer) {
        dispatch(loadTimerFromStorage(timer));
      }
    };

    carregarDados();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={globalStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#33AFFF" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
