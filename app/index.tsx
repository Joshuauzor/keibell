// Import necessary components and libraries
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './splash';
import Welcome from './welcome';
import { IRootStackParamList } from '../types/routes.type';

const Stack = createStackNavigator<IRootStackParamList>();

// Define the main App component
export default function App() {
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
