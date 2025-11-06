import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Import from App.tsx
import { findUserByEmail, createUser } from './users';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from '../screens/BottomNavBar';

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

interface Props {
  navigation: SignupScreenNavigationProp;
}

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  // State for handling form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for handling UI feedback (errors, loading indicators, success messages)
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // State for UI enhancements (password visibility, input focus)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSignUp = async () => {
    setError(null); // Clear previous errors before a new attempt

    // --- Input Validation ---
    // It's crucial to validate user input on the client-side for a better user experience.
    if (!fullName || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    // --- Asynchronous Operations ---
    // Check if a user with this email already exists in our mock database.
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      setError('An account with this email already exists.');
      setIsLoading(false);
      return;
    }

    // If the email is unique, proceed to create the new user.
    try {
      await createUser({ fullName, email, password });
      setIsSuccess(true);
      // After successful creation, we show a success message and then
      // navigate the user to the Login screen.
      setTimeout(() => {
        navigation.replace('Login'); // Use replace to prevent going back to signup
      }, 2000); // Wait 2 seconds before navigating
    } catch (e) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // If the sign-up was successful, we render a success message instead of the form.
  if (isSuccess) {
    return (
      <View style={[styles.container, styles.successContainer]}>
        <Icon name="check-circle" size={60} color="#004225" style={{ marginBottom: 20 }} />
        <Text style={styles.successText}>Account created successfully!</Text>
        <Text style={styles.successSubText}>Redirecting to login...</Text>
      </View>
    );
  }

  // This is the main form render.
  return (
    <View style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join us and start your journey!</Text>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput
        style={[styles.input, focusedInput === 'fullName' && styles.inputFocused]}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        placeholderTextColor="#888"
        onFocus={() => setFocusedInput('fullName')}
        onBlur={() => setFocusedInput(null)}
      />
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
      <View style={[styles.inputContainer, focusedInput === 'confirmPassword' && styles.inputFocused]}>
        <TextInput
          style={styles.inputField}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
          placeholderTextColor="#888"
          onFocus={() => setFocusedInput('confirmPassword')}
          onBlur={() => setFocusedInput(null)}
        />
        <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} style={styles.eyeIcon}>
          <Icon name={isConfirmPasswordVisible ? 'eye' : 'eye-slash'} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <Pressable
        onPress={handleSignUp}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#b39c36' : '#CFB53B' }, // "Hover" effect
        ]}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#004225" />
        ) : (
          <Text style={styles.buttonText}>SIGN UP</Text>
        )}
      </Pressable>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
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
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  loginLink: {
    color: '#004225',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#D32F2F',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
  },
  successContainer: {
    alignItems: 'center',
  },
  successText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004225',
    textAlign: 'center',
  },
  successSubText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});

export default SignupScreen;