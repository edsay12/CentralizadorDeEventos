import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import { AlertButton } from "../../components/AlertButton";

export const AlertPageExample = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
