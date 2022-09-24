import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View style={styles.homePage}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo/logo.png')} />
      </View>
      <View style={styles.titleLineContainer}>
        <Text style={styles.title}>Food for Everyone</Text>
      </View>
      <View style={styles.imagesContainer}>
        <View style={styles.frontImageBoundary}>
          <Image
            style={styles.frontImage}
            resizeMode="contain"
            source={require('./assets/images/animeLady.png')}
          />
        </View>
        <View style={styles.backImageBoundary}>
          <Image
            style={styles.backImage}
            source={require('./assets/images/animeBoy.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View style={styles.buttonContainer}>
          <Text style={[styles.buttonTitle, styles.textCenter]}>
            Get Started
          </Text>
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
  titleLineContainer: {
    marginLeft: 51,
  },
  imagesContainer: {
    flexDirection: 'row',
  },
  frontImageBoundary: {
    flex: 1,
  },
  backImageBoundary: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 60,
    color: '#ffffff',
    fontFamily: 'SF-Pro-Rounded-Heavy',
  },
  frontImage: {
    width: 300,
    height: 454,
  },
  backImage: {
    width: 218,
    height: 330,
    zIndex: -5,
  },
  button: {
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
  buttonTitle: {
    color: '#FF460A',
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 17,
  },
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default App;
