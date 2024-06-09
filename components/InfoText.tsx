import { View, type ViewProps, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

export type InfoTextProps = ViewProps & {
  text?: string;
  subText?: string;
  icon: string;
};

export function InfoText({ text, subText, icon }: InfoTextProps) {
  return (
    <View style={styles.container}>
      <SvgXml style={styles.icon} xml={`${icon}`} />

      <View style={styles.textContainer}>
        <Text style={styles.infoText}>{text}</Text>
        <Text style={styles.subInfoText}>{subText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  textContainer: {
    width: 320,
  },
  icon: {
    marginRight: 17,
    marginTop: 30,
    width: 40,
    height: 40,
  },
  infoText: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 4,
    fontFamily: 'fonnts.com-Fieldwork-Geo-Bold',
  },
  subInfoText: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 56,
    fontFamily: 'Roboto-Regular',
    color: '#1F211F',
  },
});
