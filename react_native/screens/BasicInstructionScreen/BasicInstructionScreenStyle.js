import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        arrowContainer: {
            borderRadius: 20,
            padding: 2,
            marginHorizontal: 5,
        },

        bottomContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        },

        bottomButtonContainer: {
            backgroundColor: "#00adb5",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            padding: 5,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 2, },
        },

        bottomButtonWrapper: {
            marginHorizontal: 10,
        },

        bottomSpacerElement: {
            flex: 4,
            height: "100%",
        },

        container: {
            flex: 1,
            backgroundColor: "#222831",
            justifyContent: "center",
            alignItems: "center",
        },

        contentContainer: {
            flex: 11,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
        },

        contentItemContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#393e46",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            padding: 10,
            marginVertical: 5,
        },

        headerButtonsContainer: {
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
        },

        headerButtonIconContainer: {
            backgroundColor: "#00adb5",
            padding: 5,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 2, },
        },

        headerContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        },

        instructionContainer: {
            flex: 1,
            backgroundColor: "#00adb5",
            padding: 15,
            borderRadius: 15,
            marginHorizontal: 5,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        instructionTxt: {
            fontSize: 15,
            fontWeight: "600",
            color: "#eeeeee",
            textAlign: "justify",
        },

        mineSquare: {
            width: 35,
            height: 35,
            borderRadius: 5,
            backgroundColor: "#ff0000",
            marginHorizontal: 2,
            marginVertical: 2,
            justifyContent: "center",
            alignItems: "center",
        },

        openedSquare: {
            width: 35,
            height: 35,
            borderRadius: 5,
            backgroundColor: "#00adb5",
            marginHorizontal: 2,
            marginVertical: 2,
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

        titleContainer: {
            flex: 6,
            height: "80%",
            backgroundColor: "#00adb5",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 2, },
            marginLeft: 10,
        },

        titleTxt: {
            fontSize: 20,
            fontWeight: "600",
            color: "#eeeeee",
        },

        valueText: {
            fontSize: 20,
            fontWeight: "600",
            color: "#eeeeee",
        },
    }
)

export default styles