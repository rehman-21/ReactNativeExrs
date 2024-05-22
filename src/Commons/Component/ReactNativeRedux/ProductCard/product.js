import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {addToCard} from '../ReactNativeRedux/action';
import {useDispatch} from 'react-redux';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const handlAddto = () => {
    dispatch(addToCard(item));
  };
  return (
    <View style={{flex: 1, padding: 30}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <Text> Name: {item.name}</Text>
          <Text> Color: {item.color}</Text>
          <Text> Price: {item.price}</Text>
        </View>
        <View>
          <Image style={{width: 50, height: 80}} source={item.image} />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => handlAddto(item)}
        style={{
          width: 200,
          height: 50,
          backgroundColor: '#4b4c',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <Text>Add To Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
