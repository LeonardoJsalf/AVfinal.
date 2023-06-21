

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setLoggedIn(true);
    setUsername(email);

 
    navigation.navigate('Home');
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Flavory</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.centeredBox}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setPassword(text)}
              value={password}
              placeholder="Password"
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonBox}>
              <Button title="Login" onPress={handleLogin} />
            </View>
            <View style={styles.buttonBox}>
              <TouchableOpacity onPress={navigateToSignUp}>
                <Text style={styles.signupText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.forgotPasswordContainer} onPress={navigateToForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password? Click here.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    height: '10%',
    backgroundColor: '#785B48',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
   
  },
  centeredBox: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    color: '#4D423B',
    marginBottom: 50,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#C9BDB6',
    borderRadius: 6,
    marginBottom: 8,
    color: '#785B48',
    backgroundColor: '#F8F4E4',
    textAlign: 'left',
  },
  buttonContainer: {
   
  },
  buttonBox: {
    marginBottom: 10,
    backgroundColor: '#E8D7D2',
    borderRadius: 8,
    padding: 10,
  },
  signupText: {
    fontSize: 16,
    color: '#785B48',
    textAlign: 'center',
  },
  forgotPasswordContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 5,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  loggedInContainer: {
    alignItems: 'center',
  },
  loggedInText: {
    fontSize: 20,
    color: '#4D423B',
    marginBottom: 20,
  },
});



