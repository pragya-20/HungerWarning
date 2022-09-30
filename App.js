import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginSignUp from './screens/LoginSignUp';
import MainScreen from './screens/MainScreen';
import auth from '@react-native-firebase/auth';
// import {useState} from 'react';

const Stack = createNativeStackNavigator();

function App() {
  // const [user, setUser] = useState(null);

  // function isStateChanged(loggedUser) {
  //   console.log('UserRceived', loggedUser);
  //   setUser(loggedUser);
  // }

  // useEffect(() => {
  //   console.log('useEffect called');
  //   const subscriber = auth().onAuthStateChanged(isStateChanged);
  //   return subscriber;
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="MainScreen">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="LogIn" component={LoginSignUp}></Stack.Screen>
        <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
