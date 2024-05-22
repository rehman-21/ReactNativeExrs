import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ListApi from './src/Commons/ListAPICall';
import APIFLATLIST from './src/Commons/APIFlatlist';
import SimpleAPI from './src/Commons/HowtocallAPI';
import FormData from './src/Commons/Inputdataval';
import Header from './src/Commons/Component/ReactNativeRedux/CustomHeader/Header';
import Product from './src/Commons/Component/ReactNativeRedux/ProductCard/product';

const redux = () => {
  const Products = [
    {
      name: 'Iphone 7',
      color: 'Dark Gray',
      price: 40000,
      image: require('./src/Images/Iphone7.png'),
    },
    {
      name: 'Iphone 11',
      color: 'Dark Gray',
      price: 120000,
      image: require('./src/Images/Iphone11.png'),
    },
    {
      name: 'Sumsung 10',
      color: 'Sky Blue',
      price: 60000,
      image: require('./src/Images/Sumsung10.png'),
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          width: '100%',
          height: 60,
          backgroundColor: 'lightblue',
          paddingRight: 30,
        }}>
        <Header />
      </View>
      <ScrollView>
        {Products.map((item, index) => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default redux;

const styles = StyleSheet.create({});
