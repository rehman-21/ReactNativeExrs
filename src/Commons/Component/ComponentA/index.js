import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ComponentB from '../ComponentB';

const ComponentA = () => {
  return (
    <View>
      <ComponentB />
    </View>
  );
};

export default ComponentA;

const styles = StyleSheet.create({});
