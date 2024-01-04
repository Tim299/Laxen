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
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Or replace with your chosen icon library


const styles2 = StyleSheet.create({
  // Other styles

  friendCardContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 3,
  },
  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'blue', // Change color or replace with image
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  emailContainer: {
    flex: 1,
  },
  friendEmail: {
    fontSize: 16,
    fontWeight: 'bold',
    // Other styles for email or name
  },
  // Add more styles as needed
});
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

  const renderFriendCard = ({ item }) => (
    <TouchableOpacity
      style={styles2.friendCardContainer}
      onPress={() => handleFriendClick(item.id)}>
      <View style={styles2.friendCard}>
        <View style={styles2.iconContainer}>
          {/* Add your friend icon */}
          <Icon name="gear" size={20} color="white" />
        </View>
        <View style={styles2.emailContainer}>
          <Text style={styles2.friendEmail}>{item.email}</Text>
          {/* Add additional styling or content here */}
        </View>
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
