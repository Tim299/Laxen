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
import { styles } from './settings_stylesheet';
import { FIREBASE_AUTH } from '../../../../FirebaseConfig';

import { useNavigation } from '@react-navigation/native';
import { subSetting } from '../../modules/settings/subsetting';

const DATA = [
  {
    id: '1',
    title: 'General Settings',
    description: 'Appearance, language',
    icon: 'settings-outline'
  },
  {
    id: '2',
    title: 'Group Settings',
    description: 'Notifications, history',
    icon: 'people-outline'
  },
  {
    id: '3',
    title: 'Account Settings',
    description: 'Email, password, profile picture',
    icon: 'person-circle-outline'
  },
  {
    id: '4',
    title: 'About the App',
    description: 'Version, license',
    icon: 'information-circle-outline'
  },
];

const ListItem = ({ title, description, icon }) => (
  <View style={styles.settingsListItem}>
    <View style={{ width: '80%', flex: 1 }}>
      <Text style={styles.settingsListText} >{title}</Text>
      <Text style={styles.settingsListDesc} >{description}</Text>
    </View>
    <Icon
      style={{ flex: 1, marginLeft: '85%', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }}
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

  const settingItem = ({item}) => (
    <ListItem
      title={item.title}
      description={item.description}
      icon={item.icon}
      onPress={() => {
        navigation.navigate('SubSetting', {
          settingID: item.id
        });
      }}
    />
  );

  return (
    <View style={styles.settingsViewContainer}>
      <View style={styles.headerContainer}>
        <Text h1 style={styles.headerFont} onPress={goToAnotherScreen}>
          SETTINGS
        </Text>
        <Icon
          name="fish-outline"
          size={30}
          color={colors.black}
          onPress={goToAnotherScreen}
        />
      </View>
      <View style={styles.settingsView}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={settingItem}
        />
        <Button
          onPress={() => FIREBASE_AUTH.signOut()}
          title="Logout"
        />
      </View>
    </View>
  );
}

export default SettingsScreen;
