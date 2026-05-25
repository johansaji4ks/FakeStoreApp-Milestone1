import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </Text>

      {isSignUp && (
        <TextInput
          placeholder="Name"
          style={styles.input}
        />
      )}

      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setIsSignUp(!isSignUp)}
      >
        <Text style={styles.toggleText}>
          {isSignUp
            ? 'Already have an account? Switch to Sign In'
            : "Don't have an account? Switch to Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },

  button: {
    backgroundColor: '#0077cc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  toggleText: {
    color: '#0077cc',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});