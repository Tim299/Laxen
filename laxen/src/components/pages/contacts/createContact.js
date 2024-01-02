import * as React from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { FIREBASE_DB } from '../../../../FirebaseConfig';

function CreateContact() {
    
}

export default CreateContact;