import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuCard from '../Components/MenuCard';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const MainScreen = props => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const getFoodImages = async () => {
    try {
      const response = await fetch('https://burgers1.p.rapidapi.com/burgers', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'b13d4452e0msh022c443e270f56bp1d7113jsn7bdfb29892ae',
          'X-RapidAPI-Host': 'burgers1.p.rapidapi.com',
        },
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFoodImages();
  }, []);
  return (
    <KeyboardAwareScrollView>
      <View style={styles.screenContainer}>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <Image
            source={require('../assets/images/menu.png')}
            style={{marginTop: 8, marginLeft: 50}}
          />
          <Icon
            name="cart"
            size={30}
            color="#808080"
            style={{marginRight: 30}}
          />
        </View>

        <Text style={styles.text}>Delicious food for you</Text>
        <View style={styles.inputView}>
          <Icon
            name="search-outline"
            size={25}
            style={styles.alignIcon}
            color="#000000"
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#000000"
            onChangeText={val => {
              setSearchTerm(val);
            }}
          />
          <Text>{searchTerm}</Text>
        </View>
        <>
          <ScrollView
            horizontal={true}
            style={styles.galleryContainer}
            contentContainerStyle={
              {
                // paddingTop: 41,
              }
            }>
            {data
              .filter(val => {
                if (searchTerm === '') {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item, i) => {
                return <MenuCard key={i} x={item} />;
              })}
          </ScrollView>
        </>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  text: {
    color: 'black',
    fontFamily: 'SF-Pro-Rounded-Heavy',
    fontSize: 34,
    marginLeft: 50,
    width: 190,
    marginTop: 45,
  },
  alignIcon: {
    alignSelf: 'center',
    marginLeft: 30,
  },
  inputView: {
    width: 260,
    borderRadius: 30,
    marginTop: 30,
    marginLeft: 50,
    backgroundColor: '#EFEEEE',
    flexDirection: 'row',
  },
  input: {
    borderRadius: 30,
    width: 187,

    color: 'gray',
    backgroundColor: '#EFEEEE',
    fontFamily: 'SF-Pro-Rounded-Semibold',
    marginLeft: 16,
  },

  galleryContainer: {
    marginBottom: 25,
    marginLeft: 30,
  },
});

export default MainScreen;
