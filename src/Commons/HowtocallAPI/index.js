import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const SimpleAPI = () => {
  const [data, setData] = useState();
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <ScrollView>
      {data
        ? data.map((item, index) => {
            return (
              // index <= 8 && (
              <View key={index}>
                <Text>id: {item.id}</Text>
                <Text>title:{item.title}</Text>
                <Text>Body:{item.body}</Text>
              </View>
            );
            // );
          })
        : null}
    </ScrollView>
  );
};

export default SimpleAPI;

const styles = StyleSheet.create({});
