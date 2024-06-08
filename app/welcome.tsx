import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { IRootStackParamList } from '../types/routes.type';

type WelcomeProps = StackScreenProps<IRootStackParamList, 'Welcome'>;

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Suma comodidad a tu estancia</Text>
      <Text style={styles.subHeader}>
        Gestiona tus reservas desde tu móvil.
      </Text>
      <Text style={styles.infoText}>Check in sin esperas</Text>
      <Text style={styles.subInfoText}>
        Simplemente llega y disfruta de tu habitación.
      </Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 36,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 24,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 58,
  },

  infoText: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 4,
  },

  subInfoText: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 4,
    color: '#1F211F',
  },
});
