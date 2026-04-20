# PawRide Mobile (Android + iOS)

This repository now contains a cross-platform React Native app using Expo for building both Android and iOS versions of a pet transportation platform.

## What is included

- Expo + TypeScript mobile app scaffold
- Landing screen with product framing for pet transportation
- Reusable UI components for feature and ride option cards
- Shared types for ride options
- App configuration for Android package and iOS bundle ID

## Prerequisites

- Node.js 18+
- npm 9+
- Expo CLI (optional, can use `npx expo`)

## Run locally

```bash
npm install
npm run start
```

Then open:
- Android emulator/device with `a`
- iOS simulator (macOS) with `i`

## Build targets

- Android: `npm run android`
- iOS: `npm run ios`

## Suggested next steps

1. Add authentication and onboarding (owner/driver flows)
2. Integrate maps and real-time tracking
3. Connect a backend (rides, payments, driver matching)
4. Add admin web panel and analytics
