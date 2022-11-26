import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <View
      style={{
        backgroundColor: '#F2F2F2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.textStyle}>Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: '#000000',
  },
});
export default Profile;
