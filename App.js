import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginSignUp from './screens/LoginSignUp';
import MainScreen from './screens/MainScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LogIn">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="LogIn" component={LoginSignUp}></Stack.Screen>
        <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
