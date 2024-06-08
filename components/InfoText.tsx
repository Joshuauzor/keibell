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
      <View style={styles.desc}>
        <Text style={styles.infoText}>{text}</Text>
        <Text style={styles.subInfoText}>{subText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    width: '100%',
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

  icon: {
    width: 40,
    height: 40,
  },

  desc: {
    marginRight: 70,
  },
});
