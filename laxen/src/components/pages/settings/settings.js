import React from 'react';
import  {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { styles } from "./settings_stylesheet";

function SettingsScreen() {
    return (
      <View style={styles.settingsViewContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerFont}>Inställningar</Text>
        </View>
        <View style={styles.settingsView}>
          <Text>Settings</Text>
        </View>
      </View>
    );
  }

export default SettingsScreen;