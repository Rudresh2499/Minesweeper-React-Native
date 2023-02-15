import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./DeveloperScreenStyle";

function DeveloperScreen(props) {

    function landingScreenNavigationHandler() {
        props.navigation.navigate("LandingScreen");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleTxt}>About the developers</Text>
                </View>
                <View style={styles.headerButtonsContainer}>
                    <TouchableOpacity
                        style={styles.headerButtonIconContainer}
                        onPress={() => landingScreenNavigationHandler()}
                    >
                        <MaterialCommunityIcons name="close" size={30} color="#eeeeee" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentItemContainer}></View>
            </View>
        </SafeAreaView>
    )
}

export default DeveloperScreen