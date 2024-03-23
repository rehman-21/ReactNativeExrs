import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatList = () => {
  const usersList = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john.doe@example.com',
      age: 30,
      isAdmin: false,
    },
    {
      id: 2,
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      age: 25,
      isAdmin: true,
    },
    {
      id: 3,
      username: 'bob_jackson',
      email: 'bob.jackson@example.com',
      age: 40,
      isAdmin: false,
    },
    {
      id: 4,
      username: 'emma_johnson',
      email: 'emma.johnson@example.com',
      age: 35,
      isAdmin: true,
    },
    {
      id: 5,
      username: 'will_smith',
      email: 'will.smith@example.com',
      age: 45,
      isAdmin: false,
    },
    {
      id: 6,
      username: 'sara_adams',
      email: 'sara.adams@example.com',
      age: 28,
      isAdmin: false,
    },
    {
      id: 7,
      username: 'peter_wilson',
      email: 'peter.wilson@example.com',
      age: 32,
      isAdmin: false,
    },
    {
      id: 8,
      username: 'amy_roberts',
      email: 'amy.roberts@example.com',
      age: 50,
      isAdmin: true,
    },
    {
      id: 9,
      username: 'michael_brown',
      email: 'michael.brown@example.com',
      age: 27,
      isAdmin: false,
    },
    {
      id: 10,
      username: 'olivia_white',
      email: 'olivia.white@example.com',
      age: 33,
      isAdmin: true,
    },
  ];

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          margin: 30,
          fontWeight: '700',
          color: '#FFF',
          fontStyle: 'italic',
        }}>
        FlatList
      </Text>
      <FlatList
        data={usersList}
        renderItem={({item}) => <Text>{item.username}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default FlatList;
