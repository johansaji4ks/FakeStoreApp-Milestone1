import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function UserProfileScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        User Profile
      </Text>

      <Text style={styles.label}>
        User Name: Johan
      </Text>

      <Text style={styles.label}>
        Email: johan4ks@gmail.com
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          window.alert('Profile updated successfully');
        }}
      >
        <Text style={styles.buttonText}>
          Update
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          window.alert('Signed out successfully');
        }}
      >
        <Text style={styles.buttonText}>
          Sign Out
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  label: {
    fontSize: 18,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#0077cc',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});