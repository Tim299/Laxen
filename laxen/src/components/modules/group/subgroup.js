import * as React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import * as colors from '../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({

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
            title: "Bussbiljetter",
            amount: 400,
            deschribtion: "bussbiljetterna till resan",
            icon: "airplane-outline",
            members: ["Hampus Grimskär", "Ludvig Nilsson"],
            id: "0",
        },
        {
            title: "Lunch",
            amount: 299,
            deschribtion: "Lunch på resan",
            icon: "restaurant-outline",
            members: ["Hampus Grimskär", "Ludvig Nilsson"],
            id: "1",
        },
      ]
    },
  ];