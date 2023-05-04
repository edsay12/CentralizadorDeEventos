import { StatusBar } from "expo-status-bar";
import { Button, ToastAndroid, View } from "react-native";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/CustomText";
import { Container } from "../../components/Container";
import { useEffect } from "react";

export const ToastExample = ({ navigation }: { navigation: any }) => {
  const showToast = () => {
    ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "All Your Base Are Belong To Us",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "A wild toast appeared!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <Container align="center" justify="center">
      
      <Button title="Toggle Toast" onPress={() => showToast()} />
      <Button
        title="Toggle Toast With Gravity"
        onPress={() => showToastWithGravity()}
      />
      <Button
        title="Toggle Toast With Gravity & Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />

      <StatusBar style="auto" />
    </Container>
  );
};
