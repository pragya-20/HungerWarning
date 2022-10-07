import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Favorite from './Favorite';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import MainScreen from './MainScreen';

const Tab = createBottomTabNavigator();

const BottomMenu = props => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            let iconColor;

            if (route.name === 'MainScreen') {
              if (focused) {
                iconName = 'home';
                iconColor = '#FA4A0C';
              } else {
                iconName = 'home-outline';
                iconColor = '#ADADAF';
              }
            } else if (route.name === 'Favorite') {
              if (focused) {
                iconName = 'heart-sharp';
                iconColor = '#FA4A0C';
              } else {
                iconName = 'heart-outline';
                iconColor = '#ADADAF';
              }
            } else if (route.name === 'ProfileScreen') {
              if (focused) {
                iconName = 'person';
                iconColor = '#FA4A0C';
              } else {
                iconName = 'person-outline';
                iconColor = '#ADADAF';
              }
            } else {
              if (focused) {
                iconName = 'timer';
                iconColor = '#FA4A0C';
              } else {
                iconName = 'timer-outline';
                iconColor = '#ADADAF';
              }
            }
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderColor: 'green',
                  width: '100%',
                }}>
                <View>
                  <Icon name={iconName} color={iconColor} size={25} />
                </View>
              </View>
            );
          },

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
              Alert.alert('Signed Out');
            },
          }}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({});

export default BottomMenu;
