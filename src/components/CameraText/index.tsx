import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Camera } from 'expo-camera';

const CameraExample = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ width: 300, height: 300}} type={Camera.Constants.Type.back} ref={ref => setCameraRef(ref)} />

      <TouchableOpacity style={{ alignSelf: 'center', marginBottom: 20 }} onPress={takePicture}>
        <Text style={{ fontSize: 20, marginBottom: 10, color: 'black' }}>Capture Photo</Text>
      </TouchableOpacity>

      {photoUri && <Image source={{ uri: photoUri }} style={{ width: 300, height: 300, alignSelf:'center' }} />}
    </View>
  );
};

export default CameraExample;
