import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        bottomItemWrapper: {
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },

        bottomTextWrapper: {
            backgroundColor: "#00adb5",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 10,
            marginTop: 10,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        bottomTxt: {
            fontSize: 15,
            fontWeight: "600",
            color: "#eeeeee",
        },

        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#222831",
        },

        headerContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        headerIconContainer: {
            flex: 3,
            justifyContent: "flex-end",
            alignItems: "center",
        },

        iconStyle: {
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        lowerViewContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "93%",
            borderRadius: 20,
            backgroundColor: "#393e46",
            marginVertical: 5,
            justifyContent: "center",
            alignItems: "center",
        },

        middleViewContainer: {
            flex: 2,
            width: "93%",
            borderRadius: 20,
            backgroundColor: "#393e46",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 5,
        },

        playBtnContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        spacerElement: {
            flex: 1,
        },

        titleTxt: {
            fontSize: 30,
            fontWeight: "600",
            color: "#eeeeee",
            padding: 10,
        },

        titleTxtContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            borderRadius: 20,
            backgroundColor: "#00adb5",
            paddingHorizontal: 70,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 5,
            shadowOffset: { height: 1, },
        },

        upperViewContainer: {
            flex: 3,
            width: "93%",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
        },

        userMessageContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00adb5",
            borderRadius: 20,
            paddingHorizontal: 10,
            shadowColor: "#000000",
            shadowOpacity: 1,
            shadowRadius: 4,
            shadowOffset: { height: 1, },
        },

        userMessageTxt: {
            fontSize: 16,
            fontWeight: "600",
            textAlign: "justify",
            color: "#eeeeee",
        },
    }
)

export default styles