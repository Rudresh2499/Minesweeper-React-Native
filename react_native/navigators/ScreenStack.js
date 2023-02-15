import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../screens/LandingScreen/LandingScreen";
import GameScreen from "../screens/GameScreen/GameScreen";
import BasicInstructionScreen from "../screens/BasicInstructionScreen/BasicInstructionScreen";
import HowToPlayScreen from "../screens/HowToPlayScreen/HowToPlayScreen";
import UIGuidanceScreen from "../screens/UIGuidanceScreen/UIGuidanceScreen";
import DeveloperScreen from "../screens/DeveloperScreen/DeveloperScreen";

const ScreenStackNavigator = createStackNavigator()

function ScreenStack(props) {
    return (
        <ScreenStackNavigator.Navigator>
            <ScreenStackNavigator.Screen name="LandingScreen" component={LandingScreen} options={{ header: () => null }} />
            <ScreenStackNavigator.Screen name="GameScreen" component={GameScreen} options={{ header: () => null, gestureEnabled: false }} />
            <ScreenStackNavigator.Screen name="BasicInstructionScreen" component={BasicInstructionScreen} options={{ header: () => null }} />
            <ScreenStackNavigator.Screen name="HowToPlayScreen" component={HowToPlayScreen} options={{ header: () => null }} />
            <ScreenStackNavigator.Screen name="UIGuidanceScreen" component={UIGuidanceScreen} options={{ header: () => null }} />
            <ScreenStackNavigator.Screen name="DeveloperScreen" component={DeveloperScreen} options={{ header: () => null }} />
        </ScreenStackNavigator.Navigator>
    )
}

export default ScreenStack