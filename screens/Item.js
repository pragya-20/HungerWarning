import React, {useState, createContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {redirect} from 'react-router';

const ItemDetail = props => {
  console.log(props);
  const itemName = props.route.params.name;
  return (
    <>
      <View style={styles.screenContainer}>
        <Text style={styles.itemName}>{itemName}</Text>
        <Pressable>
          <Text style={styles.addToCart}>Add to cart</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {backgroundColor: '#F2F2F2', flex: 1},
  menuIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  addToCart: {
    color: 'red',
  },

  itemName: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'green',
    width: 220,
    height: 220,
    borderRadius: 110,
    marginVertical: 20,
  },
  title: {
    color: '#000000',
    fontFamily: 'SF-Pro-Rounded-Medium',
    fontSize: 17,
    marginTop: 30,
    marginLeft: 50,
  },
  desc: {
    color: '#808080',
    marginLeft: 50,
    marginRight: 60,
  },
  itemDesc: {
    color: '#808080',
    marginLeft: 50,
    marginRight: 60,
    borderWidth: 1,
  },
  button: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
  },
  buttonContainer: {
    backgroundColor: '#FF460A',
    height: 60,
    width: 290,
    marginVertical: 12,
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontFamily: 'SF-Pro-Rounded-Semibold',
    fontSize: 17,
  },
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
export default ItemDetail;
