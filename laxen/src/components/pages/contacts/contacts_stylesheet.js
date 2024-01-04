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
    width: 60,
    height: 60,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    marginBottom: '5%',
  },
  createContactButtonText: {
    fontFamily: 'poppins',
    fontSize: 26,
    color: colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 30,
    height: 12,
    transform: [{rotate: '180deg'}],
    marginRight: 3,
    alignContent: 'center',
    alignItems: 'center',
  },
});

export {styles};
