import {
  View,
  StyleSheet,
  ViewProps,
  GestureResponderEvent,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export type BusyButtonProps = ViewProps & {
  icon: string;
  onPress: (event: GestureResponderEvent) => void;
};

export function LoginOption({ icon, onPress }: BusyButtonProps) {
  return (
    <View style={styles.languageContainer}>
      <SvgXml
        xml={`${icon} 
        `}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  languageContainer: {
    flexDirection: 'row',
    borderColor: '#1F211F',
    borderWidth: 1,
    borderRadius: 48,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 8,
    width: 96.67,
    height: 48,
    justifyContent: 'center',
  },
});
