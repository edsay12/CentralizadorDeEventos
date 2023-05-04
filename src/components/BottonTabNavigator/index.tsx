import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../screens/Home";
import { SplashScreen } from "../../screens/SplashScreen";
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export const BottonTabNavigator =() => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{tabBarIcon(props) {
        return <Entypo name="home" size={24} color="black" />
      },}} component={Home} />
      <Tab.Screen name="SplashScreen" options={{tabBarIcon(props) {
        return <AntDesign name="star" size={24} color="black" />
      },}} component={SplashScreen} />
    </Tab.Navigator>
  );
}
