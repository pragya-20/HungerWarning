import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Touchable,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginSignUp from './LoginSignUp';
import HomeScreen from './HomeScreen';
import Favorite from './Favorite';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderColor: 'green',
                  width: '100%',
                }}>
                <View>
                  <Icon name="home" color="#ADADAF" size={25} />
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderColor: 'green',
                  width: '100%',
                }}>
                <Icon name="heart-outline" color="#ADADAF" size={25} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginSignUp}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderColor: 'green',
                  width: '100%',
                }}>
                <Icon name="person-outline" color="#ADADAF" size={25} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderColor: 'green',
                  width: '100%',
                }}>
                <Icon name="timer-outline" color="#ADADAF" size={25} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Delicious food for you</Text>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#000000"
        placeholderStyle
      />
      <ScrollView
        horizontal={true}
        style={styles.galleryContainer}
        contentContainerStyle={{
          paddingTop: 51,
        }}>
        <View style={{justifyContent: 'flex-end'}}>
          <View style={styles.card}>
            <View style={styles.circle}></View>
          </View>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <View style={styles.card}>
            <View style={styles.circle}></View>
          </View>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <View style={styles.card}>
            <View style={styles.circle}></View>
          </View>
        </View>

        <View style={{justifyContent: 'flex-end'}}>
          <View style={styles.card}>
            <View style={styles.circle}></View>
          </View>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <View style={styles.card}>
            <View style={styles.circle}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    // borderWidth: 2,
    // borderColor: 'green',
  },
  text: {
    color: 'black',
    fontFamily: 'SF-Pro-Rounded-Heavy',
    fontSize: 34,
    marginLeft: 50,
    width: 190,
    marginTop: 85,
    // borderWidth: 2,
  },
  input: {
    width: 260,
    height: 60,
    // borderWidth: 2,
    // borderColor: 'red',
    borderRadius: 30,
    marginTop: 30,
    marginLeft: 50,
    backgroundColor: '#EFEEEE',
    fontFamily: 'SF-Pro-Rounded-Light',
  },
  galleryContainer: {
    // flex: 1,
    // borderWidth: 2,
    // borderColor: 'yellow',
    // paddingTop: 60,
    marginBottom: 70,
    marginLeft: 30,
    // flexDirection: 'row',
  },
  // contentContainerStyle: {
  //   justifyContent: 'center',
  // },
  card: {
    width: 220,
    height: 270,
    // borderWidth: 2,
    // borderColor: 'green',
    borderRadius: 45,
    backgroundColor: '#ffffff',
    // marginTop: 45,
    marginRight: 20,
    marginLeft: 20,
    // position: 'absolute',
    // bottom: 50,
  },
  circle: {
    backgroundColor: 'pink',
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: -51,
    // position: 'absolute',
    // top: 0,
    // // bottom: 100,
    // left: '23%',
    // right: 20,
  },
});

export default MainScreen;
