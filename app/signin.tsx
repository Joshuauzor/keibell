import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { IRootStackParamList } from '../types/routes.type';
import { InfoText } from '@/components/InfoText';
import { BusyButton } from '@/components/BusyButton';
import { SvgXml } from 'react-native-svg';
import { CustomHeader } from '@/components/CustomHeader';
type SigninProps = StackScreenProps<IRootStackParamList, 'Signin'>;

const Signin: React.FC<SigninProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Entra o crea una cuenta</Text>
      <Text style={styles.subHeader}>
        Usa tu correo electrónico u otro servicio para acceder a Keibell gratis.
      </Text>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 33,
    fontFamily: 'fonnts.com-Fieldwork-Geo-Fat',
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 58,
    fontFamily: 'Roboto-Regular',
  },
});
