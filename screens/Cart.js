import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import ItemDetail from './ItemDetail';
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = () => {
  const {cartItem} = useContext(cartContext);
  // console.log('Cart Page--', cart);
  return (
    <View>
      <Text style={{color: 'olive'}}>Here is your Cart!</Text>
      {/* <Text style={{color: 'pink'}}>{cart.it</Text> */}
    </View>
  );
};
export default Cart;
