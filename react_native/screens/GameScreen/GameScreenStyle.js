import { StyleSheet } from "react-native"

const styles = StyleSheet.create(
    {
        bottomButtonContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-around",
            paddingHorizontal: 10,
        },

        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222831",
        },

        countTxt: {
            fontSize: 20,
            fontWeight: "600",
            color: "#eeeeee",
        },

        goBackIconWrapper: {
            flex: 1,
            backgroundColor: "#00adb5",
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 5,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        headerContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 4,
            marginHorizontal: 5,
        },

        innerFlatlistContainer: {
            flex: 1,
        },

        mildDangerText: {
            color: "#007aff",
            fontSize: 20,
            fontWeight: "600",
        },

        mineIconContainer: {
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },

        mineCountContainer: {
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },

        notOpenedSquare: {
            width: 35,
            height: 35,
            borderWidth: 2,
            borderColor: "#00adb5",
            borderRadius: 5,
            backgroundColor: "#222831",
            marginHorizontal: 2,
            marginVertical: 2,
            justifyContent: "center",
            alignItems: "center",
        },

        openedSquare: {
            width: 35,
            height: 35,
            backgroundColor: "#00adb5",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 2,
            marginVertical: 2,
        },

        puzzleContainer: {
            flex: 13,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
        },

        resetButtonContainer: {
            flex: 1,
            height: "100%",
            borderWidth: 2,
            borderRadius: 40,
            borderColor: "#00adb5",
            backgroundColor: "#222831",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        resetButtonTxt: {
            fontSize: 18,
            fontWeight: "600",
            color: "#00adb5",
        },

        restartButtonContainer: {
            flex: 1,
            height: "100%",
            borderRadius: 40,
            backgroundColor: "#00adb5",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        restartButtonTxt: {
            fontSize: 18,
            fontWeight: "600",
            color: "#eeeeee",
        },

        upperIconWrapper: {
            flex: 2,
            flexDirection: "row",
            flexWrap: "wrap",
            height: "100%",
            backgroundColor: "#00adb5",
            borderRadius: 40,
            padding: 5,
            marginHorizontal: 5,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        valueText: {
            fontSize: 20,
            fontWeight: "600",
            color: "#eeeeee",
        },
    }
)

export default styles