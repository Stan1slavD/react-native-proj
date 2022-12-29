import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/search";
import FullFlatScreen from "../screens/flat";
const Stack = createStackNavigator();
function CardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRoutName="HomeScreen"
    >
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="FullFlat" component={FullFlatScreen} />
    </Stack.Navigator>
  );
}

export default CardStack;
