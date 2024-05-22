import React from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import Icon from 'react-native-vector-icons/Ionicons';

const weather = () => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.cityName}>Montreal</Text>
        <Text style={styles.temperature}>19°</Text>
        <Text style={styles.weatherDescription}>Mostly Clear</Text>
        <Text style={styles.highLow}>H:24° L:18°</Text>
      </View>
      <ScrollView horizontal style={styles.forecastContainer}>
        <ForecastCard time="12 AM" temp="19°" icon="cloud-outline" />
        <ForecastCard time="Now" temp="18°" icon="rainy-outline" />
        <ForecastCard time="2 AM" temp="18°" icon="cloud-outline" />
        <ForecastCard time="3 AM" temp="17°" icon="rainy-outline" />
        <ForecastCard time="4 AM" temp="16°" icon="cloud-outline" />
      </ScrollView>
      <View style={styles.footer}>
        <Icon name="settings-outline" size={30} color="#fff" />
        <Icon
          name="add-circle-outline"
          size={50}
          color="#fff"
          style={styles.addIcon}
        />
        <Icon name="menu-outline" size={30} color="#fff" />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 80,
    color: '#fff',
    fontWeight: '100',
  },
  weatherDescription: {
    fontSize: 24,
    color: '#fff',
  },
  highLow: {
    fontSize: 18,
    color: '#fff',
  },
  forecastContainer: {
    flex: 1,
    marginVertical: 20,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  addIcon: {
    marginBottom: 10,
  },
});

export default Weather;
