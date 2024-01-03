import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import * as colors from '../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '@rneui/themed';
import {Tooltip} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  feedContainer: {
    width: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    fontFamily: 'poppins',
    padding: '3%',
  },
  feedNotification: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: '0%',
    marginBottom: '5%',
    borderRadius: 10,
    width: '90%',
    height: '55 %',
    padding: '3%',
    zIndex: 10,
  },
  payment: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  paymentTitle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500',
    marginLeft: '3%',
    marginTop: '-1%',
  },
  paymentAmount: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500',
  },
  paymentDate: {
    fontSize: 8,
    marginLeft: 'auto',
  },

  paymentMembers: {
    marginLeft: '0%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '2%',
  },
  memberIcon: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    width: 25,
    height: 25,
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
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'top',
    aligncontent: 'top',
    marginLeft: '5%',
    width: 'fit-content',
    maxWidth: '100%',
    height: '60%',

    marginTop: '-9.5%',
    position: 'absolute',
    zIndex: -100,
    padding: '2%',

    paddingVertical: '2%',
  },
  createrHeaderText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'poppins',
  },
  deschribtion: {
    color: colors.black,
    fontSize: 12,
    fontFamily: 'poppins',
    fontWeight: '500',
    zIndex: 100,
    marginTop: '1%',
    marginBottom: '1%',
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  memberText: {
    fontFamily: 'poppins',
    marginRight: 4,
    fontSize: 12,
  },
  toolTipBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    marginLeft: 'auto',
    marginRight: '-1.5%',
  },
  creatorText: {
    fontFamily: 'poppins',
    marginRight: 4,
    fontSize: 12,
  },
  btnTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBox: {
    backgroundColor: colors.secondary,
    borderColor: 'transparent',
    borderRadius: 30,
    maxHeight: 40,
  },
});

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
  groupID,
  isPayed,
  paymentID,
  paymentMembers,
}) => {
  const [isPaymentClicked, setIsPaymentClicked] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  //   console.log(paymentMembers, 'paymentMembers');
  //   console.log(groupID, 'groupID');
  //   console.log(paymentID, 'paymentID');
  //   console.log(isPayed, 'isPayed');

  const handlePaymentClick = () => {
    setIsPaymentClicked(true);

    //lägg swisch här

    // setTimeout(() => {
    //   setIsPaymentClicked(false);
    // }, 2000);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isPaymentClicked ? colors.neutral : colors.white,
        marginTop: '0%',
        marginBottom: '5%',
        borderRadius: 10,
        width: '97%',
        height: '55 %',
        padding: '3%',
        zIndex: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 5,
      }}>
      <View style={styles.payment}>
        <Icon name={icon} size={20} color={colors.accent} />
        <Text style={styles.paymentTitle}>{title}</Text>
        <Text style={styles.paymentDate}>{date}</Text>
        <View style={styles.toolTipBox}>
          <Text style={styles.creatorText}>Skapad av:</Text>

          <Tooltip
            isVisible={tooltipVisible}
            popover={<Text>{creator}</Text>}
            backgroundColor={colors.neutral}
            width={160}
            height={40}
            toggleOnPress={true}
            animationType={'fade'}
            withOverlay={true}
            placement={'top'}
            skipAndroidStatusBar={true}>
            <Member member={creator} />
          </Tooltip>
        </View>
      </View>

      <Text style={styles.deschribtion}>{deschribtion}</Text>

      <View style={styles.paymentMembers}>
        <FlatList
          data={members}
          renderItem={({item}) => <Member member={item}></Member>}
          horizontal={true}
        />

        <Button
          onPress={handlePaymentClick}
          title={`Betala ${(amount / members.length).toFixed(1)} kr`}
          titleStyle={styles.btnTitle}
          buttonStyle={styles.btnBox}
          containerStyle={{
            width: 140,
          }}
          loading={isPaymentClicked}
          disabled={isPaymentClicked}
        />
      </View>
    </View>
  );
};

function PaymentFeed({payments, groupID, members, isPayed, paymentID}) {
  const navigation = useNavigation();

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
            groupID={groupID}
            isPayed={isPayed}
            paymentID={paymentID}
            paymentMembers={members}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
export default PaymentFeed;
