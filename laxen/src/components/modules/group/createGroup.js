import React, {useState, useEffect, useContext} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  getUser,
} from 'firebase/firestore';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

import {UserIdContext} from '../../../App';
import {FIREBASE_DB, FIREBASE_AUTH} from '../../../../FirebaseConfig';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import * as colors from '../../modules/colors/colors';

const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  GroupFormContainer: {
    backgroundColor: colors.neutral,
    height: '100%',
  },
  createGroupText: {
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
  createGroupButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: '10%',
    marginTop: '10%',
    borderRadius: 10,
    elevation: 10,
    backgroundColor: colors.primary,
  },
  createGroupButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  memberBox: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    backgroundColor: colors.white,
    elevation: 10,
    borderColor: colors.accent,
  },
  memberDropdown: {
    backgroundColor: colors.white,
    marginLeft: 20,
    marginRight: 50,
    borderWidth: 1.3,
    borderRadius: 10,
    elevation: 10,
    borderColor: colors.accent,
  },
  categoryBox: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    backgroundColor: colors.white,
    elevation: 10,
    borderColor: colors.accent,
  },
  categoryDropdown: {
    backgroundColor: colors.white,
    marginLeft: 20,
    marginRight: 50,
    borderWidth: 1.3,
    borderRadius: 10,
    elevation: 10,
    borderColor: colors.accent,
  },
});

function CreateGroup({route}) {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedMember, setSelectedMember] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState('');
  const [friendData, setFriendData] = useState([]);
  const [rawFriendData, setRawFriendData] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState('');

  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    if (route.params && route.params.currentUserId) {
      setCurrentUserId(route.params.currentUserId);
    }
  }, [route.params]);

  const categories = [
    {key: '1', value: 'Fisk'},
    {key: '2', value: 'Resor'},
  ];

  console.log(currentUserId, 'from form');

  useEffect(() => {
    const fetchFriendData = async () => {
      try {
        const usersRef = collection(FIREBASE_DB, 'users');
        const currentUserRef = doc(usersRef, currentUserId);

        const currentUserDoc = await getDoc(currentUserRef);
        if (currentUserDoc.exists()) {
          const friends = currentUserDoc.data().friends || [];

          const data = friends.map(friend => ({
            key: friend.uid,
            value: friend.email,
          }));

          const rawData = friends.map(friend => ({
            id: friend.uid,
            email: friend.email,
          }));
          setRawFriendData(rawData);
          setFriendData(data);
        } else {
          Alert.alert('Current user document does not exist.');
        }
      } catch (error) {
        console.error('Error fetching friend data:', error);
        Alert.alert('Error fetching friend data.');
      }
    };

    const auth = FIREBASE_AUTH;
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.email;
        setCurrentUserEmail(uid);
      } else {
      }
    });

    if (currentUserId) {
      fetchFriendData();
    }
  }, [currentUserId]);

  const createGroupInDB = async () => {
    try {
      const querySnapshot = await getDocs(collection(FIREBASE_DB, 'Group'));
      const currentHighestID = querySnapshot.size;

      const newGroup = {
        title,
        amount: 0,
        description,
        members: [
          // Include current user ID and email in the members array
          {id: currentUserId, email: currentUserEmail},
          // Include other friends fetched from rawFriendData
          ...rawFriendData,
        ],
        id: (currentHighestID + 1).toString(),
      };

      console.log('New group data:', newGroup);

      const docRef = doc(collection(FIREBASE_DB, 'Group'), newGroup.id);
      await setDoc(docRef, newGroup);

      console.log(`Group added with ID ${newGroup.id}`);

      navigation.navigate('subgroup', newGroup);
    } catch (error) {
      console.error('Error creating group: ', error);
    }
  };

  return (
    <View style={styles.GroupFormContainer}>
      <Icon
        name="close-outline"
        size={40}
        color={colors.grey}
        onPress={() => {
          navigation.navigate('groups');
        }}
        style={styles.closeIcon}
      />
      <Text style={styles.createGroupText}>Skapa en ny grupp</Text>
      <TextInput
        placeholder="Titel"
        style={styles.input}
        onChangeText={input => setTitle(input)}
      />
      <TextInput
        placeholder="Beskrivning"
        style={styles.input}
        onChangeText={input => setDescription(input)}
      />

      <SelectList
        setSelected={val => setSelectedIcon(val)}
        data={categories}
        save="value"
        label="Kategorier"
        placeholder="Välj kategori"
        search={false}
        boxStyles={styles.categoryBox}
        dropdownStyles={styles.categoryDropdown}
      />

      <MultipleSelectList
        setSelected={val => setSelectedMember(val)}
        data={friendData}
        save="value"
        placeholder="Välj Medlemmar"
        searchPlaceholder="Sök i kontakter"
        label="Medlemmar"
        boxStyles={styles.memberBox}
        dropdownStyles={styles.memberDropdown}
      />
      <TouchableOpacity
        style={styles.createGroupButton}
        onPress={createGroupInDB}>
        <Text style={styles.createGroupButtonText}>Skapa Grupp</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreateGroup;
