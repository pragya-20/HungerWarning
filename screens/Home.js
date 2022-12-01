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
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FF4B3A'}}>
      <Text style={styles.landingFont}>Food for Everyone</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'orange',
    borderRadius: 50,
    borderWidth: 5,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  landingFont: {
    fontSize: 60,
    fontWeight: '600',
    //top: '160',
    paddingTop: 160,
    paddingLeft: 51,
    fontFamily: 'SF Pro Rounded',
    color: '#ffffff',
  },
});

export default Home;
