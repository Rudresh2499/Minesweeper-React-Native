import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        bottomContainer: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            borderWidth: 1,
        },

        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222831",
        },

        contentContainer: {
            flex: 11,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
        },

        contentItemContainer: {
            flex: 1,
            width: "100%",
            backgroundColor: "#393e46",
            borderRadius: 20,
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

        valueTxt: {
            fontWeight: "600",
            color: "#eeeeee",
        },
    }
)

export default styles