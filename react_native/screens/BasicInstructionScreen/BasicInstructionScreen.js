import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SampleClosedPuzzle from "../../initialStateData/SampleClosedPuzzle";
import SampleOpenedPuzzle from "../../initialStateData/SampleOpenedPuzzle";
import styles from "../BasicInstructionScreen/BasicInstructionScreenStyle";

function BasicInstructionScreen(props) {

    function landingScreenNavigationHandler() {
        props.navigation.navigate("LandingScreen");
    }

    function howToPlayScreenNavigationHandler() {
        props.navigation.navigate("HowToPlayScreen");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleTxt}>Basics of Minesweeper</Text>
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
                    <View>
                        <FlatList
                            data={SampleClosedPuzzle}
                            keyExtractor={item => item.id.toString()}
                            style={{ paddingTop: 5, }}
                            renderItem={({ item, index }) => {
                                let parentData = item;
                                return (
                                    <View>
                                        <FlatList
                                            data={item.innerArray}
                                            keyExtractor={item => item.id.toString()}
                                            horizontal={true}
                                            renderItem={({ item, index }) =>
                                                <View style={styles.notOpenedSquare}></View>
                                            }
                                            alwaysBounceHorizontal={false}
                                        />
                                    </View>
                                )
                            }}
                            alwaysBounceVertical={false}
                        />
                    </View>
                    <View style={styles.arrowContainer}>
                        <MaterialCommunityIcons name="arrow-right" size={25} color="#eeeeee" />
                    </View>
                    <View style={styles.instructionContainer}>
                        <Text style={styles.instructionTxt}>
                            The puzzle on the left shows the squares in unopened state.
                        </Text>
                    </View>
                </View>
                <View style={styles.contentItemContainer}>
                    <View>
                        <FlatList
                            data={SampleOpenedPuzzle}
                            keyExtractor={item => item.id.toString()}
                            style={{ paddingTop: 5, }}
                            renderItem={({ item, index }) => {
                                let parentData = item;
                                return (
                                    <View>
                                        <FlatList
                                            data={item.innerArray}
                                            keyExtractor={item => item.id.toString()}
                                            horizontal={true}
                                            renderItem={({ item, index }) =>
                                                <View style={styles.openedSquare}>
                                                    {
                                                        item.val === -1 ?
                                                            <MaterialCommunityIcons name="mine" size={25} color="#eeeeee" /> :
                                                            <Text style={styles.valueText}>{item.val}</Text>
                                                    }
                                                </View>
                                            }
                                            alwaysBounceHorizontal={false}
                                        />
                                    </View>
                                )
                            }}
                            alwaysBounceVertical={false}
                        />
                    </View>
                    <View style={styles.arrowContainer}>
                        <MaterialCommunityIcons name="arrow-right" size={25} color="#eeeeee" />
                    </View>
                    <View style={styles.instructionContainer}>
                        <Text style={styles.instructionTxt}>
                            The puzzle on the left shows the squares in opened state.
                        </Text>
                    </View>
                </View>
                <View style={styles.contentItemContainer}>
                    <View>
                        <FlatList
                            data={SampleOpenedPuzzle}
                            keyExtractor={item => item.id.toString()}
                            style={{ paddingTop: 5, }}
                            renderItem={({ item, index }) => {
                                let parentData = item;
                                return (
                                    <View>
                                        <FlatList
                                            data={item.innerArray}
                                            keyExtractor={item => item.id.toString()}
                                            horizontal={true}
                                            renderItem={({ item, index }) =>
                                                <View>{
                                                    item.val === -1 ?
                                                        <View style={styles.mineSquare}>
                                                            <MaterialCommunityIcons name="mine" size={25} color="#eeeeee" />
                                                        </View> :
                                                        <View style={styles.openedSquare}>
                                                            <Text style={styles.valueText}>{item.val}</Text>
                                                        </View>
                                                }</View>
                                            }
                                            alwaysBounceHorizontal={false}
                                        />
                                    </View>
                                )
                            }}
                            alwaysBounceVertical={false}
                        />
                    </View>
                    <View style={styles.arrowContainer}>
                        <MaterialCommunityIcons name="arrow-right" size={25} color="#eeeeee" />
                    </View>
                    <View style={styles.instructionContainer}>
                        <Text style={styles.instructionTxt}>
                            If the player opens the tile containing a mine, shown in red, the player loses.
                        </Text>
                    </View>
                </View>
                <View style={styles.contentItemContainer}>
                    <View>
                        <FlatList
                            data={SampleOpenedPuzzle}
                            keyExtractor={item => item.id.toString()}
                            style={{ paddingTop: 5, }}
                            renderItem={({ item, index }) => {
                                let parentData = item;
                                return (
                                    <View>
                                        <FlatList
                                            data={item.innerArray}
                                            keyExtractor={item => item.id.toString()}
                                            horizontal={true}
                                            renderItem={({ item, index }) =>
                                                <View>{
                                                    item.val === -1 ?
                                                        <View style={styles.mineSquare}>
                                                            <Text style={styles.valueText}>1</Text>
                                                        </View> :
                                                        <View style={styles.openedSquare}>
                                                            <Text style={styles.valueText}>?</Text>
                                                        </View>
                                                }</View>
                                            }
                                            alwaysBounceHorizontal={false}
                                        />
                                    </View>
                                )
                            }}
                            alwaysBounceVertical={false}
                        />
                    </View>
                    <View style={styles.arrowContainer}>
                        <MaterialCommunityIcons name="arrow-right" size={25} color="#eeeeee" />
                    </View>
                    <View style={styles.instructionContainer}>
                        <Text style={styles.instructionTxt}>
                            Each square with a number (Red) shows the number of mines on 8 ('?') adjacent squares.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomButtonWrapper}>
                    <TouchableOpacity
                        style={styles.bottomButtonContainer}
                        onPress={() => landingScreenNavigationHandler()}
                    >
                        <MaterialCommunityIcons name="arrow-left" size={30} color="#eeeeee" />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomSpacerElement}></View>
                <View style={styles.bottomButtonWrapper}>
                    <TouchableOpacity
                        style={styles.bottomButtonContainer}
                        onPress={() => howToPlayScreenNavigationHandler()}
                    >
                        <MaterialCommunityIcons name="arrow-right" size={30} color="#eeeeee" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasicInstructionScreen