import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { IRootStackParamList } from '../types/routes.type';
import { InfoText } from '../components/InfoText';
type WelcomeProps = StackScreenProps<IRootStackParamList, 'Welcome'>;

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Suma comodidad a tu estancia</Text>
      <Text style={styles.subHeader}>
        Gestiona tus reservas desde tu móvil.
      </Text>

      <InfoText
        text="Check in sin esperas"
        subText="Simplemente llega y disfruta de tu habitación."
      ></InfoText>
      <InfoText
        text="Entra y sal sin llaves"
        subText="Abre y cierra la puerta de tu habitación cómodamente con el móvil."
      ></InfoText>
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
    fontFamily: 'fonnts.com-Fieldwork-Geo-Fat',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 58,
    fontFamily: 'Roboto-Black',
  },
});
