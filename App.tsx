import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import logo from "./assets/logo.png";
import { NavigationContainer } from "@react-navigation/native";

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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { BottonTabNavigator } from "./src/router/BottonTabNavigator";
import { Router } from "./src/router";

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
      <Router />
    </ThemeProvider>
  );
}
