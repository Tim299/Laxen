import React from 'react';
import  {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { styles } from "./home_stylesheet";
import PaymentFeed from "../../modules/payment/payment"

function HomeScreen() {
    return (
      <View style={styles.homeViewContainer}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerFont}>Hem</Text>
        </View>
        <View style={styles.homeView}>
          <Text style={styles.paymentsTitle}>Betalningar</Text>
  
          <View style={styles.paymentsFeedContainer}>
            <PaymentFeed></PaymentFeed>
          </View>
        </View>
      </View>
    );
  }

export default HomeScreen;