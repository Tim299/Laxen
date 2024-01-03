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
    if (currentUserId) {
      fetchFriendData();
    }
  }, [currentUserId]);

  const renderFriendCard = ({item}) => (
    <TouchableOpacity
      style={styles.friendCard}
      onPress={() => handleFriendClick(item.id)}>
      <View>
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
      <View>
        <TouchableOpacity
          onPress={handleCreateContact}
          style={styles.createContactButton}>
          <Text style={styles.createContactButtonText}>Lägg till</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={friendData}
        keyExtractor={item => item.id}
        renderItem={renderFriendCard}
      />
    </View>
  );
}

export default ContactsScreen;
