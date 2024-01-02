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
  contactsViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
  createContactButton: {
    display: 'flex',
    justifyContent: 'center',
    borderColor: colors.accent,
    width: '50%',
    height: '30%',
    backgroundColor: colors.primary,
    alignSelf: "center",
    borderRadius: 15,
    elevation: 10,
  },
  createContactButtonText: {
    fontFamily: 'poppins',
    fontSize: 26,
    color: colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export {styles};
