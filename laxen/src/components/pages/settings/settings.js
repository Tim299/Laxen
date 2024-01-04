import React, {useState, useEffect} from 'react';
import {PropsWithChildren} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../modules/colors/colors';
import {styles} from './settings_stylesheet';
import {FIREBASE_AUTH, FIREBASE_DB} from '../../../../FirebaseConfig';
import {collection, doc, setDoc, getDocs, updateDoc} from 'firebase/firestore';

import {useNavigation} from '@react-navigation/native';
import {subSetting} from '../../modules/settings/subsetting';
import {getAuth, onAuthStateChanged, updateCurrentUser} from 'firebase/auth';

const ListItem = ({title, description, icon}) => (
  <View style={styles.settingsListItem}>
    <View style={{width: '80%', flex: 1}}>
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
  const [currentUserId, setCurrentUserId] = useState(null);

  const goToAnotherScreen = () => {
    navigation.navigate('HomeScreen');
  };

  const goToSubSetting = () => {
    navigation.navigate('subsetting');
  };

  useEffect(() => {
    const auth = FIREBASE_AUTH;
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        setCurrentUserId(uid);
      }
    });
  }, []);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');

  const handleNumberChange = newNumber => {
    const numericText = newNumber.replace(/[^0-9]/g, '');
    setPhoneNumber(numericText);
  };
  const handleUserChange = newUser => {
    setUserName(newUser);
  };

  const updatePhoneNumber = async () => {
    try {
      const userRef = doc(collection(FIREBASE_DB, 'users'), currentUserId);

      await updateDoc(userRef, {
        phoneNumber: phoneNumber,
      });
    } catch (error) {
      console.error('Error updating phone number:', error);
    }
  };

  const updatUserName = async () => {
    try {
      const userRef = doc(collection(FIREBASE_DB, 'users'), currentUserId);

      await updateDoc(userRef, {
        username: userName,
      });
    } catch (error) {
      console.error('Error updating phone number:', error);
    }
  };

  return (
    <View style={styles.settingsViewContainer}>
      <View style={styles.headerContainer}>
        <Text h1 style={styles.headerFont} onPress={goToAnotherScreen}>
          Inställningar
        </Text>
        <Image source={require('../login/fish.png')} style={styles.logo} />
      </View>
      <View style={styles.settingsView}>
        <View
          style={{
            display: 'flex',
            height: 100,
            width: '100%',
            backgroundColor: colors.white,
            marginBottom: '2%',
            borderRadius: 10,
            elevation: 3,
            fontFamily: 'poppins',
          }}>
          <Text h2 style={styles.settingsListText}>
            Användarnamn
          </Text>
          <TextInput
            value={userName}
            onChangeText={handleUserChange}
            onEndEditing={updatUserName}
            placeholder="Ange användarnamn..."
            style={{
              fontSize: 14,
              marginLeft: 6,
              marginBottom: 8,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderRadius: 10,
              marginRight: 6,
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            height: 100,
            width: '100%',
            backgroundColor: colors.white,
            marginBottom: '2%',
            borderRadius: 10,
            elevation: 3,
            fontFamily: 'poppins',
          }}>
          <Text h2 style={styles.settingsListText}>
            Telefonnummer
          </Text>
          <TextInput
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={handleNumberChange}
            onEndEditing={updatePhoneNumber}
            placeholder="Ange telefonnummer..."
            style={{
              fontSize: 14,
              marginLeft: 6,
              marginBottom: 8,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderRadius: 10,
              marginRight: 6,
            }}
          />
        </View>
        <TouchableOpacity onPress={goToSubSetting}>
          <View style={styles.settingsListItem}>
            <View style={{width: '80%', flex: 1}}>
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
              name="information-circle-outline"
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
