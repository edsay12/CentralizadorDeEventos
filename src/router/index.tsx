import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens/SplashScreen";
import { Home } from "../screens/Home";
import { ToastExample } from "../screens/ToastExample";
import { ElaboratePage } from "../screens/ElaboratePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../styles";
import { AlertPageExample } from "../screens/AlertPageExample";
import { Camera } from "../screens/Camera";

import { Localization } from "../screens/Localization";
import { ReconhecimentoDeToques } from "../screens/ReconhecimentoDeToques";

export type RootStackParamList = {
  SplashScreen: undefined;
  Home: undefined;
  ToastExample: undefined;
  ElaboratePage: undefined;
  AlertPageExample: undefined;
  Localization: undefined;
  Camera: undefined;
  ReconhecimentoDeToques: undefined;
};

export const BottomRoute = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.black,
        },
      }}
    >
      <Tab.Screen
        name="ElaboratePage"
        options={{
          tabBarIcon(props) {
            return <Entypo name="home" size={24} color={props.color} />;
          },
        }}
        component={ElaboratePage}
      />
      <Tab.Screen
        name="ToastExample"
        options={{
          tabBarIcon(props) {
            return <AntDesign name="star" size={24} color={props.color} />;
          },
        }}
        component={ToastExample}
      />
    </Tab.Navigator>
  );
};

export const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator // Barra de navegação no top
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="SplashScreen"
          options={{}}
          component={SplashScreen}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ToastExample" component={ToastExample} />
        <Stack.Screen name="ElaboratePage" component={BottomRoute} />
        <Stack.Screen name="AlertPageExample" component={AlertPageExample} />
        <Stack.Screen name="Localization" component={Localization} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="ReconhecimentoDeToques" component={ReconhecimentoDeToques} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
