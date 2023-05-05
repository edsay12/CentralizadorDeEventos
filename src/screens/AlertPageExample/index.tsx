import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import { AlertButton } from "../../components/AlertButton";
import { Container } from "../../components/Container";

export const AlertPageExample = () => {
  return (
    <Container align="center" justify="center">
      <AlertButton
        buttonOptions={{ color: "red", title: "Alert Message" }}
        alertMessage="Precise para fechar"
        alertTitle="Uma mensagem de teste"
        alertOptions={[
          {
            onPress: () => console.log("hello"),
            style: "cancel",
            text: "Cancelar",
          },
        ]}
      />
    </Container>
  );
};

