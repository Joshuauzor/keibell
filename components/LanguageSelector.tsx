import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

export function LanguageSelector() {
  return (
    <View style={styles.languageContainer}>
      <SvgXml
        xml={`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" stroke="#1F211F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.3335 8H14.6668" stroke="#1F211F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.00016 1.33337C9.66768 3.15894 10.6153 5.52806 10.6668 8.00004C10.6153 10.472 9.66768 12.8411 8.00016 14.6667C6.33264 12.8411 5.38499 10.472 5.3335 8.00004C5.38499 5.52806 6.33264 3.15894 8.00016 1.33337Z" stroke="#1F211F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>      
        `}
      />
      <Text style={styles.language}>ES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  languageContainer: {
    flexDirection: 'row',
    borderColor: '#1F211F',
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 6,
    position: 'absolute',
    right: 20,
  },
  language: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    paddingLeft: 5.33,
  },
});
