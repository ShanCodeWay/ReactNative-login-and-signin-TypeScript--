import React, { useState } from 'react';
import {
  NavigationContainer,
  createStackNavigator,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  AppbarImage,
  useState as useStateImport,
  backgroundImage,
  useNavigation,
} from '../Imports/imports';

import { signupScreenStyles } from '../Styles/signupScreenStyles';

const SignupScreen: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useStateImport<string>('');
  const [email, setEmail] = useStateImport<string>('');
  const [password, setPassword] = useStateImport<string>('');

  const handleSignup = () => {
    try {
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error during signup:', error);
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ImageBackground source={backgroundImage} style={signupScreenStyles.backgroundImage}>
        <View style={signupScreenStyles.container}>
          <TextInput
            style={signupScreenStyles.input}
            placeholder="Enter your name"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={signupScreenStyles.input}
            placeholder="Enter your Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={signupScreenStyles.input}
            placeholder="Enter your Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TextInput
            style={signupScreenStyles.input}
            placeholder="Confirm your Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

          <TouchableOpacity style={signupScreenStyles.buttonS} onPress={handleSignup}>
            <Text style={signupScreenStyles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={signupScreenStyles.signup}>Already have an account?</Text>
          <TouchableOpacity style={signupScreenStyles.buttonL} onPress={() => navigation.navigate('Log-in')}>
            <Text style={signupScreenStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
