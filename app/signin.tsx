import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { IRootStackParamList } from '../types/routes.type';
import { InfoText } from '@/components/InfoText';
import { BusyButton } from '@/components/BusyButton';
import { SvgXml } from 'react-native-svg';
import { CustomHeader } from '@/components/CustomHeader';
import { LoginOption } from '@/components/LoginOption';
type SigninProps = StackScreenProps<IRootStackParamList, 'Signin'>;

const Signin: React.FC<SigninProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Entra o crea una cuenta</Text>
      <Text style={styles.subHeader}>
        Usa tu correo electrónico u otro servicio para acceder a Keibell gratis.
      </Text>
      <View style={styles.optionSelector}>
        <LoginOption
          icon='<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6143 18.424C21.2665 19.2275 20.8548 19.9672 20.3777 20.6472C19.7275 21.5743 19.1951 22.216 18.7848 22.5724C18.1488 23.1573 17.4673 23.4568 16.7376 23.4739C16.2137 23.4739 15.5819 23.3248 14.8465 23.0224C14.1087 22.7214 13.4307 22.5724 12.8107 22.5724C12.1604 22.5724 11.4631 22.7214 10.7172 23.0224C9.97012 23.3248 9.3683 23.4824 8.90818 23.498C8.2084 23.5278 7.5109 23.2197 6.81467 22.5724C6.3703 22.1848 5.81449 21.5204 5.14864 20.5791C4.43425 19.5739 3.84691 18.4084 3.38678 17.0795C2.894 15.6442 2.64697 14.2543 2.64697 12.9087C2.64697 11.3673 2.98004 10.0379 3.64716 8.92385C4.17146 8.029 4.86896 7.32312 5.74194 6.80493C6.61492 6.28674 7.55818 6.02267 8.57398 6.00578C9.12979 6.00578 9.85867 6.1777 10.7644 6.51559C11.6677 6.85462 12.2476 7.02655 12.5019 7.02655C12.692 7.02655 13.3363 6.82552 14.4284 6.42473C15.4613 6.05305 16.333 5.89916 17.0471 5.95978C18.9822 6.11595 20.4359 6.87876 21.4028 8.25303C19.6721 9.30163 18.816 10.7703 18.8331 12.6544C18.8487 14.122 19.3811 15.3432 20.4274 16.3129C20.9016 16.7629 21.4312 17.1107 22.0203 17.3578C21.8926 17.7283 21.7577 18.0832 21.6143 18.424ZM17.1763 0.960131C17.1763 2.11039 16.756 3.18439 15.9184 4.17847C14.9076 5.36023 13.6849 6.04311 12.3591 5.93536C12.3422 5.79736 12.3324 5.65213 12.3324 5.49951C12.3324 4.39526 12.8131 3.21349 13.6668 2.24724C14.093 1.75801 14.635 1.35122 15.2923 1.02671C15.9482 0.707053 16.5686 0.530273 17.1521 0.5C17.1692 0.653772 17.1763 0.807554 17.1763 0.960116V0.960131Z" fill="#1F211F"/>
</svg>
'
          onPress={() => {}}
        ></LoginOption>
        <LoginOption
          icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90912H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7637 23.04 12.2614Z" fill="#4285F4"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.4998C15.105 23.4998 17.7081 22.47 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.9259 12 18.9259C9.00474 18.9259 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z" fill="#34A853"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z" fill="#FBBC05"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z" fill="#EA4335"/>
          </svg>
          
'
          onPress={() => {}}
        ></LoginOption>
        <LoginOption
          icon='<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3088_251)">
          <path d="M24.167 12.0699C24.167 5.7186 19.0183 0.56988 12.667 0.56988C6.31571 0.56988 1.16699 5.7186 1.16699 12.0699C1.16699 17.8099 5.37238 22.5674 10.8701 23.4302V15.3941H7.9502V12.0699H10.8701V9.53629C10.8701 6.6541 12.587 5.06207 15.2138 5.06207C16.472 5.06207 17.7881 5.28668 17.7881 5.28668V8.11675H16.338C14.9094 8.11675 14.4639 9.00322 14.4639 9.91266V12.0699H17.6533L17.1435 15.3941H14.4639V23.4302C19.9616 22.5674 24.167 17.8099 24.167 12.0699Z" fill="#1877F2"/>
          </g>
          <defs>
          <clipPath id="clip0_3088_251">
          <rect width="24" height="24" fill="white" transform="translate(0.666992)"/>
          </clipPath>
          </defs>
          </svg>
          
'
          onPress={() => {}}
        ></LoginOption>
      </View>
      <Text style={styles.desc}>O usa tu correo electrónico</Text>

      <BusyButton text="Entrar con tu email" onPress={() => {}}></BusyButton>
      <Text style={styles.question}>
        <Text>¿No tienes una cuenta?</Text>
        <Text style={styles.initiate}> Crea una ahora</Text>
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
    paddingLeft: 42,
    paddingRight: 42,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 33,
    fontFamily: 'fonnts.com-Fieldwork-Geo-Fat',
  },
  subHeader: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 58,
    fontFamily: 'Roboto-Regular',
  },
  optionSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 42,
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: 'Roboto-Regular',
  },
  question: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 64,
    marginBottom: 16,
    flexDirection: 'row',
  },
  initiate: {
    textDecorationLine: 'underline',
  },
});
