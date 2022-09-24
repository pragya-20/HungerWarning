import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View style={styles.homePage}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo/logo.png')}></Image>
      </View>
      <View style={styles.tagLineContainer}>
        <Text style={styles.title}>Food for Everyone</Text>
      </View>
      <View style={styles.imagesContainer}>
        <View style={styles.imageBoundaryFocused}>
          <Image
            style={styles.imageFocused}
            resizeMode="contain"
            source={require('./assets/images/animeLady.png')}
          />
        </View>
        <View style={styles.imageBoundaryDiffused}>
          <Image
            style={styles.imageDiffused}
            source={require('./assets/images/animeBoy.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.touchableStyle} onPress={() => {}}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttomText}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: '#FF4B3A',
  },
  logoContainer: {
    height: 73,
    width: 73,
    backgroundColor: 'white',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 49,
    marginTop: 56 / 2,
  },
  tagLineContainer: {
    marginLeft: 51,
  },
  imagesContainer: {
    flexDirection: 'row',
  },
  imageBoundaryFocused: {
    flex: 1,
  },
  imageBoundaryDiffused: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 60,
    color: '#ffffff',
    fontFamily: 'SF-Pro-Rounded-Heavy',
  },
  imageFocused: {
    width: 300,
    height: 454,
  },
  imageDiffused: {
    width: 218,
    height: 330,
    zIndex: -5,
  },
  touchableStyle: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
  },
  buttonContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 314,
    marginVertical: 12,
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
  },
  buttomText: {
    color: '#FF460A',
    textAlign: 'center',
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 17,
    textAlignVertical: 'center',
  },
});

export default App;
