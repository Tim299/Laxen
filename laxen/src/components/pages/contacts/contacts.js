import React from 'react';
import { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../modules/colors/colors';
import { styles } from './contacts_stylesheet';
import { FIREBASE_AUTH } from '../login/FirebaseConfig';

import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    name: '',
  },
  {
    id: '2',
    name: '',
  },
  {
    id: '3',
    name: '',
  },
];

function ContactsScreen() {
  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    navigation.navigate('HomeScreen'); // Navigate to 'AnotherScreen'
  };

  return (
    <View style={styles.contactsViewContainer}>
      <View style={styles.headerContainer}>
        <Text h1 style={styles.headerFont} onPress={goToAnotherScreen}>
          CONTACTS
        </Text>
        <Icon
          name="fish-outline"
          size={30}
          color={colors.black}
          onPress={goToAnotherScreen}
        />
      </View>
      <View style={styles.contactsView}>
        <Text>Contacts</Text>
      </View>
    </View>
  );
}

export default ContactsScreen;
