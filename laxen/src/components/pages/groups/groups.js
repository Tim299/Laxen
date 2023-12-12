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
import { styles } from "./groups_stylesheet";

function GroupsScreen() {
    return(
      <View style={styles.groupsViewContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerFont}>Grupper</Text>
        </View>
        <View>
          <Text>Groups</Text>
        </View>
      </View>
    );
  }

export default GroupsScreen;