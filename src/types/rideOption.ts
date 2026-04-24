export type RideOption = {
  id: string;
  label: string;
  description: string;
  bestFor: string;
};

export const rideOptions: RideOption[] = [
  {
    id: 'on-demand',
    label: 'On-Demand PawRide',
    description: 'Instant pickup for urgent pet travel needs.',
    bestFor: 'Emergency vet visits',
  },
  {
    id: 'scheduled',
    label: 'Scheduled PetCab',
    description: 'Plan rides ahead with your preferred timeslot.',
    bestFor: 'Routine grooming appointments',
  },
  {
    id: 'round-trip',
    label: 'Round-Trip Furbaby Shuttle',
    description: 'Driver waits and returns your pet safely home.',
    bestFor: 'Short clinic visits',
  },
];
