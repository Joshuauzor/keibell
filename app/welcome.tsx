import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { IRootStackParamList } from '../types/routes.type';
import { InfoText } from '@/components/InfoText';
import { BusyButton } from '@/components/BusyButton';
import { LanguageSelector } from '@/components/LanguageSelector';
type WelcomeProps = StackScreenProps<IRootStackParamList, 'Welcome'>;

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LanguageSelector></LanguageSelector>
      <Text style={styles.header}>Suma comodidad a tu estancia</Text>
      <Text style={styles.subHeader}>
        Gestiona tus reservas desde tu móvil.
      </Text>
      <View style={styles.infoWrapper}>
        <InfoText
          text="Check in sin esperas"
          subText="Simplemente llega y disfruta de tu habitación."
          icon='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.6667 6.66669H8.33333C6.49238 6.66669 5 8.15907 5 10V33.3334C5 35.1743 6.49238 36.6667 8.33333 36.6667H31.6667C33.5076 36.6667 35 35.1743 35 33.3334V10C35 8.15907 33.5076 6.66669 31.6667 6.66669Z" stroke="#1F211F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.6665 4.58344V11.2501" stroke="#1F211F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.3335 4.58344V11.2501" stroke="#1F211F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 16.6667H35" stroke="#1F211F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        '
        ></InfoText>
        <InfoText
          text="Entra y sal sin llaves"
          subText="Abre y cierra la puerta de tu habitación cómodamente con el móvil."
          icon='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 3.33331L31.6666 6.66665M31.6666 6.66665L36.6666 11.6666L30.8333 17.5L25.8333 12.5M31.6666 6.66665L25.8333 12.5M18.9833 19.35C19.8439 20.1991 20.528 21.21 20.9962 22.3246C21.4645 23.4392 21.7076 24.6354 21.7117 25.8444C21.7157 27.0533 21.4806 28.2511 21.0198 29.3688C20.5591 30.4865 19.8817 31.502 19.0269 32.3569C18.172 33.2117 17.1565 33.8891 16.0388 34.3498C14.9211 34.8106 13.7233 35.0457 12.5144 35.0417C11.3054 35.0376 10.1092 34.7945 8.99462 34.3262C7.88003 33.858 6.86908 33.1739 6.01997 32.3133C4.35019 30.5845 3.42624 28.2689 3.44712 25.8655C3.46801 23.462 4.43206 21.1629 6.13163 19.4633C7.83121 17.7637 10.1303 16.7997 12.5338 16.7788C14.9373 16.7579 17.2528 17.6819 18.9816 19.3516L18.9833 19.35ZM18.9833 19.35L25.8333 12.5" stroke="#1F211F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      '
        ></InfoText>
        <InfoText
          text="Enriquece tu experiencia"
          subText="Personaliza tu estancia con servicios adicionales."
          icon='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 13.3333H31.6667C33.4348 13.3333 35.1305 14.0357 36.3807 15.2859C37.631 16.5362 38.3333 18.2319 38.3333 20C38.3333 21.7681 37.631 23.4638 36.3807 24.714C35.1305 25.9643 33.4348 26.6666 31.6667 26.6666H30" stroke="#1F211F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.3335 13.3333H30.0002V28.3333C30.0002 30.1014 29.2978 31.7971 28.0475 33.0474C26.7973 34.2976 25.1016 35 23.3335 35H10.0002C8.23205 35 6.53636 34.2976 5.28612 33.0474C4.03588 31.7971 3.3335 30.1014 3.3335 28.3333V13.3333Z" stroke="#1F211F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 1.66669V6.66669" stroke="#1F211F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.6665 1.66669V6.66669" stroke="#1F211F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.3335 1.66669V6.66669" stroke="#1F211F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
      '
        ></InfoText>
      </View>
      <View style={styles.buttonStickers}>
        <Text style={styles.question}>
          <Text>¿Tienes una cuenta?</Text>
          <Text style={styles.initiate}> Inicia sesión</Text>
        </Text>
        <BusyButton
          text="Comenzar"
          onPress={() => {
            navigation.navigate('Signin');
          }}
        ></BusyButton>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 54,
    fontFamily: 'fonnts.com-Fieldwork-Geo-Fat',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 58,
    fontFamily: 'Roboto-Regular',
  },
  question: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 16,
    flexDirection: 'row',
  },
  initiate: {
    textDecorationLine: 'underline',
  },

  buttonStickers: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 17,
    paddingRight: '4%',
  },
});
