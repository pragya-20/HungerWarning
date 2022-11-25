import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import data from './Data';
import CarouselCardItem, {sliderWidth, itemWidth} from './CarouselCardItem';

const CarouselCards = () => {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
  return (
    <View style={{color: 'white', marginTop: 20}}>
      <Carousel
        layout="tinder"
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideShift={0}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0,0,0,0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.4}
        tappableDots={true}
        backgroundColor={'white'}
      />
    </View>
  );
};

export default CarouselCards;
