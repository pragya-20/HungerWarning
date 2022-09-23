/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type {Node} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FF4B3A'}}>
      <View
        style={{
          height: 73,
          width: 73,
          backgroundColor: 'white',
          borderRadius: 32,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 49,
          marginTop: 56 / 2,
        }}>
        <Image source={require('./assets/logo/logo.png')}></Image>
      </View>
      <View
        style={{
          // marginTop: 10,
          marginLeft: 51,
          // borderWidth: 2,
          // borderColor: 'white',
          // alignSelf: 'center',
        }}>
        <Text style={styles.landingFont}>Food for Everyone</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Image
            style={styles.imageLeft}
            resizeMode="contain"
            source={require('./assets/images/ToyFaces_Tansparent_BG_49LadyIcon.png')}
          />
        </View>
        <View style={{flex: 1, alignSelf: 'flex-end'}}>
          <Image
            style={styles.imageRight}
            source={require('./assets/images/ToyFaces_Tansparent_BG_29Toy2.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 12,
          alignSelf: 'center',
        }}
        onPress={() => {}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            width: 314,
            marginVertical: 12,
            alignSelf: 'center',
            borderRadius: 30,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#FF460A',
              textAlign: 'center',
              fontFamily: 'SF-Pro-Rounded-Regular',
              fontSize: 17,
              textAlignVertical: 'center',
            }}>
            Get Started
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  landingFont: {
    fontSize: 60,
    color: '#ffffff',
    fontFamily: 'SF-Pro-Rounded-Heavy',
    //    marginTop: 30,
    //marginLeft: 30,
  },
  imageLeft: {
    width: 300,
    height: 454,
  },
  imageRight: {
    width: 218,
    height: 330,
    zIndex: -5,
  },
});

export default App;
