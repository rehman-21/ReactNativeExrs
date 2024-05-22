import React, {createContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ComponentA from './ComponentA';
let text = 'How to use Context';
export const Context = createContext();

const CustomContext = () => {
  return (
    <Context.Provider value={text}>
      <View>
      </View>
    </Context.Provider>
  );
};

export default CustomContext;

const styles = StyleSheet.create({});
        <ComponentA />
