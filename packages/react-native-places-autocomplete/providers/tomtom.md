---
title: TomTom
---

# TomTom Provider

## Setup

1. Create a [TomTom Developer account](https://developer.tomtom.com/)
2. Get your API key from the dashboard

## Usage

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      provider="tomtom"
      providerConfig={{
        apiKey: 'YOUR_TOMTOM_API_KEY'
      }}
      onLocationSelect={(location) => {
        console.log(location);
      }}
    />
  );
}
```

## Configuration Options

```jsx
<LocationAutocomplete
  provider="tomtom"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  queryOptions={{
    limit: 5, // Number of results
    language: 'en-GB', // Response language
    countrySet: 'US,CA', // Limit to countries
    radius: 10000, // Search radius in meters
    typeahead: true, // Enable typeahead suggestions
  }}
/>
```

## Response Format

```typescript
// TomTom Raw Response Types
interface TomTomResult {
  type: string;
  id: string;
  score: number;
  address: {
    streetNumber?: string;
    streetName?: string;
    municipality?: string;
    municipalitySubdivision?: string;
    countrySecondarySubdivision?: string;
    countrySubdivision?: string;
    countrySubdivisionName?: string;
    countrySubdivisionCode?: string;
    postalCode?: string;
    extendedPostalCode?: string;
    countryCode: string;
    country: string;
    countryCodeISO3: string;
    freeformAddress: string;
    localName?: string;
  };
  position: {
    lat: number;
    lon: number;
  };
  viewport?: {
    topLeftPoint: {
      lat: number;
      lon: number;
    };
    btmRightPoint: {
      lat: number;
      lon: number;
    };
  };
}

// LocationSuggestion with TomTom raw data
interface LocationSuggestion<Raw = TomTomResult> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw; // Contains the original TomTom response
}
```

Example of received data in `onLocationSelect`:
```jsx
<LocationAutocomplete
  provider="tomtom"
  onLocationSelect={(location) => {
    console.log(location.display_name); // Formatted address
    console.log(location.lat, location.lon); // Coordinates
    console.log(location.raw?.address); // Structured address
    console.log(location.raw?.viewport); // Bounding box
  }}
/>
```

## Pricing

TomTom offers:
- Free tier with 2,500 requests per day
- [View pricing plans](https://developer.tomtom.com/store/maps-api)
