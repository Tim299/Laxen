import { View, Text, TextInput, Button, Pressable} from "react-native";
import {StyleSheet} from 'react-native';
import * as colors from '../../modules/colors/colors';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  GroupFormContainer: {
    backgroundColor: colors.neutral,
    height: "100%",
  },
  createGroupText: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    marginVertical: "10%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white
  },
  createGroupButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: "10%",
    marginTop: "10%",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: colors.primary,
  },
  createGroupButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

const DATA = [
    {
        title: 'Resa till Skåne',
        amount: 1000,
        description: 'Lax gruppen planerar en resa till Skåne.',
        icon: 'fish-outline',
        members: ['Hampus Grimskär', 'Ludvig Nilsson'],
        creator: "Hampus Grimskär",
        id: '0',
        payments: [
          {
              title: "Bussbiljetter",
              amount: 400,
              date: "20-04-2023",
              creator: "Hampus Grimskär",
              description: "bussbiljetterna till resan",
              icon: "airplane-outline",
              members: ["Hampus Grimskär", "Ludvig Nilsson"],
              id: "0",
          },
          {
              title: "Lunch",
              amount: 299,
              date: "20-04-2023",
              creator: "Hampus Grimskär",
              description: "Lunch på resan",
              icon: "restaurant-outline",
              members: ["Hampus Grimskär", "Ludvig Nilsson"],
              id: "1",
          },
        ]
      },
]

function createGroup(title, amount, description, icon, members, creator, id, payments) {
    DATA.push(
      {
        title: title,
        amount: amount,
        description: description,
        icon: icon,
        members: members,
        creator: creator,
        id: id,
        payments: payments
      }
    )
}

function createGroupForm() {
  const navigation = useNavigation();
  return(
    <View style={styles.GroupFormContainer}>
      <Text style={styles.createGroupText}>Skapa en ny grupp</Text>
      <TextInput
        placeholder="Titel"
        style={styles.input} 
      />
      <TextInput
        placeholder="Beskrivning"
        style={styles.input} 
      />
      <TextInput
        placeholder="Medlemmar"
        style={styles.input} 
      />
      <Pressable 
        style={styles.createGroupButton}
        onPress={() => {
          navigation.navigate("app");
        }}
      >
        <Text style={styles.createGroupButtonText}>Skapa Grupp</Text>
      </Pressable>
    </View>
  );
}

export default createGroupForm;