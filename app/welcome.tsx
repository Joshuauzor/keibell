import Svg, { Path, SvgXml } from 'react-native-svg';

import { Component } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { IRootStackParamList } from '../types/routes.type';

type WelcomeProps = StackScreenProps<IRootStackParamList, 'Welcome'>;

export class Welcome extends Component<WelcomeProps> {
  render() {
    return (
      <View>
        <Text>Welcome Mate</Text>
      </View>
    );
  }
}
