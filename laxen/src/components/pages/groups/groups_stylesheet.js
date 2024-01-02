import {StyleSheet} from 'react-native';
import * as colors from '../../modules/colors/colors';

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
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  homeView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    height: '90%',
  },
  settingsViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  settingsView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightblue,
    height: '90%',
  },
  groupsViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
  },
  groupsView: {},
  contactsViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  contactsView: {},
  tabs: {
    backgroundColor: colors.white,
    height: '7%',
    borderTopWidth: 1,
    borderColor: colors.grey,
  },
  tabsIndicator: {
    backgroundColor: colors.beige,
    height: '100%',
    borderRadius: 10,
    borderColor: colors.grey,
  },
  paymentsTitle: {
    fontSize: 30,
    marginLeft: '5%',
    color: colors.black,
    fontWeight: '400',
  },
  paymentsFeedContainer: {
    margin: '2%',
    width: '96%',
  },
  navBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '0%',
  },
  createGroupIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: colors.primary,
    alignSelf: 'center',
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
  contactsIcon: {
    width: 30,
    height: 30,
  },
  createButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '-15%',
    height: '15%',
  },
  createPaymentButton: {
    display: 'flex',
    justifyContent: 'center',
    width: '60%',
    height: '60%',
    backgroundColor: colors.primary,
    alignSelf: "center",
    borderRadius: 15,
    elevation: 5,
    alignSelf: 'center',
  },
  createPaymentButtonText: {
    fontFamily: 'poppins',
    fontSize: 26,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export {styles};
