import React, {useState, createContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemDetail = props => {
  console.log(props);
  const navigation = props.navigation;
  const itemName = props.route.params.name;
  //   return (
  //
  //   );
  // };

  const [iconClicked, setIconClick] = useState(false);
  const clickIcon = () => {
    setIconClick(true);
  };

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
          name="cart"
          size={23}
          color={iconClicked ? '#FA4A0C' : '#000000'}
          style={styles.favoriteIcon}
          onPress={() => {
            clickIcon();
            navigation.navigate('Favorite');
          }}
        />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{itemName}</Text>
      </View>
      <Pressable style={styles.addToCartConatiner}>
        <Text style={styles.addtocartStyle}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {backgroundColor: '#F2F2F2', flex: 1, borderWidth: 1},
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
    color: '#ffffff',
    fontFamily: 'SF-Pro-Rounded-Semibold',
    fontSize: 22,
  },
  itemContainer: {
    width: 250,
    height: 250,
    backgroundColor: 'pink',
    borderRadius: 30,
    marginTop: 100,
    marginLeft: 60,
    marginRight: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartConatiner: {
    backgroundColor: 'pink',
    marginTop: 200,
    width: 180,
    height: 38,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  addtocartStyle: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'SF-Pro-Rounded-Regular',
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
