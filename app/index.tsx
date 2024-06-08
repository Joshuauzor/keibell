// Import necessary components and libraries
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './splash';
import Welcome from './welcome';
import { IRootStackParamList } from '../types/routes.type';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

const Stack = createStackNavigator<IRootStackParamList>();

// Define the main App component
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'fonnts.com-Fieldwork-Geo-Fat': require('../assets/fonts/fonnts.com-Fieldwork-Geo-Black.otf'),
    'fonnts.com-Fieldwork-Geo-Regular': require('../assets/fonts/fonnts.com-Fieldwork-Geo-Regular.otf'),
    'fonnts.com-Fieldwork_Hum_Regular': require('../assets/fonts/fonnts.com-Fieldwork_Hum_Regular.otf'),
    'fonnts.com-Fieldwork-Geo-Demibold': require('../assets/fonts/fonnts.com-Fieldwork-Geo-Demibold.otf'),
    'fonnts.com-Fieldwork-Geo-Bold': require('../assets/fonts/fonnts.com-Fieldwork-Geo-Bold.otf'),
  });

  if (fontsLoaded && !fontError) {
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
      </Stack.Navigator>
    );
  }
}
