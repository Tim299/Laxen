import React from 'react';
import {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {styles} from './settings_stylesheet';
import {FIREBASE_AUTH} from '../login/FirebaseConfig';

function SettingsScreen() {
  return (
    <View style={styles.settingsViewContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerFont}>Inställningar</Text>
      </View>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout"></Button>
    </View>
  );
}

export default SettingsScreen;
