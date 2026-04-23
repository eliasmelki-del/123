# PawRide Mobile (Android + iOS)

This project is a **cross-platform mobile app** built with **React Native + Expo + TypeScript** so one codebase can ship to both Android and iOS.

## What to use to assemble and run the app

Use this stack:

- **Node.js 20 LTS** (runtime)
- **npm 10+** (package manager)
- **Expo SDK 51** (React Native framework/tooling)
- **EAS CLI** (cloud builds and store-ready binaries)
- **Android Studio** (Android emulator + SDK)
- **Xcode** (iOS simulator/build tooling on macOS)

## Included in this repo

- Expo + TypeScript app scaffold
- Home screen with PawRide product messaging
- Reusable components (`FeatureCard`, `RideOptionCard`)
- Shared ride option types/data
- Expo config for Android/iOS identifiers
- EAS build profile config

## 1) Install prerequisites

### macOS (for iOS and Android)

1. Install **Node.js 20 LTS**
2. Install **Watchman**
3. Install **Xcode** from the App Store (for iOS simulator)
4. Install **Android Studio** and Android SDK/tools

### Windows/Linux (Android only)

1. Install **Node.js 20 LTS**
2. Install **Android Studio** and Android SDK/tools

## 2) Install dependencies

```bash
npm install
```

If your environment blocks npm registry access, use your org-approved registry mirror and retry.

## 3) Run the app in development

```bash
npm run start
```

Then from Expo terminal:

- Press **a** to open Android emulator
- Press **i** to open iOS simulator (macOS only)
- Press **w** for web preview

## 4) Build native binaries

### Local native folders (optional)

```bash
npm run prebuild
```

This generates `android/` and `ios/` directories if you need custom native edits.

### Cloud builds with EAS (recommended)

```bash
npm run eas:build:android
npm run eas:build:ios
```

You need to run `eas login` first.

## 5) Minimum environment variables

Copy and fill:

```bash
cp .env.example .env
```

Set API URL and map key for your backend/tracking integration.

## 6) Architecture to make this a working product

- **Mobile app (this repo)**: booking, tracking, profiles
- **Backend API**: auth, rides, matching, pricing, payments
- **Realtime service**: driver location + trip status updates
- **Payment provider**: Stripe/Braintree
- **Maps provider**: Google Maps or Mapbox

## Useful scripts

- `npm run start` – Expo dev server
- `npm run android` – run Android app
- `npm run ios` – run iOS app
- `npm run web` – web preview
- `npm run prebuild` – generate native folders
- `npm run doctor` – Expo diagnostics
- `npm run typecheck` – TypeScript checks
- `npm run eas:build:android` – Android cloud build
- `npm run eas:build:ios` – iOS cloud build

## Next implementation milestones

1. Owner/driver auth and onboarding
2. Pet profile CRUD + booking flow
3. Maps, routing, live driver tracking
4. Ride lifecycle states and notifications
5. Payments and receipts
6. Admin panel and support workflows
