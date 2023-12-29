import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { collection, doc, setDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { FIREBASE_DB } from '../../../../FirebaseConfig';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
import * as colors from '../../modules/colors/colors';

const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginRight: 20,
  },
  GroupFormContainer: {
    backgroundColor: colors.neutral,
    height: "100%",
  },
  createGroupText: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 10,
    color: colors.grey
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white,
    elevation: 10,
    borderColor: colors.accent,
  },
  createGroupButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: "10%",
    marginTop: "10%",
    borderRadius: 10,
    elevation: 10,
    backgroundColor: colors.primary,
  },
  createGroupButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  memberBox: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    backgroundColor: colors.white,
    elevation: 10,
    borderColor: colors.accent,
  },
  memberDropdown: {
    backgroundColor: colors.white,
    marginLeft: 20,
    marginRight: 50,
    borderWidth: 1.3,
    borderRadius: 10,
    elevation: 10,
    borderColor: colors.accent,
  },
  categoryBox: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    backgroundColor: colors.white,
    elevation: 10,
    borderColor: colors.accent,
  },
  categoryDropdown: {
    backgroundColor: colors.white,
    marginLeft: 20,
    marginRight: 50,
    borderWidth: 1.3,
    borderRadius: 10,
    elevation: 10,
    borderColor: colors.accent,
  },
});

function CreatePaymentForm() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [creator, setCreator] = useState('');
  const [selectedMember, setSelectedMember] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState("");

  // temporary solution before integrated with subgroups
  const [selectedGroup, setSelectedGroup] = useState('');
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const groupsCollection = collection(FIREBASE_DB, 'tasks');
    const unsubscribe = onSnapshot(groupsCollection, (snapshot) => {
      const groupsData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      let groupTitles = [];
      for (let i = 0; i < groupsData.length; i++) {
        if(groupsData[i].title != undefined) {
            groupTitles.push({
                key: i.toString(),
                value: groupsData[i].title
            });
        }
      }
      console.log(groupTitles);
      setGroups(groupTitles);
    });

    return () => unsubscribe();

  }, []);

  // custom function to only allow numbers as input
  const inputNumber = (input) => {
    for (let i = 0; i < input.length; i++) {
        if (isNaN(parseInt(input[i]))) {
            alert("Endast siffror är tillåtna!");
            input = input.slice(0, input.length - 1);
        }
    }
    setAmount(input);
  }
  
  const contacts = [
    // Get contacts from database to display as members to add to group here

    // This is sample data
    { key: '1', value: 'Hampus Grimskär'},
    { key: '2', value: 'Ludvig Nilsson'},
  ]

  const categories = [
    { key: '1', value: 'Fisk'},
    { key: '2', value: 'Resor'},
  ]

  const createPayment = async () => {
    try {
      // Fetch the current highest groupID
      const querySnapshot = await getDocs(collection(FIREBASE_DB, 'payments'));
      const currentHighestID = querySnapshot.size;
  
      // Extract values from selectedMember or set it to an empty array if undefined
  
      const newPayment = {
        title,
        description,
        amount: parseInt(amount),
        members: selectedMember,
        id: (currentHighestID + 1).toString(),
      };
  
      console.log('New payment data:', newPayment);
  
      // Add the new group to the 'tasks' collection
      const docRef = doc(collection(FIREBASE_DB, 'payments'), newPayment.id);
      await setDoc(docRef, newPayment);
  
      console.log(`Payment added with ID ${newPayment.id}`);
  
      // Navigate to the newly created group
    } catch (error) {
      console.error('Error creating payment: ', error);
    }
  };

  return (
    <View style={styles.GroupFormContainer}>
      <Icon
        name="close-outline"
        size={40}
        color={colors.grey}
        onPress={() => {
          navigation.navigate('groups');
        }}
        style={styles.closeIcon}
      />
      <Text style={styles.createGroupText}>Skapa en ny betalning</Text>
      <TextInput 
        placeholder="Titel"
        style={styles.input}
        onChangeText={input => setTitle(input)}
      />
      <TextInput
        placeholder="Beskrivning"
        style={styles.input}
        onChangeText={input => setDescription(input)}
      />
      <TextInput
        placeholder='summa'
        value={amount}
        style={styles.input}
        keyboardType='numeric'
        onChangeText={input => inputNumber(input)}
      />
      <SelectList
        setSelected={(val) => setSelectedIcon(val)}
        data={categories}
        save="value"
        label="Kategorier"
        placeholder="Välj kategori"
        search={false}
        boxStyles={styles.categoryBox}
        dropdownStyles={styles.categoryDropdown}
      />

      <MultipleSelectList
        setSelected={(val) => setSelectedMember(val)}
        data={contacts}
        save="value"
        placeholder="Välj Medlemmar"
        searchPlaceholder="Sök i kontakter"
        label="Medlemmar"
        boxStyles={styles.memberBox}
        dropdownStyles={styles.memberDropdown}
      />

      <SelectList
        setSelected={(val) => setSelectedGroup(val)}
        data={groups}
        save="value"
        label="Grupper"
        placeholder="Välj Grupp"
        search={false}
        boxStyles={styles.categoryBox}
        dropdownStyles={styles.categoryDropdown}
      />
      <TouchableOpacity
        style={styles.createGroupButton}
        onPress={createPayment}
      >
        <Text style={styles.createGroupButtonText}>Skapa Betalning</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreatePaymentForm;