import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens/SplashScreen";
import { Home } from "../screens/Home";
import { ToastExample } from "../screens/ToastExample";

export const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator // Barra de navegação no top
        screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
      >
        <Stack.Screen name="initial" options={{}} component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ToastExample" component={ToastExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
