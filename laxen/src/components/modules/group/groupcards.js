import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';
import * as colors from '../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import subGroup from './subgroup';
import {FIREBASE_DB} from '../../../../FirebaseConfig';
import {collection, query, where, onSnapshot, doc, deleteDoc} from 'firebase/firestore';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'poppins',
    marginTop: '0%',
  },
  mainView: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    width: '92%',
    padding: '3%',
    marginVertical: '3%',
    elevation: 5,
  },
  paymentTitle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'poppins',
  },
  paymentAmount: {
    color: colors.white,
    fontSize: 14,
    fontFamily: 'poppins',
    fontWeight: 'bold',
  },
  description: {
    color: colors.black,
    fontSize: 12,
    fontFamily: 'poppins',
  },
  groupMembers: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '6%',
  },
  memberIcon: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    width: 30,
    height: 30,
    marginRight: 4,
  },
  memberIconText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'poppins',
  },
});

const DATA = [
  {
    title: 'Resa till Skåne',
    amount: 1000,
    description: 'Lax gruppen planerar en resa till Skåne.',
    icon: 'fish-outline',
    members: ['Hampus Grimskär', 'Ludvig Nilsson', 'Tim Larsson'],
    id: '0',
    payments: [
      {
        title: 'Bussbiljetter',
        amount: 500000,
        date: '20-04-2023',
        creator: 'Hampus Grimskär',
        deschribtion:
          'bussbiljetterna till resan är dyra så vi måste spara pengar. Betala inom 2 veckor.',
        icon: 'airplane-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson', 'Jonathan Skoog'],
        id: '0',
        isPayed: false,
      },
      {
        title: 'Lunch',
        amount: 299,
        date: '20-04-2023',
        creator: 'Hampus Grimskär',
        deschribtion: 'Lunch på resan',
        icon: 'restaurant-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson'],
        id: '1',
        isPayed: false,
      },
      {
        title: 'Lunch',
        amount: 299,
        date: '20-04-2023',
        creator: 'Hampus Grimskär',
        deschribtion: 'Lunch på resan',
        icon: 'restaurant-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson'],
        id: '2',
        isPayed: false,
      },
      {
        title: 'Lunch',
        amount: 299,
        date: '20-04-2023',
        creator: 'Hampus Grimskär',
        deschribtion: 'Lunch på resan',
        icon: 'restaurant-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson'],
        id: '3',
        isPayed: false,
      },
      {
        title: 'Lunch',
        amount: 299,
        date: '20-04-2023',
        creator: 'Hampus Grimskär',
        deschribtion: 'Lunch på resan',
        icon: 'restaurant-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson'],
        id: '4',
        isPayed: false,
      },
      {
        title: 'Lunch',
        amount: 299,
        date: '20-04-2023',
        creator: 'Hampus Grimskär',
        deschribtion: 'Lunch på resan',
        icon: 'restaurant-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson'],
        id: '5',
        isPayed: false,
      },
    ],
  },
  {
    title: 'Grupp 2',
    amount: 482,
    description: 'Lax gruppen planerar en resa till bordershoppen.',
    icon: 'airplane-outline',
    members: ['Hampus Grimskär'],
    id: '1',
    payments: [
      {
        title: 'Bussbiljetter',
        amount: 400,
        date: '20-04-2023',
        creator: 'Hampus Grimskär',
        deschribtion:
          'bussbiljetterna till resan är dyra så vi måste spara pengar. Betala inom 2 veckor.',
        icon: 'airplane-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson', 'Jonathan Skoog'],
        id: '0',
        isPayed: false,
      },
    ],
  },
  {
    title: 'Grupp 3',
    amount: 6990,
    description: 'Lax gruppen planerar en resa till Liseberg.',
    icon: 'american-football-outline',
    members: ['Hampus Grimskär', 'Ludvig Nilsson', 'Tim Larsson'],
    id: '2',
  },
  {
    title: 'Grupp 4',
    amount: 699,
    description: 'Lax gruppen planerar en resa till Malmö.',
    icon: 'restaurant-outline',
    members: ['Jonathan Skoog', 'Donald Elezi'],
    id: '3',
  },
];

function Member({member}) {
  let firstInitial = member[0];
  let secondInitial = '';

  if (member.indexOf(' ') > 0) {
    secondInitial = member[member.indexOf(' ') + 1];
  }

  return (
    <View style={styles.memberIcon}>
      <Text style={styles.memberIconText}>
        {firstInitial}
        {secondInitial}
      </Text>
    </View>
  );
}

const GroupCard = ({title, amount, description, members, icon, onPress, onLongPress}) => (
  <TouchableOpacity style={styles.mainView} onPress={onPress} onLongPress={onLongPress}>
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Text style={styles.paymentTitle}>{title}</Text>
      <Icon name={icon} size={22} color={colors.accent} />
    </View>

    <Text style={styles.description}>{description}</Text>

    <View style={styles.groupMembers}>
      <FlatList
        data={members}
        renderItem={({item}) => <Member member={item}></Member>}
        horizontal={true}
      />
      {/* <View
        style={{
          backgroundColor: colors.secondary,
          width: '20%',
          height: '100%',
          borderRadius: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'poppins',
        }}>
        <Text style={styles.paymentAmount}>{amount} kr</Text>
      </View> */}
    </View>
  </TouchableOpacity>
);

function GroupCards({userid}) {
  const navigation = useNavigation();
  const [groups, setGroups] = useState([]);

  const handleLongPress = async (groupId) => {
    try {
      // Confirm deletion with an alert
      Alert.alert(
        'Delete Group',
        'Are you sure you want to delete this group?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Delete',
            onPress: async () => {
              // Delete the group from Firebase
              const groupDocRef = doc(FIREBASE_DB, 'Group', groupId);
              await deleteDoc(groupDocRef);
            },
            style: 'destructive',
          },
        ],
        { cancelable: true }
      );
    } catch (error) {
      console.error('Error deleting group:', error.message);
    }
  };

  useEffect(() => {
    const groupsCollection = collection(FIREBASE_DB, 'Group');
    const queryByUserId = query(
      groupsCollection,
      where('userIds', 'array-contains', userid),
    );

    const unsubscribe = onSnapshot(queryByUserId, snapshot => {
      const groupsData = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setGroups(groupsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={groups} //ändra till db fetch
        renderItem={({item}) => (
          <GroupCard
            title={item.title}
            amount={item.amount}
            description={item.description}
            icon={item.icon}
            onPress={() => {
              navigation.navigate('subgroup', {
                groupID: item.title,
              });
            }}
            onLongPress={() => handleLongPress(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default GroupCards;
