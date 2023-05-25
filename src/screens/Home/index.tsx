import { Button } from "react-native";
import { Container } from "../../components/Container";
import { CustomText } from "../../components/CustomText/style";
import {
  useNavigation,
} from "@react-navigation/native";

import { RootStackParamList } from "../../router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type homeScreenNavigatorProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export const Home = () => {
  const navigation = useNavigation<homeScreenNavigatorProp>();
  return (
    <Container align="center" justify="center">
      <CustomText color="blue" size="20">
        Hello
      </CustomText>
      <Button
        title="Go to ToatExamples"
        onPress={() => navigation.navigate("ToastExample")}
      />
      <Button
        title="Go to ElaboratePage"
        onPress={() => navigation.navigate("ElaboratePage")}
        color={'red'}
      />
      <Button
        title="Alert Page Example"
        onPress={() => navigation.navigate("AlertPageExample")}
        color={'red'}
      />
      <Button

        title="Camera"
        onPress={() => navigation.navigate("Camera")}
        color={'green'}
      />
      <Button
        title="Pagina de localização"
        onPress={() => navigation.navigate("Localization")}
        color={'red'}
      />
      <Button
        title="Reconhecimento de toques"
        onPress={() => navigation.navigate("ReconhecimentoDeToques")}
        color={'red'}
      />
      
      
    </Container>
  );
};
