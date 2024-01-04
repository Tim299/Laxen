import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {collection, doc, getDoc, query, where} from 'firebase/firestore';
import {UserIdContext} from '../../../App';
import {styles} from './contacts_stylesheet';
import {FIREBASE_DB} from '../../../../FirebaseConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../modules/colors/colors';

function ContactsScreen() {
  const {currentUserId} = useContext(UserIdContext);
  const navigation = useNavigation();
  const [friendData, setFriendData] = useState([]);

  const handleCreateContact = () => {
    navigation.navigate('createContact', {currentUserId});
  };

  useEffect(() => {
    const fetchFriendData = async () => {
      try {
        const usersRef = collection(FIREBASE_DB, 'users');
        const currentUserRef = doc(usersRef, currentUserId);

        const currentUserDoc = await getDoc(currentUserRef);
        if (currentUserDoc.exists()) {
          const friends = currentUserDoc.data().friends || [];

          // Directly map the friends array to select 'uid' and 'email' fields
          const data = friends.map(friend => ({
            id: friend.uid, // Assuming the friend object in the 'friends' array contains 'uid' field
            email: friend.email, // Assuming the friend object in the 'friends' array contains 'email' field
          }));

          setFriendData(data);
        } else {
          Alert.alert('Current user document does not exist.');
        }
      } catch (error) {
        console.error('Error fetching friend data:', error);
        Alert.alert('Error fetching friend data.');
      }
    };
    if (currentUserId) {
      fetchFriendData();
    }
  }, [currentUserId]);

  const renderFriendCard = ({item}) => (
    <TouchableOpacity
      style={styles.friendCard}
      onPress={() => handleFriendClick(item.id)}>
      <View
        style={{
          borderWidth: 2,
          marginBottom: '5%',
          width: '50%',
          borderRadius: 30,
          padding: 10,
          backgroundColor: colors.neutral,
          marginLeft: '2%',
        }}>
        {/* profile picture*/}
        <Text>{item.email}</Text>
        {/* Add name here */}
      </View>
    </TouchableOpacity>
  );

  const handleFriendClick = friendId => {};

  return (
    <View style={styles.contactsViewContainer}>
      <View style={styles.headerContainer}>
        <Text h1 style={styles.headerFont}>
          Kontakter
        </Text>
        <Image source={require('../login/fish.png')} style={styles.logo} />
      </View>
      <View
        style={{
          justifyContent: 'left',
          alignItems: 'left',
          marginTop: '-97%',
        }}>
        <FlatList
          data={friendData}
          keyExtractor={item => item.id}
          renderItem={renderFriendCard}
        />
      </View>
      <View style={{marginTop: '-10%'}}>
        <TouchableOpacity
          onPress={handleCreateContact}
          style={styles.createContactButton}>
          <Icon
            name="accessibility"
            size={30}
            color={colors.black}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              marginTop: '20%',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ContactsScreen;
