import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Context} from '..';

const ComponentB = () => {
  const value = useContext(Context);
  return (
    <View>
      <Text>ComponentB {value}</Text>
    </View>
  );
};

export default ComponentB;

const styles = StyleSheet.create({});
