import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./HowToPlayScreenStyle";
import HowToPlaySamplePuzzle from "../../initialStateData/HowToPlaySamplePuzzle";
import StackModelClass from "../../modelClasses/StackModelClass";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/core";

var openingDemoPuzzle = new Array();
var flaggingDemoPuzzle = new Array();
var stackObject = new Array();
var tempStackElement;

function HowToPlayScreen(props) {
    const [parentHook, setParentHook] = useState(null);
    const [childHook, setChildHook] = useState(null);
    const [flagCounter, setFlagCounter] = useState(0);
    const [arePuzzlesSet, setArePuzzlesSet] = useState(false);
    const isFocused = useIsFocused();

    function flaggingHandler(row, column) {
        var tempFlagCounter;
        flaggingDemoPuzzle[row].innerArray[column].isFlagged = !flaggingDemoPuzzle[row].innerArray[column].isFlagged;
        if (flaggingDemoPuzzle[row].innerArray[column].isFlagged) {
            tempFlagCounter = flagCounter;
            setFlagCounter(tempFlagCounter + 1)
        }
        else {
            tempFlagCounter = flagCounter
            setFlagCounter(tempFlagCounter - 1)
        }
    }

    function squareTraverser(row, column) {
        if (openingDemoPuzzle[row].innerArray[column].val === 0 && !openingDemoPuzzle[row].innerArray[column].isOpened) {
            openingDemoPuzzle[row].innerArray[column].isOpened = true;
            if (openingDemoPuzzle[row].innerArray[column].isFlagged) {
                flaggingHandler(row, column)
            }

            stackObject.push(new StackModelClass(row, column))

            while (stackObject.length > 0) {
                var tempIndexHolder = stackObject.pop();
                openingDemoPuzzle[tempIndexHolder.row].innerArray[tempIndexHolder.column].isOpened = true;
                if (openingDemoPuzzle[tempIndexHolder.row].innerArray[tempIndexHolder.column].isFlagged) {
                    flaggingHandler(tempIndexHolder.row, tempIndexHolder.column)
                }
                for (columnSubtractor = -1; columnSubtractor <= 1; columnSubtractor++) {
                    for (rowSubtractor = -1; rowSubtractor <= 1; rowSubtractor++) {
                        if ((tempIndexHolder.row + rowSubtractor >= 0) && (tempIndexHolder.row + rowSubtractor <= 2) && (tempIndexHolder.column + columnSubtractor >= 0) && (tempIndexHolder.column + columnSubtractor <= 2) && (openingDemoPuzzle[tempIndexHolder.row + rowSubtractor].innerArray[tempIndexHolder.column + columnSubtractor].val === 0) && (!openingDemoPuzzle[tempIndexHolder.row + rowSubtractor].innerArray[tempIndexHolder.column + columnSubtractor].isOpened)) {
                            stackObject.push(new StackModelClass(tempIndexHolder.row + rowSubtractor, tempIndexHolder.column + columnSubtractor))
                        }
                        else if ((tempIndexHolder.row + rowSubtractor >= 0) && (tempIndexHolder.row + rowSubtractor <= 2) && (tempIndexHolder.column + columnSubtractor >= 0) && (tempIndexHolder.column + columnSubtractor <= 2) && ((openingDemoPuzzle[tempIndexHolder.row + rowSubtractor].innerArray[tempIndexHolder.column + columnSubtractor].val > 0))) {
                            openingDemoPuzzle[tempIndexHolder.row + rowSubtractor].innerArray[tempIndexHolder.column + columnSubtractor].isOpened = true;
                            if (openingDemoPuzzle[tempIndexHolder.row + rowSubtractor].innerArray[tempIndexHolder.column + columnSubtractor].isFlagged) {
                                flaggingHandler(tempIndexHolder.row + rowSubtractor, tempIndexHolder.column + columnSubtractor);
                            }
                        }
                    }
                }
            }
        }
    }

    function tileOpeningHandler(row, column) {
        if (openingDemoPuzzle[row].innerArray[column].val === 0) {
            squareTraverser(row, column)
        }
        else {
            openingDemoPuzzle[row].innerArray[column].isOpened = true;
            if (openingDemoPuzzle[row].innerArray[column].isFlagged) {
                flaggingHandler(row, column)
            }
        }
        setChildHook(column);
        setParentHook(row);
    }

    function initialFunction() {
        openingDemoPuzzle = JSON.parse(JSON.stringify(HowToPlaySamplePuzzle))
        flaggingDemoPuzzle = JSON.parse(JSON.stringify(HowToPlaySamplePuzzle))
        setArePuzzlesSet(true);
    }

    function landingScreenNavigationHandler() {
        props.navigation.navigate("LandingScreen");
    }

    function basicInstructionScreenNavigationHandler() {
        props.navigation.navigate("BasicInstructionScreen");
    }

    function uiGuidanceScreenNavigationHandler() {
        props.navigation.navigate("UIGuidanceScreen");
    }

    useEffect(() => {
        initialFunction()
    }, [isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleTxt}>How to play</Text>
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
                    <View style={styles.demoPuzzleContainer}>
                        <FlatList
                            data={openingDemoPuzzle}
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
                                                item.isOpened ?
                                                    <TouchableOpacity
                                                        style={styles.openedSquare}
                                                    >
                                                        {
                                                            item.val === -1 ?
                                                                <MaterialCommunityIcons name="mine" size={25} color="#eeeeee" /> :
                                                                (
                                                                    item.val === 0 ?
                                                                        <Text></Text> :
                                                                        <Text style={styles.valueText}>{item.val}</Text>
                                                                )
                                                        }
                                                    </TouchableOpacity> :
                                                    <TouchableOpacity
                                                        style={styles.notOpenedSquare}
                                                        onLongPress={() => flaggingHandler(parentData.id - 1, index)}
                                                        onPress={() => tileOpeningHandler(parentData.id - 1, index)}
                                                    >
                                                        {
                                                            item.isFlagged ?
                                                                <MaterialCommunityIcons name="flag-remove" size={25} color="#eeeeee" /> :
                                                                <Text></Text>
                                                        }
                                                    </TouchableOpacity>
                                            }
                                            alwaysBounceHorizontal={false}
                                        />
                                    </View>
                                )
                            }}
                            alwaysBounceVertical={false}
                        />
                    </View>
                    <View style={styles.userInstructionContainer}>
                        <Text style={styles.userInstructionTxt}>Tap on any of the squares to open it. If any of the squares is blank then all the boxes adjacent to it will open automatically. Try to guess the position of the mine and avoid clicking the box containing a mine.</Text>
                    </View>
                </View>
                <View style={styles.contentItemContainer}>
                    <View style={styles.demoPuzzleContainer}>
                        <FlatList
                            data={flaggingDemoPuzzle}
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
                                                item.isOpened ?
                                                    <TouchableOpacity
                                                        style={styles.openedSquare}
                                                    >
                                                        {
                                                            item.val === -1 ?
                                                                <MaterialCommunityIcons name="mine" size={25} color="#eeeeee" /> :
                                                                (
                                                                    item.val === 0 ?
                                                                        <Text></Text> :
                                                                        <Text style={styles.valueText}>{item.val}</Text>
                                                                )
                                                        }
                                                    </TouchableOpacity> :
                                                    <TouchableOpacity
                                                        style={styles.notOpenedSquare}
                                                        onLongPress={() => flaggingHandler(parentData.id - 1, index)}
                                                    >
                                                        {
                                                            item.isFlagged ?
                                                                <MaterialCommunityIcons name="flag-remove" size={25} color="#eeeeee" /> :
                                                                <Text></Text>
                                                        }
                                                    </TouchableOpacity>
                                            }
                                            alwaysBounceHorizontal={false}
                                        />
                                    </View>
                                )
                            }}
                            alwaysBounceVertical={false}
                        />
                    </View>
                    <View style={styles.userInstructionContainer}>
                        <Text style={styles.userInstructionTxt}>Press and hold on the square where you think the mine can be located. This will place a flag on that position. If you press and hold the square where flag is already placed, the placed flag will be removed.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomButtonWrapper}>
                    <TouchableOpacity
                        style={styles.bottomButtonContainer}
                        onPress={() => basicInstructionScreenNavigationHandler()}
                    >
                        <MaterialCommunityIcons name="arrow-left" size={30} color="#eeeeee" />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomSpacerElement}></View>
                <View style={styles.bottomButtonWrapper}>
                    <TouchableOpacity
                        style={styles.bottomButtonContainer}
                        onPress={() => uiGuidanceScreenNavigationHandler()}
                    >
                        <MaterialCommunityIcons name="arrow-right" size={30} color="#eeeeee" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HowToPlayScreen