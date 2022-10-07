import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginSignUp from './screens/LoginSignUp';
import TabMenu from './screens/TabMenu';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="TabMenu">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="LogIn" component={LoginSignUp}></Stack.Screen>
        <Stack.Screen name="TabMenu" component={TabMenu}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
