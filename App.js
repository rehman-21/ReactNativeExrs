import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import VoiceRecorder from './src/Commons/VoiceRecorder';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VoiceRecorder />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
