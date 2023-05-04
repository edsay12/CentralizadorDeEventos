import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/CustomText";
import { Container } from "../../components/Container";
import { useEffect } from "react";


export const SplashScreen = ({
  navigation,
}: {
  navigation: any;
}) => {
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
      <StatusBar style="auto" />
    </Container>
  );
};
