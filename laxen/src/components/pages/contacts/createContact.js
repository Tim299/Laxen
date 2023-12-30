import React, {useState, useContext, useEffect} from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  updateDoc,
} from 'firebase/firestore';
import {FIREBASE_DB} from '../../../../FirebaseConfig';
import * as colors from '../../modules/colors/colors';
import {UserIdContext} from '../../../App';
const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  friendFormContainer: {
    backgroundColor: colors.neutral,
    height: '100%',
  },
  addFriendText: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
    color: colors.grey,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white,
    elevation: 10,
    borderColor: colors.accent,
  },
  addFriendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: '10%',
    marginTop: '10%',
    borderRadius: 10,
    elevation: 10,
    backgroundColor: colors.primary,
  },
  addFriendButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

function CreateContact({route}) {
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    if (route.params && route.params.currentUserId) {
      setCurrentUserId(route.params.currentUserId);
    }
  }, [route.params]);

  const navigation = useNavigation();
  const [friendEmail, setFriendEmail] = useState('');

  const addFriend = async () => {
    try {
      const usersRef = collection(FIREBASE_DB, 'users');

      const querySnapshot = await getDocs(
        query(usersRef, where('email', '==', friendEmail)),
      );

      if (!querySnapshot.empty) {
        const friendDoc = querySnapshot.docs[0];
        const friendId = friendDoc.id;

        const currentUserRef = doc(usersRef, currentUserId);
        const currentUserDoc = await getDoc(currentUserRef);

        if (currentUserDoc.exists()) {
          const friends = currentUserDoc.data().friends || [];
          const updatedFriends = [...friends, friendId];

          await updateDoc(currentUserRef, {
            friends: updatedFriends,
          });

          Alert.alert('Friend added successfully!');
        } else {
          Alert.alert('Current user document does not exist.');
        }
      } else {
        Alert.alert('Friend with the provided email not found.');
      }
    } catch (error) {
      console.error('Error adding friend:', error);
      Alert.alert('Error adding friend.');
    }
  };

  return (
    <View style={styles.friendFormContainer}>
      <Icon
        name="close-outline"
        size={40}
        color={colors.grey}
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.closeIcon}
      />
      <Text style={styles.addFriendText}>Add a Friend</Text>
      <TextInput
        placeholder="Friend's Email"
        style={styles.input}
        onChangeText={input => setFriendEmail(input)}
      />
      <TouchableOpacity style={styles.addFriendButton} onPress={addFriend}>
        <Text style={styles.addFriendButtonText}>Add Friend</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreateContact;
