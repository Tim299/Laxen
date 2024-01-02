import * as React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import * as colors from '../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import PaymentFeed from '../payment/payment';

const styles = StyleSheet.create({
  subgroupViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
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
  const {groupID, title, amount, description, members, payments} = route.params;

  return (
    <View style={styles.subgroupViewContainer}>
      <View style={styles.headerContainer}>
        <Text h1 style={styles.headerFont}>
          {title}
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

      <PaymentFeed payments={payments} />
    </View>
  );
}

export default SubGroup;
