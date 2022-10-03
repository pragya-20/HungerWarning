import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import HomeScreen from './HomeScreen';
// import Favorite from './Favorite';
// import Profile from './Profile';

const Main = props => {
  // console.log(props);
  return (
    <View style={{justifyContent: 'flex-end'}}>
      <View style={styles.card}>
        <View style={styles.circle}></View>
        <Text
          key={props.x.i}
          style={{
            color: 'red',
            // alignSelf: 'flex-start',
            // justifyContent: 'center',
            // textAlign: 'center',
            textAlignVertical: 'bottom',
            borderWidth: 1,

            marginTop: 30,
            textAlign: 'center',
            // textAlignVertical: 'center',
          }}>
          {props.x.name}
        </Text>
      </View>
    </View>
  );
  //  );
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
    marginTop: 45,
    // borderWidth: 2,
  },
  alignIcon: {
    alignSelf: 'center',
    marginLeft: 30,
  },
  inputView: {
    width: 260,
    borderRadius: 30,
    marginTop: 30,
    marginLeft: 50,
    backgroundColor: '#EFEEEE',
    flexDirection: 'row',
  },
  input: {
    borderRadius: 30,
    width: 187,
    // borderWidth: 1,
    // borderColor: 'green',
    backgroundColor: '#EFEEEE',
    fontFamily: 'SF-Pro-Rounded-Light',
    marginLeft: 16,
  },

  galleryContainer: {
    // flex: 1,
    // borderWidth: 2,
    // borderColor: 'yellow',
    marginBottom: 25,
    marginLeft: 30,
  },

  card: {
    width: 220,
    height: 270,
    borderRadius: 45,
    backgroundColor: '#ffffff',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  circle: {
    backgroundColor: 'pink',
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: -51,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
