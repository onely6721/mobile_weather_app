import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home/Home';
import SelectPlace from './pages/SelectPlace/SelectPlace';
import WeatherInfo from './pages/WeatherInfo/WeatherInfo';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{title: 'Welcome'}}
          component={Home}
        />
        <Stack.Screen name="SelectPlace" component={SelectPlace} />
        <Stack.Screen name="WeatherInfo" component={WeatherInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
