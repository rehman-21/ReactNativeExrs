import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import VoiceRecorder from './src/Commons/VoiceRecorder';
import LightingInfo from './src/Screen/OnBoarding';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LightingInfo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
});

export default App;
