import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import { AlertButton } from "../../components/AlertButton";
import { Container } from "../../components/Container";
import CameraExample from "../../components/CameraText";

export const Camera = () => {
  return (

    <Container align="center" justify="center">
      <CameraExample /> 
    </Container>
  );
};

