import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import * as colors from "../colors/colors"

const styles = StyleSheet.create({
    feedContainer: {
        backgroundColor: colors.white,
        width: "100%",
        borderRadius: 10,
        height: "97%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
        
    },
    feedNotification: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: colors.lightgrey,
        marginHorizontal: "2%",
        marginTop: "6%",
        borderRadius: 10,
        width: "80%",
    },
    payment: {
        width: "60%",
        display: "flex",
        justifyContent: "center"
    },
    paymentTitle: {
        color: colors.black,
        fontSize: 16,
        fontWeight: "500",
        marginLeft: "30%",
        marginTop: "5%"
    },
    paymentAmount: {
        color: colors.black,
        fontSize: 20,
        fontWeight: "500",
        marginLeft: "35%",
    },
    paymentDate: {
        color: colors.black,
        fontSize: 10,
        marginLeft: "32%",
        marginBottom: "5%",
    },
    paymentButton: {
        display: "flex",
        marginVertical: "20%",
        backgroundColor: colors.lightblue,
        borderRadius: 10,
    },
    paymentButtonText: {
        color: colors.black,
        fontSize: 30,
        fontWeight: "500",
        margin: "5%",
        display: "flex",
        alignSelf: "center"
    },
    paymentMembers: {
        marginLeft: "10%",
        marginBottom: "-3%",
        display: "flex",
        justifyContent: "space-between"
    },
    memberIcon: {
        backgroundColor: colors.pink,
        borderRadius: 20,
        justifyContent: "center",
        width: 20,
        height: 20,
        marginRight: 2,
    },
    memberIconText: {
        fontSize: 10,
        textAlign: "center",
        fontWeight: "500"
    },
    creatorHeader: {
        backgroundColor: colors.black,
        borderRadius: 20,
        marginLeft: "10%",
        marginRight: "30%",
        marginTop: "-2%",
        overflow: "hidden"
    },
    createrHeaderText: {
        color: colors.white,
        marginHorizontal: "5%",
        fontSize: 10,
    },
})

const DATA = [
    {
        title: "Hotell Casablanca",
        amount: 1000,
        date: "09-november-2023",
        creator: "Hampus",
        members: ["Hampus Grimskär", "Ludvig Nilsson"],
        id: "0",
    },
    {
        title: "SECOND ITEM",
        amount: 482,
        date: "09-november-2023",
        creator: "Hampus",
        members: ["Hampus"],
        id: "1",
    },
    {
        title: "THIRD ITEM",
        amount: 699,
        date: "09-november-2023",
        creator: "Hampus",
        members: ["Hampus", "Ludvig", "Tim"],
        id: "2",
    },
    {
        title: "THIRD ITEM",
        amount: 699,
        date: "09-november-2023",
        creator: "Hampus",
        members: ["Hampus", "Ludvig"],
        id: "3",
    },
]

function Member({member}) {
    let firstInitial = member[0];
    let secondInitial = "";

    if (member.indexOf(" ") > 0) {
        secondInitial = member[member.indexOf(" ") + 1]
    }

    return(
        <View style={styles.memberIcon}>
            <Text style={styles.memberIconText}>{firstInitial}{secondInitial}</Text>
        </View>
    );
}

const Payment = ({title, amount, date, members, creator}) => (
    <View style={styles.feedNotification}>
        <View style={styles.creatorHeader}>
            <Text style={styles.createrHeaderText}>{creator} har skapat en aktivitet.</Text>
        </View>

        <View style={styles.payment}>
            <Text style={styles.paymentTitle}>{title}</Text>
            <Text style={styles.paymentDate}>{date}</Text>
            {/* <Text style={styles.paymentAmount}>{amount} kr</Text> */}
        </View>

        <View style={styles.paymentMembers}>
            <FlatList
                data={members}
                renderItem={({item}) => <Member member={item}></Member>}
                horizontal={true}
            />
            {/* <TouchableOpacity style={styles.paymentButton}>
                <Text style={styles.paymentButtonText}>Betala</Text>
            </TouchableOpacity> */}
        </View>
    </View>
);

function PaymentFeed() {
    return(
        <View style={styles.feedContainer}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Payment title={item.title} amount={item.amount} date={item.date}
            members={item.members} creator={item.creator}/>}

            keyExtractor={(item) => item.id}
          />
        </View>
      );
}

export default PaymentFeed;