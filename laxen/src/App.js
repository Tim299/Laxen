/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

import {FIREBASE_AUTH} from '../FirebaseConfig';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import * as colors from './components/modules/colors/colors';
import {styles} from './App_stylesheet';
import HomeScreen from './components/pages/home/home';
import GroupsScreen from './components/pages/groups/groups';
import SettingsScreen from './components/pages/settings/settings';
import SubGroup from './components/modules/group/subgroup';
import createGroupForm from './components/modules/group/createGroup';
import Login from './components/pages/login/login';
import { getAuth,onAuthStateChanged } from "firebase/auth";

function ContactsScreen() {
  return (
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

const stack = createStackNavigator();
const tabs = createMaterialTopTabNavigator();

function AppStack() {
  return(
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="app"
        screenOptions={{
          headerShown: false,
        }}
      > 
        <stack.Screen
          name="app"
          component={App}
        />

        <stack.Screen
          name="subgroup"
          component={SubGroup}
        />

        <stack.Screen
          name="createGroup"
          component={createGroupForm}
        />

      </stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, user => {
      setUser(user);
    });
  }, []);

  return (
    // <NavigationContainer>
    // <View>
      user ? (
        <tabs.Navigator
          tabBarPosition="bottom"
          screenOptions={{
            tabBarStyle: styles.tabs,
            tabBarIndicatorStyle: styles.tabsIndicator,
            tabBarAndroidRipple: {color: colors.white},
          }}>
          {/* <tabs.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  name="home"
                  color={focused ? colors.darkblue : colors.grey}
                  size={focused ? 24 : 24}
                />
              ),
              tabBarShowIcon: true,
              tabBarShowLabel: false,
              title: 'HomeScreen',
            }}
          /> */}

        <tabs.Screen
          name="contacts"
          component={ContactsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? "people-sharp" : "people-outline"}
                color={focused ? colors.black : colors.black}
                size={focused ? 24 : 24}
              />
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
            tabBarIconStyle: styles.tabBarIcons,
          }}
        />

        <tabs.Screen
          name="groups"
          component={GroupsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? "wallet-sharp" : "wallet-outline"}
                color={focused ? colors.black : colors.black}
                size={focused ? 24 : 24}
              />
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
            tabBarIconStyle: styles.tabBarIcons,
          }}
        />

        <tabs.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? "settings-sharp" : "settings-outline"}
                color={focused ? colors.black : colors.black}
                size={focused ? 24 : 24}
              />
            ),
            tabBarShowIcon: true,
            tabBarShowLabel: false,
            tabBarIconStyle: styles.tabBarIcons,
          }}
        />
      </tabs.Navigator>
      ) : (
        <Login/>
      )
    // </View>
    // </NavigationContainer>
  );
}

export default AppStack;
