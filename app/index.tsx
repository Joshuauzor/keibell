// Import necessary components and libraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './splash';
// import InfoScreen from './login';

const Stack = createStackNavigator();

// Define the main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <Stack.Screen name="InfoScreen" component={InfoScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
