import React from "react";
import { StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";
import { useIsFocused } from "@react-navigation/native";
import styles from "./LandingScreenStyle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome5";
import AntIcons from "react-native-vector-icons/AntDesign";
import { useEffect } from "react";

function LandingScreen(props) {
    const isFocused = useIsFocused()

    function gameScreenNavigationHandler() {
        props.navigation.navigate("GameScreen")
    }

    function devScreenNavigationHandler() {
        props.navigation.navigate("DeveloperScreen")
    }

    function instructionScreenNavigationHandler() {
        props.navigation.navigate("BasicInstructionScreen")
    }

    useEffect(() => {
        SplashScreen.hide();
    }, [isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.upperViewContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerIconContainer}>
                        <MaterialCommunityIcons name="mine" size={100} color="#00adb5" style={styles.iconStyle} />
                    </View>
                    <View style={styles.titleTxtContainer}>
                        <Text style={styles.titleTxt}>Minesweeper</Text>
                    </View>
                    <View style={styles.spacerElement}></View>
                </View>
            </View>
            <View style={styles.middleViewContainer}>
                <View style={styles.playBtnContainer}>
                    <TouchableOpacity
                        onPress={() => gameScreenNavigationHandler()}
                    >
                        <AntIcons name="play" size={60} color="#00adb5" style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={styles.userMessageContainer}>
                    <Text style={styles.userMessageTxt}>
                        Find and flag all the mines to win the game. Take care not to trigger a mine explosion in the process.
                    </Text>
                </View>
            </View>
            <View style={styles.lowerViewContainer}>
                <View style={styles.bottomItemWrapper}>
                    <TouchableOpacity
                        onPress={() => instructionScreenNavigationHandler()}
                    >
                        <AntIcons name="questioncircle" size={40} color="#00adb5" style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bottomTextWrapper}
                        onPress={() => instructionScreenNavigationHandler()}
                    >
                        <Text style={styles.bottomTxt}>How to play?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomItemWrapper}>
                    <TouchableOpacity
                        onPress={() => devScreenNavigationHandler()}
                    >
                        <AntIcons name="codesquare" size={40} color="#00adb5" style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bottomTextWrapper}
                        onPress={() => devScreenNavigationHandler()}
                    >
                        <Text style={styles.bottomTxt}>About the devs</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LandingScreen