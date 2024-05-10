import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const UseEffectWork = () => {
  const [showUpdata, setUpdata] = useState(0);
  useEffect(() => {
    console.warn('Updata');
  });
  return (
    <View>
      <Text>index{showUpdata}</Text>
      <Button title="Updata " onPress={() => setUpdata(showUpdata + 1)} />
    </View>
  );
};

export default UseEffectWork;

const styles = StyleSheet.create({});
