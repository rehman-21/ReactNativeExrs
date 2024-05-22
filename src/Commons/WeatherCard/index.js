import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const WeatherCard = ({cityName, temperature, description, highLow}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cityName}>{cityName}</Text>
      <Text style={styles.temperature}>{temperature}°</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.highLow}>{highLow}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cityName: {
    fontSize: 36,
    color: '#fff',
  },
  temperature: {
    fontSize: 80,
    color: '#fff',
    fontWeight: '100',
  },
  description: {
    fontSize: 24,
    color: '#fff',
  },
  highLow: {
    fontSize: 18,
    color: '#fff',
  },
});

export default WeatherCard;
