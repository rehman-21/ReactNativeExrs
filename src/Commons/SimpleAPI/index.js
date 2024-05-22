import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [data, setData] = useState(undefined);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }),
    [];
  return (
    <View>
      <Text>API CALL</Text>
      {Data ? (
        <View>
          <Text>{data.id}</Text>
          <Text>{data.userId}</Text>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
