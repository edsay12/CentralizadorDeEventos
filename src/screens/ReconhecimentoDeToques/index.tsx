import React, { useState } from "react";
import { Text,ToastAndroid} from "react-native";
import { Container } from "../../components/Container";
import { Button, View } from "react-native";
import styled from "styled-components/native";
import {
  State,
  GestureHandlerRootView,
  PanGestureHandler,
  TouchableWithoutFeedback,
  GestureEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";

export const ReconhecimentoDeToques = () => {
  const [touchCount, setTouchCount] = useState(0);
  const [swipeDetected, setSwipeDetected] = useState(false);
 

  const handlePanGesture = (
    event: GestureEvent<PanGestureHandlerEventPayload>
  ) => {
    const numberOfTouches = event.nativeEvent.numberOfPointers;
    setTouchCount(numberOfTouches);
    if (event.nativeEvent.translationY < -50) {
       alert("Foi de arasta pra cima");
      setSwipeDetected(true);
      // Faça algo quando o gesto de deslizar para cima for detectado
    }
    if (event.nativeEvent.translationY > 50) {
      alert("Foi de arasta pra baixo");
      setSwipeDetected(true);
      // Faça algo quando o gesto de deslizar para cima for detectado
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler
        onGestureEvent={handlePanGesture}
        onHandlerStateChange={handlePanGesture}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableWithoutFeedback>
            {/* Aqui você pode exibir o número de toques */}
            <Text style={{ fontSize: 24 }}>{touchCount}</Text>
          </TouchableWithoutFeedback>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const ButtonStyled = styled.Button`
  height: 500px;
  width: 500px;
`;
const Touch = styled.TouchableHighlight`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
