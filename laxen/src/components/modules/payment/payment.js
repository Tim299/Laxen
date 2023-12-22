import * as React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import * as colors from '../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  feedContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    fontFamily: 'poppins',
    padding: '3%',
    borderWidth: 2,
    // paddingTop: '10%',
  },
  feedNotification: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: colors.white,
    marginTop: '8%',
    marginBottom: '2%',
    borderRadius: 10,
    width: '90%',
    height: '55 %',
    padding: '3%',
    zIndex: 400,
    // position: 'relative',
    // elevation: 5,
  },
  payment: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: 0,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
  },
  paymentTitle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500',
    marginLeft: '3%',
  },
  paymentAmount: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500',
    // marginLeft: '35%',
  },
  paymentDate: {
    color: colors.black,
    fontSize: 10,
    marginLeft: 'auto',
    // justifyContent: 'flex-end',
    // alignContent: 'flex-end',
    // alignSelf: 'center',
    // marginLeft: '7%',
  },
  //   paymentButton: {
  //     display: 'flex',
  //     marginVertical: '20%',
  //     backgroundColor: colors.lightblue,
  //     borderRadius: 10,
  //   },
  //   paymentButtonText: {
  //     color: colors.black,
  //     fontSize: 30,
  //     fontWeight: '500',
  //     margin: '5%',
  //     display: 'flex',
  //     alignSelf: 'center',
  //   },
  paymentMembers: {
    marginLeft: '0%',
    // marginBottom: '-6%',
    display: 'flex',
    justifyContent: 'space-between',
    // position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '2%',
  },
  memberIcon: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    width: 20,
    height: 20,
    marginRight: 4,
  },
  memberIconText: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'poppins',
  },
  creatorHeader: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'top',
    // alignSelf: 'left',
    aligncontent: 'top',
    marginLeft: '5%',
    width: 'fit-content',
    maxWidth: '100%',
    height: '60%',
    // marginLeft: '10%',
    // marginRight: '30%',
    marginTop: '-9.5%',
    position: 'absolute',
    zIndex: -100,
    padding: '2%',
    // paddingTop: '3%',
    paddingVertical: '2%',
    // elevation: 0,
    // overflow: 'wrap',
  },
  createrHeaderText: {
    color: colors.white,
    // marginHorizontal: '5%',
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'poppins',
  },
  deschribtion: {
    color: colors.black,
    fontSize: 12,
    fontFamily: 'poppins',
    borderWidth: 1,
    fontWeight: '500',
    zIndex: 100,
  },
});

// const DATA = [
//   {
//     title: 'Hotell Casablanca',
//     amount: 1000,
//     date: '09-november-2023',
//     creator: 'Hampus',
//     members: ['Hampus Grimskär', 'Ludvig Nilsson'],
//     id: '0',
//   },
//   {
//     title: 'SECOND ITEM',
//     amount: 482,
//     date: '09-november-2023',
//     creator: 'Hampus',
//     members: ['Hampus'],
//     id: '1',
//   },
//   {
//     title: 'THIRD ITEM',
//     amount: 699,
//     date: '09-november-2023',
//     creator: 'Hampus',
//     members: ['Hampus', 'Ludvig', 'Tim'],
//     id: '2',
//   },
//   {
//     title: 'THIRD ITEM',
//     amount: 699,
//     date: '09-november-2023',
//     creator: 'Hampus',
//     members: ['Hampus', 'Ludvig'],
//     id: '3',
//   },
// ];

function convertDate(inputFormat) {
  const [day, month, year] = inputFormat.split('-');
  const monthNames = [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'December',
  ];
  const monthIndex = parseInt(month) - 1;
  const date = new Date(year, monthIndex, day);

  const options = {day: 'numeric', month: 'long', year: 'numeric'};
  const formattedDate = date.toLocaleDateString('sv-SE', options);

  const formattedMonth = monthNames[monthIndex];

  const finalFormattedDate = formattedDate.replace(
    formattedMonth.toLowerCase(),
    formattedMonth + ',',
  );

  return finalFormattedDate;
}

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

const Payment = ({
  title,
  amount,
  date,
  members,
  creator,
  deschribtion,
  icon,
}) => (
  <View style={styles.feedNotification}>
    <View style={styles.creatorHeader}>
      <Text style={styles.createrHeaderText}>
        {creator} har skapat en aktivitet.
      </Text>
    </View>

    <View style={styles.payment}>
      <Icon name={icon} size={22} color={colors.accent} />
      <Text style={styles.paymentTitle}>{title}</Text>
      <Text style={styles.paymentDate}>{date}</Text>
    </View>

    <Text style={styles.deschribtion}>{deschribtion}</Text>

    <View style={styles.paymentMembers}>
      <FlatList
        data={members}
        renderItem={({item}) => <Member member={item}></Member>}
        horizontal={true}
      />
      {/* <Text style={styles.paymentAmount}>{amount} kr</Text> */}
      {/* lägg en button för betalning kopplad till swisch här */}
    </View>
  </View>
);

function PaymentFeed({payments}) {
  return (
    <View style={styles.feedContainer}>
      <FlatList
        data={payments}
        renderItem={({item}) => (
          <Payment
            title={item.title}
            amount={item.amount}
            date={convertDate(item.date)}
            creator={item.creator}
            deschribtion={item.deschribtion}
            members={item.members}
            icon={item.icon}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default PaymentFeed;
