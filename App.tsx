/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import {
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  useColorScheme,
  View
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import TestNav from "./screens/TestNav";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestNav} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



export default App;
