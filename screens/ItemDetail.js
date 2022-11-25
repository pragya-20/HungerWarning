import React, {useState, createContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import addToCart from '../App';
import Icon from 'react-native-vector-icons/Ionicons';
import CarouselCards from './CarouselCards';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const ItemDetail = ({route, navigation, addToCart}) => {
  const {itemName, restaurantName, ingredients, description, key} =
    route.params;
  const {cartAdd} = addToCart;
  // console.log(route.params);
  const [iconClicked, setIconClick] = useState(false);
  const clickIcon = () => {
    setIconClick(true);
  };
  const [cart, setCart] = useState([]);

  console.log(cart);
  return (
    <View style={styles.screenContainer}>
      <View style={styles.menuIconContainer}>
        <Icon
          name="chevron-back"
          size={23}
          color="#000000"
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Icon
          name={iconClicked ? 'heart' : 'heart-outline'}
          size={23}
          color={iconClicked ? '#FA4A0C' : '#000000'}
          style={styles.favoriteIcon}
          onPress={() => {
            clickIcon();
            navigation.navigate('Favorite');
          }}
        />
      </View>

      <CarouselCards style={{marginTop: 20}} />
      <Text
        style={{
          color: '#000',
          // marginTop: 20,
          fontSize: 28,
          fontFamily: 'SF-Pro-Rounded-Medium',
          textAlign: 'center',
        }}>
        {itemName}
      </Text>
      <Text
        style={{
          color: '#FA4A0C',
          fontSize: 22,
          fontFamily: 'SF-Pro-Rounded-Medium',
          textAlign: 'center',
        }}>
        {restaurantName}
      </Text>
      <Text style={styles.title}>Description: </Text>
      <Text style={styles.desc}>
        {description === 'N/A' ? 'A mouth-watering dish' : description}
      </Text>
      <Text style={styles.title}>Ingredients</Text>
      <Text style={styles.desc}>
        {ingredients.map(i => {
          return (
            <Text style={styles.itemDesc} key={i}>
              {'\u2022'}
              {i}
              {'   '}
            </Text>
          );
        })}
      </Text>
      <addToCart.Provider value={{cart, setCart}} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('Pressed');
          setCart([route]);
          // setCart()
        }}>
        <View style={styles.buttonContainer}>
          <Text style={[styles.buttonTitle, styles.textCenter]}>
            Add to Cart
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {backgroundColor: '#F2F2F2', flex: 1},
  menuIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  backIcon: {
    marginLeft: 30,
  },
  favoriteIcon: {marginRight: 40},
  itemName: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
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
