import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import InitialStatePuzzle from "../../initialStateData/InitialPuzzle";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FoundationIcons from "react-native-vector-icons/Foundation";
import StackModelClass from "../../modelClasses/StackModelClass";
import styles from "./GameScreenStyle"

var setPuzzle = new Array();
var stackObject = new Array();
var tempStackElement;

function GameScreen(props) {
    const [parentHook, setParentHook] = useState(null);
    const [childHook, setChildHook] = useState(null);
    const [valueHook, setValueHook] = useState(null);
    const [openedTileCounter, setOpenedTileCounter] = useState(0);
    const [roundMineCount, setRoundMineCount] = useState(null);
    const [isPuzzleSet, setIsPuzzleSet] = useState(false);
    const [flagCounter, setFlagCounter] = useState(0);
    const [correctFlagCounter, setCorrectFlagCounter] = useState(0);
    const isFocused = useIsFocused();

    function goBackNavigationHandler() {
        props.navigation.navigate("LandingScreen")
    }

    function resetFlagHandler() {
        for (row = 0; row <= 15; row++) {
            for (column = 0; column <= 8; column++) {
                setPuzzle[row].innerArray[column].isFlagged = false;
            }
        }
        setFlagCounter(0);
        setCorrectFlagCounter(0);
    }

    function restartGameHandler() {
        minePlacingHandler();
        setChildHook(null);
        setParentHook(null);
        setFlagCounter(0);
        setCorrectFlagCounter(0);
    }

    function flaggingHandler(row, column) {
        if (!setPuzzle[row].innerArray[column].isFlagged) {
            if (flagCounter < roundMineCount) {
                if (setPuzzle[row].innerArray[column].val === -1) {
                    var tempCorrectCountHolder = correctFlagCounter;
                    setCorrectFlagCounter(tempCorrectCountHolder + 1)
                    if (tempCorrectCountHolder + 1 === roundMineCount) {
                        Alert.alert(
                            "You've won",
                            "Congratulations! You have won the game of Minesweeper by successfully avoiding all the mines.",
                            [
                                {
                                    text: "Start a new game",
                                    onPress: () => restartGameHandler(),
                                },
                            ]
                        )
                    }
                }
                setPuzzle[row].innerArray[column].isFlagged = true;
                var tempFlagCounter = flagCounter;
                setFlagCounter(tempFlagCounter + 1)
            }
            else {
                Alert.alert(
                    "Flag limit exceeded",
                    "You are trying to place more flags than allowed. You can only place " + roundMineCount + " flags for this round.",
                    [
                        {
                            text: "Continue",
                        },
                    ]
                )
            }
        }
        else if (setPuzzle[row].innerArray[column].isFlagged) {
            if (setPuzzle[row].innerArray[column].val === -1) {
                var tempCorrectCountHolder = correctFlagCounter;
                setCorrectFlagCounter(tempCorrectCountHolder - 1)
            }
            setPuzzle[row].innerArray[column].isFlagged = false;
            var tempFlagCounter = flagCounter;
            setFlagCounter(tempFlagCounter - 1)
        }
    }

    function squareTraverser(row, column) {
        if (setPuzzle[row].innerArray[column].val === 0 && !setPuzzle[row].innerArray[column].isOpened) {
            setPuzzle[row].innerArray[column].isOpened = true;
            if (setPuzzle[row].innerArray[column].isFlagged) {
                flaggingHandler(row, column)
            }

            stackObject.push(new StackModelClass(row, column))

            while (stackObject.length > 0) {
                var tempIndexHolder = stackObject.pop();
                setPuzzle[tempIndexHolder.row].innerArray[tempIndexHolder.column].isOpened = true;
                if (setPuzzle[tempIndexHolder.row].innerArray[tempIndexHolder.column].isFlagged) {
                    flaggingHandler(tempIndexHolder.row, tempIndexHolder.column)
                }
                for (columnSubtractor = -1; columnSubtractor <= 1; columnSubtractor++) {
                    for (rowSubtractor = -1; rowSubtractor <= 1; rowSubtractor++) {
                        if ((tempIndexHolder.row + rowSubtractor >= 0) && (tempIndexHolder.row + rowSubtractor <= 15) && (tempIndexHolder.column + columnSubtractor >= 0) && (tempIndexHolder.column + columnSubtractor <= 8) && (setPuzzle[tempIndexHolder.row + rowSubtractor].innerArray[tempIndexHolder.column + columnSubtractor].val === 0) && (!setPuzzle[tempIndexHolder.row + rowSubtractor].innerArray[tempIndexHolder.column + columnSubtractor].isOpened)) {
                            stackObject.push(new StackModelClass(tempIndexHolder.row + rowSubtractor, tempIndexHolder.column + columnSubtractor))
                        }
                        else if ((tempIndexHolder.row + rowSubtractor >= 0) && (tempIndexHolder.row + rowSubtractor <= 15) && (tempIndexHolder.column + columnSubtractor >= 0) && (tempIndexHolder.column + columnSubtractor <= 8) && ((setPuzzle[tempIndexHolder.row + rowSubtractor].innerArray[tempIndexHolder.column + columnSubtractor].val > 0))) {
                            setPuzzle[tempIndexHolder.row + rowSubtractor].innerArray[tempIndexHolder.column + columnSubtractor].isOpened = true;
                            if (setPuzzle[tempIndexHolder.row + rowSubtractor].innerArray[tempIndexHolder.column + columnSubtractor].isFlagged) {
                                flaggingHandler(tempIndexHolder.row + rowSubtractor, tempIndexHolder.column + columnSubtractor);
                            }
                        }
                    }
                }
            }
        }
    }

    function tileOpeningHandler(row, column) {
        if (setPuzzle[row].innerArray[column].val === -1) {
            Alert.alert(
                "Game over",
                "A mine exploded.",
                [
                    {
                        text: "Start a new game.",
                        onPress: () => restartGameHandler()
                    },
                ]
            )
        }
        if (setPuzzle[row].innerArray[column].val === 0) {
            squareTraverser(row, column)
        }
        else {
            setPuzzle[row].innerArray[column].isOpened = true;
            if (setPuzzle[row].innerArray[column].isFlagged) {
                flaggingHandler(row, column)
            }
        }
        setChildHook(column);
        setParentHook(row);
    }

    function valuePlacingHandler(row, column) {
        var returnValue = 0;
        for (rowSubtractor = -1; rowSubtractor <= 1; rowSubtractor++) {
            for (columnSubtractor = -1; columnSubtractor <= 1; columnSubtractor++) {
                if ((row + rowSubtractor >= 0) && (column + columnSubtractor >= 0) && (row + rowSubtractor <= 15) && (column + columnSubtractor <= 15) && setPuzzle[row + rowSubtractor].innerArray[column + columnSubtractor].val > -1) {
                    setPuzzle[row + rowSubtractor].innerArray[column + columnSubtractor].val++
                }
            }
        }
    }

    function minePlacingHandler() {
        setPuzzle = JSON.parse(JSON.stringify(InitialStatePuzzle))
        var mineCount = Math.floor((Math.random() * 20) + 10)
        setRoundMineCount(mineCount)
        for (currentCount = 0; currentCount < mineCount; currentCount++) {
            var currentRow = Math.floor((Math.random() * 15))
            var currentColumn = Math.floor((Math.random() * 8))
            if (setPuzzle[currentRow].innerArray[currentColumn].val !== -1) {
                setPuzzle[currentRow].innerArray[currentColumn].val = -1
                valuePlacingHandler(currentRow, currentColumn)
            }
            else {
                mineCount++;
            }
        }
        setIsPuzzleSet(true);
    }

    useEffect(() => {
        if (!isPuzzleSet) {
            minePlacingHandler()
        }
    }, [isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.headerContainer}>
                <View style={styles.upperIconWrapper}>
                    <View style={styles.mineIconContainer}>
                        <MaterialCommunityIcons name="mine" size={30} color="#eeeeee" />
                    </View>
                    <View style={styles.mineCountContainer}>
                        <Text style={styles.countTxt}>{roundMineCount}</Text>
                    </View>
                </View>
                <View style={styles.upperIconWrapper}>
                    <View style={styles.mineIconContainer}>
                        <MaterialCommunityIcons name="flag-remove" size={30} color="#eeeeee" />
                    </View>
                    <View style={styles.mineCountContainer}>
                        <Text style={styles.countTxt}>{flagCounter}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.goBackIconWrapper}
                    onPress={
                        () => Alert.alert(
                            "Exit game",
                            "Are you sure you want to exit the current game.",
                            [
                                {
                                    text: "Yes",
                                    onPress: () => goBackNavigationHandler()
                                },
                                {
                                    text: "No",
                                }
                            ]
                        )
                    }
                >
                    <MaterialCommunityIcons name="close" size={30} color="#eeeeee" />
                </TouchableOpacity>
            </View>
            <View style={styles.puzzleContainer}>
                <FlatList
                    data={setPuzzle}
                    keyExtractor={item => item.id.toString()}
                    style={{ borderWidth: 0, padding: 3, }}
                    renderItem={({ item, index }) => {
                        let parentData = item;
                        return (
                            <View style={styles.innerFlatlistContainer}>
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
                    }
                    }
                    alwaysBounceVertical={false}
                />
            </View>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity
                    style={styles.restartButtonContainer}
                    onPress={
                        () => Alert.alert(
                            "Restart Game",
                            "If you restart then a new puzzle will be generated. Are you sure you want to start a new game?",
                            [
                                {
                                    text: "Yes, start a new game",
                                    onPress: () => restartGameHandler(),
                                },
                                {
                                    text: "No, continue with current game",
                                },
                            ]
                        )
                    }
                >
                    <Text style={styles.restartButtonTxt}>Restart Game</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.resetButtonContainer}
                    onPress={
                        () => Alert.alert(
                            "Reset flags",
                            "Are you sure that you want to reset all the flags? You will lose correctly placed flags too.",
                            [
                                {
                                    text: "Yes, reset flags",
                                    onPress: () => resetFlagHandler(),
                                },
                                {
                                    text: "No, continue as it is",
                                }
                            ]
                        )
                    }
                >
                    <Text style={styles.resetButtonTxt}>Reset Flags</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default GameScreen