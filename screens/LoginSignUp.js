import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Linking,
  KeyboardAvoidingView,
} from 'react-native';

const LoginSignUp = props => {
  const [isLogin, setVisible] = useState(true);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={styles.removePadding}>
      <View style={styles.appContainer}>
        <View style={[styles.alignImage, styles.whiteBackground]}>
          <View style={[styles.whiteBackground, styles.selfCenter]}>
            <Image source={require('../assets/images/loginImage.png')} />
          </View>
        </View>

        <View style={[styles.tabContainer, styles.whiteBackground]}>
          <TouchableHighlight
            onPress={() => {
              setVisible(true);
            }}
            underlayColor="white"
            style={styles.click}>
            <Text style={[styles.button, styles.textCenter]}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setVisible(false);
            }}
            underlayColor="white"
            style={styles.click}>
            <Text style={[styles.button, styles.textCenter]}>Signup</Text>
          </TouchableHighlight>
        </View>

        {isLogin ? (
          <View style={styles.active} />
        ) : (
          <View style={[styles.active, styles.reverse]} />
        )}

        <View>
          <View style={styles.spacer}></View>

          <Text style={styles.inputLabel}>Email address</Text>
          <TextInput style={styles.input} />

          <View style={styles.shortSpacer} />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input} />

          <View style={styles.shortSpacer} />

          <Text
            style={styles.text}
            onPress={() => Linking.openURL('http://google.com')}>
            {isLogin ? 'Forgot passcode ?' : ''}
          </Text>
        </View>

        <View
          style={[styles.alignButton, styles.selfCenter]}
          onPress={() => {}}>
          <TouchableOpacity style={[styles.buttonContainer, styles.selfCenter]}>
            <Text style={[styles.buttonTitle, styles.textCenter]}>
              {isLogin ? 'Login' : 'Signup'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  removePadding: {
    padding: 0,
  },
  appContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  alignImage: {
    height: 330,
    justifyContent: 'center',
  },
  whiteBackground: {
    backgroundColor: '#ffffff',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#ffffff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  click: {
    width: '50%',
  },
  button: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'SF-Pro-Rounded-Medium',
    fontSize: 20,
    marginBottom: 14,
  },
  spacer: {
    marginTop: 30,
  },
  container: {
    flex: 1,
  },
  shortSpacer: {
    marginTop: 10,
  },
  active: {
    width: '40%',
    borderColor: '#FA4A0C',
    borderWidth: 2,
    marginLeft: 40,
    borderRadius: 2,
  },
  reverse: {
    marginRight: 40,
    alignSelf: 'flex-end',
  },
  inputLabel: {
    fontSize: 18,
    fontFamily: 'SF-Pro-Rounded-Regular',
    marginLeft: 60,
    color: '#000000',
  },

  input: {
    padding: 0,
    fontSize: 15,
    marginHorizontal: 60,
    borderBottomWidth: 1,
    color: '#000000',
  },
  text: {
    color: '#FA4A0C',
    fontSize: 17,
    fontFamily: 'SF-Pro-Rounded-Regular',
    marginLeft: 60,
  },
  selfCenter: {
    alignSelf: 'center',
  },
  alignButton: {
    position: 'absolute',
    bottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#FA4A0C',
    height: 50,
    width: 250,
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonTitle: {
    color: '#ffffff',
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 17,
  },
  textCenter: {
    textAlign: 'center',
  },
  textFont: {
    fontFamily: 'SF-Pro-Rounded-Regular',
  },
});

export default LoginSignUp;
