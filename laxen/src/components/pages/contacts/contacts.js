import * as React from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from './contacts_stylesheet';
import PaymentFeed from '../../modules/payment/payment';
import {Header, Button} from 'react-native-elements';
import {IconButton, MD3Colors} from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '../../modules/colors/colors';
import CreateContacts from './createContact';
import { useNavigation } from '@react-navigation/native';

function ContactsScreen() {
    const navigation = useNavigation();
    return (
      <View style={styles.contactsViewContainer}>
        <View style={styles.headerContainer}>
        <Text h1 style={styles.headerFont}>
          Kontakter
        </Text>
        </View>
        <View>
            <TouchableOpacity
                onPress={() => {navigation.navigate("createContact")}}
                style={styles.createContactButton}
                >
                <Text style={styles.createContactButtonText}>Lägg till</Text>
                {/* <Icon
                    name="add-outline"
                    size={60}
                    color={colors.black}
                /> */}
            </TouchableOpacity>
        </View>
      </View>
    );
  }

export default ContactsScreen;