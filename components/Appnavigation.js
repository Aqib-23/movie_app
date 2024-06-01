import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Moviescreen from "./Moviescreen";
import Personscreen from "./Personscreen";
import Searchscreen from "./Searchscreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default function Appnavigation() {
  return (
    <NavigationContainer>
          {/* <Drawer.Navigator>
      <Drawer.Screen name="Movie" component={Moviescreen} />
      <Drawer.Screen name="Person" component={Personscreen} />
    </Drawer.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Movie"
          component={Moviescreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Person"
          component={Personscreen}
        ></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name="Search" component={Searchscreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
