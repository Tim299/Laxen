import { StyleSheet } from "react-native";
import * as colors from "../../modules/colors/colors"

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        height: '8%',
        width: '100%',
        paddingLeft: '4%',
        paddingRight: '4%',
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        paddingBottom: '0%',
        fontFamily: 'poppins',
    },
    headerFont: {
        width: 'fit-content',
        backgroundColor: colors.white,
        fontFamily: 'poppins',
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.black,
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
        backgroundColor: colors.lightblue,
        marginLeft: '3%',
        marginRight: '3%'
    },
    settingsListItem: {
        display: 'flex',
        height: 90,
        width: '100%',
        backgroundColor: colors.white,
        marginTop: '1%',
        marginBottom: '1%',
        borderRadius: 10
    },
    settingsListText: {
        display: 'flex',
        fontSize: 25,
        marginTop: 8,
        marginLeft: 8,
        fontWeight: '500',
        color: colors.black
    },
    settingsListDesc: {
        display: 'flex',
        fontSize: 16,
        marginLeft: 8.5
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

export { styles };