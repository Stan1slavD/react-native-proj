import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/search";
import AddScreen from "./screens/add";
import AboutScreen from "./screens/about";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import List from "./screens/list";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Поиск") {
              iconName = focused ? "search1" : "search1";
            } else if (route.name === "Добавить заявку/квартиру") {
              iconName = focused ? "pluscircle" : "pluscircleo";
            } else if (route.name === "Информация") {
              iconName = focused ? "infocirlce" : "infocirlceo";
            } else if (route.name === "Лист") {
              iconName = focused ? "list" : "list";
              return <Entypo name={iconName} size={size} color={color} />;
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Поиск" component={SearchScreen} />
        <Tab.Screen name="Добавить заявку/квартиру" component={AddScreen} />
        <Tab.Screen name="Лист" component={List} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Информация" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
