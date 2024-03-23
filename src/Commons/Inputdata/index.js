import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const handleSubmit = () => {
    setDisplay(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textinput}>
        <TextInput
          placeholder="Enter your name"
          onChangeText={text => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.textinput}>
        <TextInput
          placeholder="Enter your Email"
          placeholderTextColor="yellow"
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.textinput}>
        <TextInput
          placeholder="Enter your Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleReset}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>
      {display && (
        <View>
          <Text>My Name is: {name}</Text>
          <Text>My Email is: {email}</Text>
          <Text>My Password is: {password}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 30,
  },
  textinput: {
    width: 300,
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  btn: {
    width: 160,
    padding: 15,
    backgroundColor: 'green',
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
