import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ListApi = () => {
  const [data, setData] = useState();
  getAPIList = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIList();
  }, []);
  return (
    <ScrollView>
      {data
        ? data.map((item, index) => {
            return (
            //   index <= 1 && (
                <View style={{padding: 30}} key={index}>
                  <Text style={{color: '#FFF', backgroundColor: 'green'}}>
                    id :{item.id}
                  </Text>
                  <Text style={{color: '#FFF', backgroundColor: 'lightblue'}}>
                    title :{item.title}
                  </Text>
                  <Text style={{color: '#FFF', backgroundColor: 'pink'}}>
                    body :{item.body}
                  </Text>
                </View>
              )
            // );
          })
        : null}
    </ScrollView>
  );
};

export default ListApi;

const styles = StyleSheet.create({});
