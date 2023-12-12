/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';

import * as colors from "./components/modules/colors/colors";
import { styles } from "./App_stylesheet";
import HomeScreen from "./components/pages/home/home";
import GroupsScreen from "./components/pages/groups/groups";
import SettingsScreen from "./components/pages/settings/settings";


function ContactsScreen() {
  return(
    <View style={styles.contactsViewContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerFont}>Kontakter</Text>
      </View>
      <View>
        <Text>Contacts</Text>
      </View>
    </View>
  );
}


const tabs = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>


      <tabs.Navigator
       tabBarPosition='bottom'
       screenOptions={{
        tabBarStyle: styles.tabs,
        tabBarIndicatorStyle: styles.tabsIndicator,
        tabBarAndroidRipple: {color: colors.white}
       }}
      >
        <tabs.Screen 
          name="home" 
          component={HomeScreen}
          options={{
            tabBarIcon:({ focused }) => (
              <Icon name="home" color={ focused ? colors.darkblue : colors.grey} 
              size={ focused ? 24 : 24}/>
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
            title: "HOME"
          }}
        />


        <tabs.Screen name="groups" component={GroupsScreen}
          options={{
            tabBarIcon:({ focused }) => (
              <Icon name="comments" color={ focused ? colors.darkblue : colors.grey} 
              size={ focused ? 24 : 24}/>
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
          }}
        />


        <tabs.Screen name="contacts" component={ContactsScreen}
          options={{
            tabBarIcon:({ focused }) => (
              <Icon name="user" color={ focused ? colors.darkblue : colors.grey} 
              size={ focused ? 24 : 24}/>
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
          }}
        />


        <tabs.Screen name="settings" component={SettingsScreen}
          options={{
            tabBarIcon:({ focused }) => (
              <Icon name="gear" color={ focused ? colors.darkblue : colors.grey} 
              size={ focused ? 24 : 24}/>
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
          }}
        />
      </tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
