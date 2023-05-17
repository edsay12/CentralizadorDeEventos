import { Region } from "react-native-maps";
import MapView, { MapViewProps } from "react-native-maps/lib/MapView";
("react-native-maps");
import { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import { Button } from "react-native";

import * as Location from "expo-location";
import styled from "styled-components/native";

export const Localization = () => {
  console.log();

  const [regiao, setRegiao] = useState<Region>({
    latitude: -8.062795391394088,
    longitude: -34.873457519748314,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });


    const localization = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({ accuracy:Location.Accuracy.Highest});
      setRegiao({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0,
      });
    };
  
 

  return (
    <>
      <MapView
        style={{ width: "100%", height: "90%" }}
        initialRegion={regiao}
        region={regiao}
      >
        <Marker coordinate={regiao} title="marker" />
      </MapView>
      <Button title="localização atual" onPress={localization} />
    </>
  );
};
