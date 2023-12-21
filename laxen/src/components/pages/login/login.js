import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {FIREBASE_AUTH} from './FirebaseConfig';


const Login = () => {
  const [phoneNumber, SetPhoneNumber] = useState();
  const auth = FIREBASE_AUTH;
  return (
    <View>
      <TextInput
        value={phoneNumber}
        placeholder="Telefonnummer"
        onChangeText={text => SetPhoneNumber(text)}>
        Login
      </TextInput>
    </View>
  );
};

export default Login;
