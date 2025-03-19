import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import Bilgi1 from './src/screens/Bilgi1';
import HakkimizdaScreen from './src/screens/Hakkimizda';
import Giris from './src/screens/Giris';
import Demo from './src/screens/demo';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Bilgi1' component={Bilgi1} />
          <Stack.Screen name='Hakkimizda' component={HakkimizdaScreen} />
          <Stack.Screen name='Giris' component={Giris} />
          <Stack.Screen name='demo' component={Demo} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
