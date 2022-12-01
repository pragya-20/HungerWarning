import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Favorite = () => {
  return (
    <View style={styles.favouriteContainer}>
      <Text style={styles.favoriteText}>Favorite Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  favouriteContainer: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteText: {
    color: '#000000',
  },
});
export default Favorite;
