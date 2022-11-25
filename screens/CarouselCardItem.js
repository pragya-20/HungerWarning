import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

export const sliderWidth = Dimensions.get('window').width;
export const itemWidth = Math.round(sliderWidth);
const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.imgUrl}} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    borderColor: 'green',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    elevation: 2,
  },
});

export default CarouselCardItem;
