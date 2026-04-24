import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RideOption } from '../types/rideOption';

type RideOptionCardProps = {
  ride: RideOption;
};

export function RideOptionCard({ ride }: RideOptionCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{ride.label}</Text>
      <Text style={styles.description}>{ride.description}</Text>
      <Text style={styles.meta}>Best for: {ride.bestFor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EEF2FF',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#C7D2FE',
    gap: 6,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3730A3',
  },
  description: {
    fontSize: 14,
    color: '#4338CA',
  },
  meta: {
    fontSize: 13,
    color: '#312E81',
    fontWeight: '600',
  },
});
