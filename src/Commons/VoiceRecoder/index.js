import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, PermissionsAndroid} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import AsyncStorage from '@react-native-community/async-storage';

const audioRecorderPlayer = new AudioRecorderPlayer();

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedFilePath, setRecordedFilePath] = useState('');

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message: 'This app needs access to your microphone to record audio.',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Microphone permission granted');
      } else {
        console.log('Microphone permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const onStartRecord = async () => {
    const path = await audioRecorderPlayer.startRecorder();
    setIsRecording(true);
    setRecordedFilePath(path);
  };

  const onStopRecord = async () => {
    const path = await audioRecorderPlayer.stopRecorder();
    setIsRecording(false);
    setRecordedFilePath(path);
  };

  const onSaveRecord = async () => {
    try {
      await AsyncStorage.setItem('recordedFilePath', recordedFilePath);
      console.log('Record saved successfully');
    } catch (err) {
      console.warn('Error saving record:', err);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={isRecording ? onStopRecord : onStartRecord}
        style={{
          padding: 20,
          backgroundColor: isRecording ? 'red' : 'green',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Text>
      </TouchableOpacity>
      {recordedFilePath !== '' && (
        <TouchableOpacity onPress={onSaveRecord} style={{marginTop: 20}}>
          <Text style={{fontSize: 18}}>Save Recording</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VoiceRecorder;
