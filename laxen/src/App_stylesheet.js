import { StyleSheet } from "react-native";
import * as colors from "./components/modules/colors/colors"

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        height: "10%",
    },
    headerFont: {
        color: colors.darkblue,
        fontSize: 20,
        fontWeight: "bold"
    },
    homeViewContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    homeView: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: colors.white,
        height: "90%"
    },
    settingsViewContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    settingsView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightblue,
        height: "90%"
    },
    groupsViewContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    groupsView: {

    },
    contactsViewContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    contactsView: {

    },
    tabs: {
        backgroundColor: colors.white,
        height: "7%",
        borderTopWidth: 1,
        borderColor: colors.grey
    },
    tabsIndicator: {
        backgroundColor: colors.beige,
        height: "100%",
        borderRadius: 10,
        borderColor: colors.grey
    },
    paymentsTitle: {
        fontSize: 30,
        marginLeft: "5%",
        color: colors.black,
        fontWeight: "400"
    },
    paymentsFeedContainer: {
        margin: "2%",
        width: "96%",
    }
});

export {styles};