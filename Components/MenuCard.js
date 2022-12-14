import React from 'react';
import {View, Text, StyleSheet, Touchable, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ItemDetail from '../screens/ItemDetail';

const Main = props => {
  const itemName = props.x.name;
  const navigation = useNavigation();
  return (
    <View style={styles.menuCardContainer}>
      <Pressable
        style={styles.card}
        onPress={() => {
          navigation.navigate('ItemDetail', {name: itemName});
        }}>
        <View style={styles.circle}></View>
        <Text key={props.x.id} style={styles.dishNameStyle}>
          {props.x.name}
        </Text>
        <Text style={styles.restaurantNameStyle}>{props.x.restaurant}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menuCardContainer: {justifyContent: 'center'},
  card: {
    width: 220,
    height: 270,
    borderRadius: 45,
    backgroundColor: '#ffffff',

    marginRight: 20,
    marginLeft: 20,
    marginTop: 100,
    alignSelf: 'center',
  },
  circle: {
    backgroundColor: 'pink',
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: -51,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dishNameStyle: {
    color: 'black',
    textAlignVertical: 'bottom',
    fontSize: 22,
    fontFamily: 'SF-Pro-Rounded-Semibold',
    marginTop: 33,
    textAlign: 'center',
  },
  restaurantNameStyle: {
    color: '#FA4A0C',
    textAlignVertical: 'bottom',
    fontSize: 17,
    fontFamily: 'SF-Pro-Rounded-Semibold',
    marginTop: 15,
    textAlign: 'center',
  },
});

export default Main;
