/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import ScreenStack from "./react_native/navigators/ScreenStack";

export default function App(props) {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  )
}