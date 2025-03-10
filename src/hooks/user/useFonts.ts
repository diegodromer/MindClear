import * as Font from "expo-font";
import { useEffect, useState } from "react";

const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          Inter: require("../../../assets/fonts/Inter-Regular.ttf"),
          PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("[useFonts] Erro ao carregar fontes:", error);
      }
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useFonts;
