---
title: React Native Places Autocomplete
description: A provider-agnostic React Native autocomplete component for searching addresses and places. Supports Google Places, OpenStreetMap, Mapbox, and more.
keywords: [react native, autocomplete, places, google places, openstreetmap, mapbox, geocoding, location search]
slug: /
---

import ThemedImage from '@theme/ThemedImage';

<h1 align="center">
  react-native-places-autocomplete
</h1>

A provider-agnostic React Native autocomplete component for searching addresses and places. Supports multiple **built-in geocoding providers** including OpenStreetMap (free), OpenCage, Google Places, Mapbox, LocationIQ, Geoapify, HERE, and TomTom, or use any custom API. Easy to integrate, fully customizable, and lightweight.

<p align="center">
  <a href="https://www.npmjs.com/package/@julekgwa/react-native-places-autocomplete">
    <img src="https://img.shields.io/npm/v/@julekgwa/react-native-places-autocomplete.svg" alt="npm version"/>
  </a>
  <a href="https://www.npmjs.com/package/@julekgwa/react-native-places-autocomplete">
    <img src="https://img.shields.io/npm/dm/@julekgwa/react-native-places-autocomplete.svg" alt="npm downloads"/>
  </a>
  <a href="https://github.com/julekgwa/react-native-places-autocomplete/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@julekgwa/react-native-places-autocomplete.svg" alt="license"/>
  </a>
  <a href="https://github.com/julekgwa/react-native-places-autocomplete">
    <img src="https://img.shields.io/github/stars/julekgwa/react-native-places-autocomplete.svg?style=social" alt="stars"/>
  </a>
</p>

<ThemedImage
alt="Supported Providers"
sources={{
light: require('./images/providers-light.png').default,
dark: require('./images/providers-dark.png').default,
}}
style={{ borderRadius: '8px', width: '100%' }}
/>

<p align="center">
  <a href="https://snack.expo.dev/@lekgwaraj/react-native-places-autocomplete">
    <img src="https://img.shields.io/badge/Try%20it%20on-Expo%20Snack-4630EB.svg?style=for-the-badge&logo=expo&labelColor=FFF&logoColor=000" alt="Try it on Expo Snack"/>
  </a>
</p>

## Overview

`@julekgwa/react-native-places-autocomplete` is a React Native component that provides a customizable location search and autocomplete interface. It supports multiple geocoding providers out of the box:

- OpenStreetMap (Nominatim)
- Google Places
- Mapbox
- Geoapify
- LocationIQ
- HERE
- TomTom
- OpenCage

## Key Features

- 🌍 **Multiple Providers**: Support for various geocoding services with no additional dependencies
- 🎨 **Fully Customizable**: Style every aspect of the component to match your app's design
- 🔍 **Recent Searches**: Built-in support for recent search history
- ⚡️ **Performance Optimized**: Debounced API calls and optimized rendering
- 🛠 **TypeScript Support**: Built with TypeScript for a better development experience

## Quick Start

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      provider="openstreetmap" // No API key required for OpenStreetMap
      query={{
        limit: 5,
      }}
      onLocationSelect={(location) => {
        console.log('Selected location:', location);
      }}
    />
  );
}
```

See the [Getting Started](/places-autocomplete/getting-started/installation) guide for complete documentation of available props and examples.

## Installation

```bash
npm install @julekgwa/react-native-places-autocomplete
# or using yarn
yarn add @julekgwa/react-native-places-autocomplete
```

For complete installation instructions, see the [Getting Started Guide](/places-autocomplete/getting-started/installation).
