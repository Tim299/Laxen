import * as React from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {styles} from './home_stylesheet';
import PaymentFeed from '../../modules/payment/payment';
import {Header, Button} from 'react-native-elements';
import {IconButton, MD3Colors} from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '../../modules/colors/colors';

function HomeScreen() {
  return (
    <View style={styles.homeViewContainer}>
      <View style={styles.headerContainer}>
        <Text h1 style={styles.headerFont}>
          Resa till Skåne
        </Text>

        <Icon name="fish-outline" size={30} color={colors.grey} />
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
