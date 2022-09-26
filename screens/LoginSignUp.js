import React, {useState, useRef} from 'react';
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
  const inputPasswordRef = useRef(null);
  // function mainhunFunction() {
  //   console.log('main call hua');
  //   inputPasswordRef.current.focus();
  // }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#F2F2F2'}}
      style={styles.removePadding}>
      <View style={[styles.alignImage, styles.whiteBackground]}>
        <Image source={require('../assets/images/loginImage.png')} />
      </View>

      <View style={[styles.tabContainer, styles.whiteBackground]}>
        <TouchableHighlight
          onPress={() => {
            setVisible(true);
          }}
          underlayColor="white"
          style={styles.click}>
          <Text style={[styles.buttonLeft]}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setVisible(false);
          }}
          underlayColor="white"
          style={styles.click}>
          <Text style={[styles.buttonRight, styles.textCenter]}>Signup</Text>
        </TouchableHighlight>
      </View>

      {isLogin ? (
        <View style={styles.active} />
      ) : (
        <View style={[styles.active, styles.reverse]} />
      )}

      <Text style={[styles.inputLabel, styles.spacer]}>Email address</Text>
      <TextInput
        style={styles.input}
        onSubmitEditing={() => {
          inputPasswordRef.current.focus();
        }}
        // onSubmitEditing={inputPasswordRef.current.focus}
      />

      <Text style={[styles.inputLabel, styles.shortSpacer]}>Password</Text>
      <TextInput style={styles.input} ref={inputPasswordRef} />

      <Text
        style={[styles.text, styles.shortSpacer]}
        onPress={() => Linking.openURL('http://google.com')}>
        {isLogin ? 'Forgot passcode ?' : ''}
      </Text>

      <View style={[styles.selfCenter, styles.border]} onPress={() => {}}>
        <TouchableOpacity style={[styles.buttonContainer, styles.selfCenter]}>
          <Text style={[styles.buttonTitle, styles.textCenter]}>
            {isLogin ? 'Login' : 'Signup'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  removePadding: {
    padding: 0,
  },

  alignImage: {
    height: 330,
    justifyContent: 'center',
    alignItems: 'center',
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
    alignSelf: 'center',
  },
  buttonLeft: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'SF-Pro-Rounded-Medium',
    fontSize: 20,
    marginBottom: 14,
    marginLeft: 20,
    textAlign: 'center',
  },
  buttonRight: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'SF-Pro-Rounded-Medium',
    fontSize: 20,
    marginBottom: 14,
    marginRight: 28,
    textAlign: 'center',
  },
  spacer: {
    marginTop: 30,
  },
  shortSpacer: {
    marginTop: 10,
  },
  active: {
    width: '38%',
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
  border: {
    flex: 1,
    justifyContent: 'flex-end',
    marginVertical: 20,
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
    marginHorizontal: 40,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default LoginSignUp;
