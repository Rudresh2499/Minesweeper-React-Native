import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./UIGuidanceScreenStyle";

function UIGuidanceScreen(props) {

    function gameScreenNavigationHandler() {
        props.navigation.navigate("GameScreen")
    }

    function landingScreenNavigationHandler() {
        props.navigation.navigate("LandingScreen")
    }

    function howToPlayScreenNavigationHandler() {
        props.navigation.navigate("HowToPlayScreen");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleTxt}>Guide to the Game Interface</Text>
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
                <View style={styles.contentItemContainer}>
                    <View style={styles.uiElementContainer}>
                        <View style={styles.uiElementCounter}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="mine" size={30} color="#eeeeee" />
                            </View>
                            <View style={styles.txtContainer}>
                                <Text style={styles.elementTxt}>15</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.userMessageContainer}>
                        <Text style={styles.messageTxt}>The number on the left shows the number of mines placed on board this round.</Text>
                    </View>
                </View>
                <View style={styles.contentItemContainer}>
                    <View style={styles.uiElementContainer}>
                        <View style={styles.uiElementCounter}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="flag-remove" size={30} color="#eeeeee" />
                            </View>
                            <View style={styles.txtContainer}>
                                <Text style={styles.elementTxt}>10</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.userMessageContainer}>
                        <Text style={styles.messageTxt}>The number on the left shows the number of flags currently placed on board by the user.</Text>
                    </View>
                </View>
                <View style={styles.winConditionContainer}>
                    <View style={styles.winConditionHeaderContainer}>
                        <Text style={styles.winConditionHeaderTxt}>How to win the game?</Text>
                    </View>
                    <View style={styles.winConditionTextContainer}>
                        <Text style={styles.messageTxt}>To win the game, the user has to guess the locations of all the placed mines on the board and flag them. The game ends once all the mines are flagged correctly. Alternatively, you can end a game by tapping on a box containing a mine, the game usually ends quicker that way.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomButtonWrapper}>
                    <TouchableOpacity
                        style={styles.bottomButtonContainer}
                        onPress={() => howToPlayScreenNavigationHandler()}
                    >
                        <MaterialCommunityIcons name="arrow-left" size={30} color="#eeeeee" />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomSpacerElement}></View>
                <View style={styles.bottomButtonWrapper}>
                    <TouchableOpacity
                        style={styles.bottomStartButtonContainer}
                        onPress={() => gameScreenNavigationHandler()}
                    >
                        <View style={{ marginHorizontal: 5, }}>
                            <Text style={styles.messageTxt}>Start the Game</Text>
                        </View>
                        <MaterialCommunityIcons name="check" size={30} color="#eeeeee" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default UIGuidanceScreen