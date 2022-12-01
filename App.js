import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginSignUp from './screens/LoginSignUp';
import TabMenu from './screens/TabMenu';
import auth from '@react-native-firebase/auth';
import ItemDetail from './screens/ItemDetail';
const Stack = createNativeStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function isStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(isStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="TabMenu" component={TabMenu}></Stack.Screen>
            <Stack.Screen
              name="ItemDetail"
              component={ItemDetail}></Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}></Stack.Screen>
            <Stack.Screen
              name="LogInSignUp"
              component={LoginSignUp}></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
