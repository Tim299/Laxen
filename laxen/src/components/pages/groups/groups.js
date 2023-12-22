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
import {styles} from './groups_stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../modules/colors/colors';

import {useNavigation} from '@react-navigation/native';

// import GroupCard from '../../modules/group/group';
import GroupCards from '../../modules/group/groupcards';

function GroupsScreen() {
  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    navigation.navigate('HomeScreen'); // Navigate to 'AnotherScreen'
  };

  return (
    <View style={styles.groupsViewContainer}>
      <View style={styles.headerContainer}>
        <Text h1 style={styles.headerFont} onPress={goToAnotherScreen}>
          GRUPPER
        </Text>
        <Icon
          name="fish-outline"
          size={30}
          color={colors.black}
          onPress={goToAnotherScreen}
        />
      </View>
      <Button
        title='Create new group'
        onPress={() => {navigation.navigate("createGroup")}}
      />
      <View>
        <GroupCards></GroupCards>
      </View>
    </View>
  );
}

export default GroupsScreen;
