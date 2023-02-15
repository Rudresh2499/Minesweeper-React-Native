import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
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

        bottomStartButtonContainer: {
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 8,
            borderRadius: 20,
            backgroundColor: "#00adb5",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 2, },
        },

        bottomContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
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
            width: "100%",
            backgroundColor: "#393e46",
            borderRadius: 20,
            padding: 10,
            marginVertical: 5,
        },

        elementTxt: {
            fontSize: 20,
            fontWeight: "600",
            color: "#eeeeee",
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

        iconContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        messageTxt: {
            fontSize: 15,
            fontWeight: "600",
            color: "#eeeeee",
            textAlign: "justify",
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

        txtContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        uiElementButton: {
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00adb5",
            padding: 10,
            borderRadius: 30,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        uiElementContainer: {
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
        },

        uiElementCounter: {
            width: "90%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00adb5",
            padding: 10,
            borderRadius: 30,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        userMessageContainer: {
            flex: 1,
            backgroundColor: "#00adb5",
            borderRadius: 20,
            marginLeft: 10,
            paddingHorizontal: 15,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        winConditionContainer: {
            flex: 2,
            width: "100%",
            borderRadius: 20,
            backgroundColor: "#393e46",
            marginVertical: 5,
        },

        winConditionHeaderContainer: {
            flex: 1,
            width: "100%",
            backgroundColor: "#00adb5",
            borderWidth: 1,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        winConditionHeaderTxt: {
            fontSize: 22,
            fontWeight: "600",
            color: "#eeeeee",
        },

        winConditionTextContainer: {
            flex: 3,
            width: "100%",
            backgroundColor: "#00adb5",
            borderWidth: 1,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 15,
            marginTop: 15,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },
    }
)

export default styles