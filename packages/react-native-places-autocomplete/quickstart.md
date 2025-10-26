---
title: Quickstart
description: Quick guide to get started with React Native Places Autocomplete. Learn how to implement location search in minutes with multiple provider support.
keywords: [react native, places autocomplete, quickstart, tutorial, location search, google places, mapbox, openstreetmap]
---

# Quick Start

This guide will help you get up and running with React Native Places Autocomplete using the Google Places provider.

## Basic Usage

```jsx
import React from 'react';
import { PlacesAutocomplete } from '@react-native-community/places-autocomplete';
import { GooglePlacesProvider } from '@react-native-community/places-autocomplete/providers';

export default function App() {
  const handlePlaceSelect = (place) => {
    console.log('Selected place:', place);
  };

  return (
    <PlacesAutocomplete
      provider={GooglePlacesProvider}
      apiKey="YOUR_GOOGLE_PLACES_API_KEY"
      onPlaceSelect={handlePlaceSelect}
    />
  );
}
```

## Using Multiple Providers

You can configure multiple providers with fallback support:

```jsx
import {
  PlacesAutocomplete,
  GooglePlacesProvider,
  NominatimProvider,
  LocationIQProvider,
} from '@react-native-community/places-autocomplete';

export default function App() {
  const providers = [
    {
      provider: GooglePlacesProvider,
      config: { apiKey: 'GOOGLE_API_KEY' },
    },
    {
      provider: LocationIQProvider,
      config: { apiKey: 'LOCATIONIQ_API_KEY' },
    },
    {
      provider: NominatimProvider,
      config: { userAgent: 'MyApp/1.0' },
    },
  ];

  return (
    <PlacesAutocomplete
      providers={providers}
      onPlaceSelect={(place) => console.log(place)}
      style={styles.autocomplete}
    />
  );
}
```

## Customizing the UI

The component can be fully customized using style props or custom render functions:

```jsx
<PlacesAutocomplete
  renderItem={({ item, index }) => (
    <TouchableOpacity onPress={() => handleSelect(item)}>
      <Text style={styles.itemText}>{item.description}</Text>
      <Text style={styles.itemSubtext}>{item.secondaryText}</Text>
    </TouchableOpacity>
  )}
  containerStyle={styles.container}
  inputStyle={styles.input}
  listStyle={styles.list}
/>
```

## Error Handling

The component includes built-in error handling and fallback support:

```jsx
<PlacesAutocomplete
  onError={(error) => {
    console.error('Places API error:', error);
    // Optionally switch to fallback provider
  }}
  fallbackProvider={NominatimProvider}
  retryOnError={true}
/>
```

See the [Provider Options](/places-autocomplete/getting-started/api-reference#provider-options) and [Components](/places-autocomplete/getting-started/basic-usage) sections for more detailed documentation.
