import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as S from "./style";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/CustomText";

export const SplashScreen = () => {
  return (
    <S.ViewContainer>
      <Logo height="100px" width="100px"  />
      <Text size="20px" color="black" font="Roboto_400Regular">Notify - App</Text>
      <StatusBar style="auto" />
    </S.ViewContainer>
  );
};
