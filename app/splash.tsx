import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const SplashScreen = ({ navigation }) => {
  const [input, setInput] = useState<string>(''); // User input for character search
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const handleSubmit = () => {
    // submit functionality here
  };

  // Render the UI components
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keibell.</Text>
      <TextInput
        value={input}
        placeholder="Enter character name"
        onChangeText={(input) => setInput(input)}
        style={styles.inputField}
        editable={true}
      />

      {/* Button to trigger the character search */}
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.button}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text
        style={styles.next}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Go to second screen
      </Text>

      {/* Display the status bar */}
      <StatusBar style="auto" />
    </View>
  );
};

export default SplashScreen;

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  next: {
    marginTop: 40,
  },
});
