import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import config from '../config/config.json';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
     
      console.log('Passwords do not match');
      return;
    }

    n
    navigation.navigate('Home');
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Flavory</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.centeredBox}>
          <Text style={styles.welcomeText}>Create your account</Text>
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
            <TextInput
              style={styles.input}
              onChangeText={text => setConfirmPassword(text)}
              value={confirmPassword}
              placeholder="Confirm Password"
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonBox}>
              <Button title="Sign Up" onPress={handleSignUp} />
            </View>
            <View style={styles.buttonBox}>
              <TouchableOpacity onPress={navigateToLogin}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
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
    fontSize: 24,
    color: '#4D423B',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#C9BDB6',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#4D423B',
    backgroundColor: '#E8D7D2',
  },
  buttonContainer: {
    width: '80%',
  },
  buttonBox: {
    marginBottom: 10,
    backgroundColor: '#E8D7D2',
    borderRadius: 8,
    padding: 10,
  },
  loginText: {
    fontSize: 16,
    color: '#785B48',
    textAlign: 'center',
  },
});
