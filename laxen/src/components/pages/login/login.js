import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Text,
  Image,
} from 'react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {FIREBASE_AUTH, FIREBASE_APP} from './FirebaseConfig';
import { primary,secondary,neutral } from '../../modules/colors/colors';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const SignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert('Sign in failed');
    } finally {
      setLoading(false);
    }
  };

  const SignUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      Alert.alert('Created account');
    } catch (error) {
      Alert.alert('Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logoContainer}>
        <Image source={require('./fish.png')} style={styles.logo} />
        <Text style={styles.title}>Laxen</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        {loading ? (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color={primary}
          />
        ) : (
          <>
            <Button title="Login" onPress={SignIn} color={primary} />
            <Button title="Signup" onPress={SignUp} color={secondary} />
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: neutral,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 120,
    marginBottom: 40,
    transform: [{rotate: '180deg'}],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: primary,
  },
  formContainer: {
    width: '80%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  input: {
    borderWidth: 1,
    borderColor: primary,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  loader: {
    marginVertical: 20,
  },
});

export default Login;
