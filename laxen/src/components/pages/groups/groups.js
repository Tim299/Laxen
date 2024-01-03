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
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './groups_stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../modules/colors/colors';

import {useNavigation} from '@react-navigation/native';

import GroupCards from '../../modules/group/groupcards';

function GroupsScreen() {
  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.groupsViewContainer}>
      <View style={styles.headerContainer}>
        <Text h1 style={styles.headerFont} onPress={goToAnotherScreen}>
          GRUPPER
        </Text>
        <Image source={require('../login/fish.png')} style={styles.logo} />
      </View>
      <View>
        <GroupCards></GroupCards>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('createGroup');
        }}
        style={styles.createGroupIcon}>
        <Icon name="add-outline" size={60} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
}

export default GroupsScreen;
