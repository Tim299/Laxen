import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as colors from '../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import PaymentFeed from '../payment/payment';
import {
  addDoc,
  collection,
  onSnapshot,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {FIREBASE_DB} from '../../../../FirebaseConfig';

const styles = StyleSheet.create({
  subgroupViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '91%',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: '8%',
    width: '100%',
    paddingLeft: '4%',
    paddingRight: '4%',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    paddingBottom: '0%',
    fontFamily: 'poppins',
  },
  headerFont: {
    width: 'fit-content',
    backgroundColor: colors.white,
    fontFamily: 'poppins',
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.black,
  },
  createGroupIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: colors.primary,
    alignSelf: 'center',
  },
});

const DATA = [
  {
    title: 'Resa till Skåne',
    amount: 1000,
    deschribtion: 'Lax gruppen planerar en resa till Skåne.',
    icon: 'fish-outline',
    members: ['Hampus Grimskär', 'Ludvig Nilsson'],
    id: '0',
    payments: [
      {
        title: 'Bussbiljetter',
        amount: 400,
        deschribtion: 'bussbiljetterna till resan',
        icon: 'airplane-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson'],
        id: '0',
      },
      {
        title: 'Lunch',
        amount: 299,
        deschribtion: 'Lunch på resan',
        icon: 'restaurant-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson'],
        id: '1',
      },
    ],
  },
];

function SubGroup({route, navigation}) {
  const {
    groupID,
    title,
    amount,
    description,
    members,
    payments,
    isPayed,
    paymentID,
  } = route.params;

  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    const fetchPaymentsData = async () => {
      try {
        const paymentsRef = collection(FIREBASE_DB, 'payments');

        // Query payments where 'group' field matches the selected group ID
        const querySnapshot = await getDocs(
          query(paymentsRef, where('group', '==', groupID)),
        );

        const payments = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPaymentData(payments);

        return payments;
      } catch (error) {
        console.error('Error searching payments by group:', error);
        return [];
      }
    };

    if (groupID) {
      fetchPaymentsData(); // Fetch initially when groupID changes
     
    }
  }, [groupID]);


  return (
    <View>
      <View style={styles.subgroupViewContainer}>
        <View style={styles.headerContainer}>
          <Text h1 style={styles.headerFont}>
            {groupID}
          </Text>

          <View style={{backgroundColor: colors.lightgrey, borderRadius: 50}}>
            <Icon
              name="close-outline"
              size={30}
              color={colors.black}
              onPress={() => {
                navigation.navigate('groups');
              }}
            />
          </View>
        </View>

        <PaymentFeed
          payments={paymentData}
          groupID={groupID}
          members={members}
          // isPayed={isPayed}
          // paymentID={paymentID}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('createPayment', {groupID: groupID});
        }}
        style={styles.createGroupIcon}>
        <Icon name="add-outline" size={60} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
}

export default SubGroup;
