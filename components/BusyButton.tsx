import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

export type BusyButtonProps = ViewProps & {
  text?: string;
  onPress: (event: GestureResponderEvent) => void;
};

export function BusyButton({ text, onPress }: BusyButtonProps) {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <Text style={styles.loginButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    paddingVertical: 14,
    backgroundColor: '#1F211F',
    borderRadius: 48,
    alignItems: 'center',
    height: 48,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
  },
});
