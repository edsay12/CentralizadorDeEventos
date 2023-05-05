import { StatusBar } from "expo-status-bar";
import { Button, View } from "react-native";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/CustomText";
import { Container } from "../../components/Container";
import { useEffect } from "react";

import { RootStackParamList } from "../../router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type SplashScreenScreenNavigatorProp = NativeStackNavigationProp<
  RootStackParamList,
  "SplashScreen"
>;

export const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenScreenNavigatorProp>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
  }, []);

  return (
    <Container align="center" justify="center">
      <Logo height={100} width={100} />
      <Text size="20px" color="black" font="Roboto_400Regular">
        Notify - App
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

      <StatusBar style="auto" />
    </Container>
  );
};
