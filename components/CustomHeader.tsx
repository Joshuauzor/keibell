import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { LanguageSelector } from './LanguageSelector';

export function CustomHeader() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <SvgXml
          xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5" stroke="#1F211F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19L5 12L12 5" stroke="#1F211F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
        />
      </TouchableOpacity>
      <LanguageSelector></LanguageSelector>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
});
