import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Favorite from './Favorite';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import MainScreen from './MainScreen';
import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();

const signOut = () => {
  auth().signOut();
};
const BottomMenu = () => {
  const tabBarIcons = ({focused, route}) => {
    let iconName;
    let iconColor;
    const iconPropertiesMap = {
      MainScreen: [
        {name: 'home', color: '#FA4A0C'},
        {name: 'home-outline', color: '#ADADAF'},
      ],
      Favorite: [
        {name: 'heart-sharp', color: '#FA4A0C'},
        {name: 'heart-outline', color: '#ADADAF'},
      ],
      ProfileScreen: [
        {name: 'person', color: '#FA4A0C'},
        {name: 'person-outline', color: '#ADADAF'},
      ],
      Home: [
        {name: 'timer', color: '#FA4A0C'},
        {name: 'timer-outline', color: '#ADADAF'},
      ],
    };
    const index = focused ? 0 : 1;
    iconProp = iconPropertiesMap[route.name][index];
    iconName = iconProp.name;
    iconColor = iconProp.color;
    return (
      <View style={styles.tabsContainer}>
        <View>
          <Icon name={iconName} color={iconColor} size={25} />
        </View>
      </View>
    );
  };
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => tabBarIcons({focused, route}),
          tabBarActiveTintColor: 'blue',
          tabBarStyle: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
            paddingBottom: 10,
          },
          tabBarLabel: () => {
            return null;
          },
        })}>
        <Tab.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={Profile}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              signOut();
            },
          }}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'green',
    width: '100%',
  },
});

export default BottomMenu;
