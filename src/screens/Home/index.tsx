import { Button } from "react-native";
import { Container } from "../../components/Container";
import { CustomText } from "../../components/CustomText/style";
import {
  ParamListBase,
  NavigatorScreenParams,
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
        onPress={() => navigation.navigate("ToastExamples")}
      />
    </Container>
  );
};
