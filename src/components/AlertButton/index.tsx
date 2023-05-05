import { Alert, Button, ButtonProps } from "react-native";
import styled from "styled-components/native";

type PropType = {
  buttonOptions: ButtonProps;
  alertTitle: string;
  alertMessage: string;
  alertOptions: [
    {
      text: string;
      style: "cancel" | "default" | "destructive";
      onPress:()=> void
     
    }
  ];
};

export const AlertButton = ({
  buttonOptions,
  alertTitle,
  alertMessage,
  alertOptions,
}: PropType) => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      alertTitle,
      alertMessage,
      alertOptions.map((option) => option)
    );

  return (
    <Button {...buttonOptions} onPress={createTwoButtonAlert} title="Botão" />
  ); // Seria legal criar um componente de bottão
};
