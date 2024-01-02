import React, {useState, useEffect, useContext} from 'react';
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
} from 'react-native';
import {styles} from './groups_stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../modules/colors/colors';
import {UserIdContext} from '../../../App';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import {FIREBASE_DB} from '../../../../FirebaseConfig';

import {useNavigation} from '@react-navigation/native';

// import GroupCard from '../../modules/group/group';
import GroupCards from '../../modules/group/groupcards';

function GroupsScreen() {
  const navigation = useNavigation();
  const {currentUserId} = useContext(UserIdContext);

  const handleCreateGroup = () => {
    navigation.navigate('createGroup', {currentUserId});
  };

  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    const fetchFriendData = async () => {
      try {
        const usersRef = collection(FIREBASE_DB, 'users');
        const currentUserRef = doc(usersRef, currentUserId);

        const currentUserDoc = await getDoc(currentUserRef);
        if (currentUserDoc.exists()) {
          const friends = currentUserDoc.data().friends || [];
          const data = [];

          for (const friendId of friends) {
            const friendDoc = await getDoc(doc(usersRef, friendId));
            if (friendDoc.exists()) {
              const friendInfo = {
                id: friendId,
                email: friendDoc.data().email,
              };
              data.push(friendInfo);
            }
          }
          setFriendData(data);
        } else {
          Alert.alert('Current user document does not exist.');
        }
      } catch (error) {
        console.error('Error fetching friend data:', error);
        Alert.alert('Error fetching friend data.');
      }
    };

    fetchFriendData();
  }, [currentUserId]);

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
      <View>
        <GroupCards></GroupCards>
      </View>
      <View style={styles.createButtonsContainer}>
        <TouchableOpacity
          onPress={() => {navigation.navigate("createGroup")}}
          style={styles.createGroupIcon}
          >
          <Icon
            name="add-outline"
            size={60}
            color={colors.black}
          />
        </TouchableOpacity>
        <TouchableOpacity
                onPress={handleCreateGroup}
                style={styles.createPaymentButton}
                >
                <Text style={styles.createPaymentButtonText}>Lägg till betalning</Text>
                {/* <Icon
                    name="add-outline"
                    size={60}
                    color={colors.black}
                /> */}
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default GroupsScreen;
