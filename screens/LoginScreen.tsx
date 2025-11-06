import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Import from App.tsx
import { findUserByEmail } from './users';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from '../screens/BottomNavBar';


type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;
type LoginScreenNavigationProp = LoginScreenProps['navigation'];
type LoginScreenRouteProp = LoginScreenProps['route'];

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const { from, params } = (navigation.getState().routes.find(r => r.name === 'Login')?.params as any) || {};

  const handleLogin = async () => {
    setError(null);
    setIsLoading(true);

    // Basic Validation
    if (!email || !password) {
      setError('Email and password are required.');
      setIsLoading(false);
      return;
    }

    try {
      const user = await findUserByEmail(email);

      if (!user || user.password !== password) {
        setError('Invalid email or password. Please try again.');
        setIsLoading(false);
        return;
      }

      // If login is part of a flow (e.g., enrollment), go back to that screen.
      if (from === 'FeeCalculationResults' && params) {
        navigation.navigate('FeeCalculationResults', { ...params, userName: user.fullName });
      } else {
        // Otherwise, go to the Home screen.
        navigation.replace('Home', { userName: user.fullName });
      }
    } catch (e) {
      setError('An unexpected error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Log in to continue your journey.</Text>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput
        style={[styles.input, focusedInput === 'email' && styles.inputFocused]}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
        onFocus={() => setFocusedInput('email')}
        onBlur={() => setFocusedInput(null)}
      />

      <View style={[styles.inputContainer, focusedInput === 'password' && styles.inputFocused]}>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="#888"
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput(null)}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.eyeIcon}>
          <Icon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <Pressable
        onPress={handleLogin}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#b39c36' : '#CFB53B' },
        ]}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#004225" />
        ) : (
          <Text style={styles.buttonText}>LOGIN</Text>
        )}
      </Pressable>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
    <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004225',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    color: '#333',
  },
  inputFocused: {
    borderColor: '#004225',
    borderWidth: 1.5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputField: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    padding: 15,
  },
  button: {
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#004225',
    fontSize: 16,
  },
  signupText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  signupLink: {
    color: '#004225',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#D32F2F',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
  },
});

export default LoginScreen;