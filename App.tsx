import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { FeatureCard } from './src/components/FeatureCard';
import { RideOptionCard } from './src/components/RideOptionCard';
import { rideOptions } from './src/types/rideOption';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ExpoStatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.brand}>PawRide</Text>
        <Text style={styles.title}>Safe rides for pets, paws, and furebabies</Text>
        <Text style={styles.subtitle}>
          Book trusted transport for dogs, cats, and all companion animals on Android and iOS.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Features</Text>
          <FeatureCard
            title="Pet Profiles"
            description="Create profiles with species, temperament, and travel requirements."
          />
          <FeatureCard
            title="Live Tracking"
            description="Track the driver in real-time from pickup to drop-off."
          />
          <FeatureCard
            title="Vet & Grooming Trips"
            description="Schedule one-way or round trips to clinics, groomers, and airports."
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ride Types</Text>
          {rideOptions.map((ride) => (
            <RideOptionCard key={ride.id} ride={ride} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 20,
    gap: 16,
  },
  brand: {
    fontSize: 16,
    fontWeight: '700',
    color: '#9333EA',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
  },
  section: {
    gap: 10,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
});
