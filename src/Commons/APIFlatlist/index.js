import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

const APIFLATLIST = () => {
  const data = {
    name: 'rahman',
    age: 24,
    email: 'rahman2121@gmail.com',
  };
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    let result = await fetch(url, {
      method: 'USERS',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify,
    });
    result = result;
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={getAPIData}
        style={{width: 300, height: 40, backgroundColor: '#4b4c'}}>
        <Text style={{color: '#000'}}>Count</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default APIFLATLIST;

const styles = StyleSheet.create({});
