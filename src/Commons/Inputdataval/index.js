import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const FormData = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [Email, setEmail] = useState('');
  const saveData = () => {
    console.warn(name);
    console.warn(age);
    console.warn(Email);
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>
        FORM DATA API INPUT DATA
      </Text>
      <View
        style={{
          width: 300,
          height: 60,
          borderRadius: 10,
          backgroundColor: '#4B4C',
          paddingHorizontal: 10,
          margin: 20,
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          placeholderTextColor={'#4B4C4C'}
        />
      </View>
      <View
        style={{
          width: 300,
          height: 60,
          borderRadius: 10,
          backgroundColor: '#4B4C',
          paddingHorizontal: 10,
          margin: 20,
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="age"
          value={age}
          onChangeText={text => setAge(text)}
          placeholderTextColor={'#4B4C4C'}
        />
      </View>
      <View
        style={{
          width: 300,
          height: 60,
          borderRadius: 10,
          backgroundColor: '#4B4C',
          paddingHorizontal: 10,
          margin: 20,
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Email"
          value={Email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor={'#4B4C4C'}
        />
      </View>
      <TouchableOpacity
        style={{
          width: 300,
          height: 60,
          borderRadius: 10,
          backgroundColor: '#4B4C',
          paddingHorizontal: 10,
          margin: 20,
          justifyContent: 'center',
        }}
        onPress={saveData}>
        <Text style={{textAlign: 'center'}}>DATA SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormData;

const styles = StyleSheet.create({});
