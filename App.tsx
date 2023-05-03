import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import logo from "./assets/logo.png";

import { SplashScreen } from "./src/screens/SplashScreen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_100Thin,
} from "@expo-google-fonts/roboto"; // font roboto https://github.com/expo/google-fonts
import { Loading } from "./src/components/Loading";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading isLoading color="blue" size="large" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
}
