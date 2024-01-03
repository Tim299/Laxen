import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../modules/colors/colors';
import { styles } from './settings_stylesheet';
import { FIREBASE_AUTH } from '../../../../FirebaseConfig';

import { useNavigation } from '@react-navigation/native';
import { subSetting } from '../../modules/settings/subsetting';

const DATA = [
  {
    id: '1',
    title: 'About the App',
    description: 'Version, license',
    icon: 'information-circle-outline',
  },
];

const ListItem = ({ title, description, icon }) => (
  <View style={styles.settingsListItem}>
    <View style={{ width: '80%', flex: 1 }}>
      <Text style={styles.settingsListText}>{title}</Text>
      <Text style={styles.settingsListDesc}>{description}</Text>
    </View>
    <Icon
      style={{
        flex: 1,
        marginLeft: '85%',
        marginRight: 'auto',
        marginTop: '-10%',
        marginBottom: 'auto',
      }}
      name={icon}
      size={30}
      color={colors.black}
    />
  </View>
);

function SettingsScreen() {
  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    navigation.navigate('HomeScreen'); // Navigate to 'AnotherScreen'
  };

  const settingItem = ({ item }) => (
    <ListItem
      title={item.title}
      description={item.description}
      icon={item.icon}
      onPress={() => {
        navigation.navigate('SubSetting', {
          settingID: item.id,
        });
      }}
    />
  );

  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');

  const handleNumberChange = (newNumber) => {
    const numericText = newNumber.replace(/[^0-9]/g, '');
    setPhoneNumber(numericText);
    console.log("\nNumber: " + phoneNumber);
  }

  const handleUserChange = (newUser) => {
    setUserName(newUser);
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
            onChangeText={handleUserChange}
            placeholder="Ange användarnamn..."
            style={{ fontSize: 14, marginLeft: 6, marginBottom: 8, borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, marginRight: 6 }}
          />
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
            onChangeText={handleNumberChange}
            placeholder="Ange telefonnummer..."
            style={{ fontSize: 14, marginLeft: 6, marginBottom: 8, borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, marginRight: 6 }}
          />
        </View>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={settingItem}
        />
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logga ut" />
      </View>
    </View>
  );
}

export default SettingsScreen;
