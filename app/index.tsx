// Import necessary components and libraries
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './signin';
import Splash from './splash';
import Welcome from './welcome';
import { IRootStackParamList } from '../types/routes.type';
import { CustomHeader } from '@/components/CustomHeader';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator<IRootStackParamList>();

export default function App() {
  let customFonts = {
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'fonnts.com-Fieldwork-Geo-Black': require('../assets/fonts/fonnts.com-Fieldwork-Geo-Black.otf'),
    'fonnts.com-Fieldwork-Geo-Bold': require('../assets/fonts/fonnts.com-Fieldwork-Geo-Bold.otf'),
  };

  const [fontsLoaded, fontError] = useFonts(customFonts);

  if (!fontsLoaded && !fontError) {
    return (
      <View style={styles.container}>
        <Text>loading fonts</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          title: 'Splash',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: 'Welcome',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          header: () => <CustomHeader />,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
