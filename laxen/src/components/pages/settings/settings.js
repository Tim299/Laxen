import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../modules/colors/colors';
import { styles } from './settings_stylesheet';
import { FIREBASE_AUTH } from '../../../../FirebaseConfig';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SettingsScreen() {
  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    navigation.navigate('HomeScreen'); // Navigate to 'AnotherScreen'
  };

  const goToSubSetting = () => {
    navigation.navigate('subsetting');
  }

  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');

  const handleNumberChange = () => {
    console.log("\nNumber: " + phoneNumber);
  }

  const handleUserChange = () => {
    console.log("\nUsername: " + userName);
  }

  return (
    <View style={styles.settingsViewContainer}>
      <View style={styles.headerContainer}>
        <Text h1 style={styles.headerFont} onPress={goToAnotherScreen}>
          Inställningar
        </Text>
        <Image source={require('../login/fish.png')} style={styles.logo} />
      </View>
      <View style={styles.settingsView}>
        <View style={{
          display: 'flex',
          height: 100,
          width: '100%',
          backgroundColor: colors.white,
          marginBottom: '2%',
          borderRadius: 10,
          elevation: 3,
          fontFamily: 'poppins',
        }}>
          <Text h2 style={styles.settingsListText}>Användarnamn</Text>
          <TextInput
            value={userName}
            onChangeText={setUserName}
            onEndEditing={handleUserChange}
            placeholder="Ange användarnamn..."
            style={{
              fontSize: 14,
              marginLeft: 6,
              marginBottom: 8,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderRadius: 10,
              marginRight: 6 
            }}/>
        </View>
        <View style={{
          display: 'flex',
          height: 100,
          width: '100%',
          backgroundColor: colors.white,
          marginBottom: '2%',
          borderRadius: 10,
          elevation: 3,
          fontFamily: 'poppins',
        }}>
          <Text h2 style={styles.settingsListText}>Telefonnummer</Text>
          <TextInput
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            onEndEditing={handleNumberChange}
            placeholder="Ange telefonnummer..."
            style={{
              fontSize: 14,
              marginLeft: 6,
              marginBottom: 8,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderRadius: 10,
              marginRight: 6 
            }}/>
        </View>
        <TouchableOpacity onPress={goToSubSetting}>
          <View style={styles.settingsListItem}>
            <View style={{ width: '80%', flex: 1 }}>
              <Text style={styles.settingsListText}>Om appen</Text>
              <Text style={styles.settingsListDesc}>Verion, licenser</Text>
            </View>
            <Icon
              style={{
                flex: 1,
                marginLeft: '85%',
                marginRight: 'auto',
                marginTop: '-10%',
                marginBottom: 'auto',
              }}
              name='information-circle-outline'
              size={30}
              color={colors.black}
            />
          </View>
        </TouchableOpacity>
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logga ut" />
      </View>
    </View>
  );
}

export default SettingsScreen;
