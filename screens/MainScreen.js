import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import Favorite from './Favorite';
import Profile from './Profile';
import MenuCard from '../Components/MenuCard';

const Tab = createBottomTabNavigator();

const MainScreen = props => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          let iconColor;
          if (route.name === 'Main') {
            iconName = focused ? 'home' : 'home-outline';
            iconColor = focused ? 'red' : '#ADADAF';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = focused ? 'timer' : 'timer-outline';
          }
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderColor: 'green',
                width: '100%',
              }}>
              <View>
                <Icon name={iconName} color={iconColor} size={25} />
              </View>
            </View>
          );
        },

        tabBarActiveTintColor: 'blue',
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabel: () => {
          return null;
        },
      })}>
      <Tab.Screen name="Main" component={Main} options={{headerShown: false}} />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Main = () => {
  const [data, setData] = useState([]);
  // console.log('Data', data);
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
      // console.log('Json Response--', json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFoodImages();
  }, []);
  return (
    <>
      <View style={styles.screenContainer}>
        <TouchableOpacity
          onPress={() => {
            // console.log('Back');
          }}>
          <Icon
            name="chevron-back"
            size={25}
            style={{marginTop: 20, marginLeft: 20}}
          />
        </TouchableOpacity>

        <Text style={styles.text}>Delicious food for you</Text>
        <View style={styles.inputView}>
          <Icon name="search-outline" size={25} style={styles.alignIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#000000"
            placeholderStyle
          />
        </View>
        <>
          <ScrollView
            horizontal={true}
            style={styles.galleryContainer}
            contentContainerStyle={{
              paddingTop: 51,
            }}>
            {data.map((item, i) => {
              // console.log(item.name);
              return <MenuCard x={item} />;
            })}
          </ScrollView>
        </>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    // borderWidth: 2,
    // borderColor: 'green',
  },
  text: {
    color: 'black',
    fontFamily: 'SF-Pro-Rounded-Heavy',
    fontSize: 34,
    marginLeft: 50,
    width: 190,
    marginTop: 45,
    // borderWidth: 2,
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
    // borderWidth: 1,
    // borderColor: 'green',
    backgroundColor: '#EFEEEE',
    fontFamily: 'SF-Pro-Rounded-Light',
    marginLeft: 16,
  },

  galleryContainer: {
    // flex: 1,
    // borderWidth: 2,
    // borderColor: 'yellow',
    marginBottom: 25,
    marginLeft: 30,
  },

  card: {
    width: 220,
    height: 270,
    borderRadius: 45,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20,
  },
  circle: {
    backgroundColor: 'pink',
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: -51,
  },
});

export default MainScreen;
