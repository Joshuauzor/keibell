import { View, type ViewProps, Text, StyleSheet } from 'react-native';

export type InfoTextProps = ViewProps & {
  text?: string;
  subText?: string;
};

export function InfoText({ text, subText }: InfoTextProps) {
  return (
    <View>
      <Text style={styles.infoText}>{text}</Text>
      <Text style={styles.subInfoText}>{subText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 56,
    color: '#1F211F',
  },
});
