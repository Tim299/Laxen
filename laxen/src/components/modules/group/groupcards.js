import * as React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import * as colors from '../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import subGroup from './subgroup';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'poppins',
  },
  mainView: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: '6%',
    borderRadius: 10,
    width: '92%',
    padding: '3%',
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
  deschribtion: {
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
    deschribtion: 'Lax gruppen planerar en resa till Skåne.',
    icon: 'fish-outline',
    members: ['Hampus Grimskär', 'Ludvig Nilsson'],
    id: '0',
    payments: [
      {
        title: 'Bussbiljetter',
        amount: 400,
        date: '20-04-2023',
        creator: 'Hampus Grimskär',
        deschribtion:
          'bussbiljetterna till resan är dyra så vi måste spara pengar. Betala inom 2 veckor.',
        icon: 'airplane-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson'],
        id: '0',
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
      },
    ],
  },
  {
    title: 'Grupp 2',
    amount: 482,
    deschribtion: 'Lax gruppen planerar en resa till bordershoppen.',
    icon: 'airplane-outline',
    members: ['Hampus Grimskär'],
    id: '1',
  },
  {
    title: 'Grupp 3',
    amount: 6990,
    deschribtion: 'Lax gruppen planerar en resa till Liseberg.',
    icon: 'american-football-outline',
    members: ['Hampus Grimskär', 'Ludvig Nilsson', 'Tim Larsson'],
    id: '2',
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

const GroupCard = ({title, amount, deschribtion, members, icon, onPress}) => (
  <TouchableOpacity style={styles.mainView} onPress={onPress}>
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

    <Text style={styles.deschribtion}>{deschribtion}</Text>

    <View style={styles.groupMembers}>
      <FlatList
        data={members}
        renderItem={({item}) => <Member member={item}></Member>}
        horizontal={true}
      />
      <View
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
      </View>
    </View>
  </TouchableOpacity>
);

function GroupCards() {
  const navigation = useNavigation();

  const goToGroup = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <GroupCard
            title={item.title}
            amount={item.amount}
            deschribtion={item.deschribtion}
            members={item.members}
            icon={item.icon}
            onPress={() => {
              navigation.navigate('subgroup', {
                groupID: item.id,
                title: item.title,
                amount: item.amount,
                description: item.deschribtion,
                members: item.members,
                payments: item.payments,
              });
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default GroupCards;
