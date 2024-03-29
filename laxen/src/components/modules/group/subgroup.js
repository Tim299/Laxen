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
      fetchPaymentsData();
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
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('createPayment', {groupID: groupID});
        }}
        style={styles.createGroupIcon}>
        <Icon
          name="logo-usd"
          size={30}
          color={colors.black}
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            marginTop: 12,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default SubGroup;
