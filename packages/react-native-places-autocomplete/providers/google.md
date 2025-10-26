---
title: Google Places
---

# Google Places Provider

## Setup

1. Get an API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Places API for your project

## Usage

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      provider="google"
      providerConfig={{
        apiKey: 'YOUR_GOOGLE_API_KEY'
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
  provider="google"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  queryOptions={{
    types: ['geocode', 'establishment'], // Place types to return
    components: 'country:us', // Limit results to a specific country
    language: 'en', // Response language
    radius: 50000, // Search radius in meters
    location: '37.7749,-122.4194', // Location bias
    strictbounds: true, // Restrict results to given location/radius
  }}
/>
```

## Response Format

```typescript
// Google Places API Raw Response Type
interface GooglePlaceSuggestion {
  placePrediction: {
    place?: string; // e.g., "places/ChIJ..."
    placeId?: string; // e.g., "ChIJ..."
    text?: {
      text: string;
      matches?: Array<{
        startOffset?: number;
        endOffset: number;
      }>;
    };
    structuredFormat?: {
      mainText: {
        text: string;
        matches?: Array<{
          startOffset?: number;
          endOffset: number;
        }>;
      };
      secondaryText?: {
        text: string;
        matches?: Array<{
          startOffset?: number;
          endOffset: number;
        }>;
      };
    };
    types?: string[]; // e.g., ['geocode', 'street_address']
  };
}

// LocationSuggestion with Google Places raw data
interface LocationSuggestion<Raw = GooglePlaceSuggestion> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw; // Contains the original Google Places response
}
```

Example of received data in `onLocationSelect`:
```jsx
<LocationAutocomplete
  provider="google"
  onLocationSelect={(location) => {
    console.log(location.display_name); // Formatted address
    console.log(location.lat, location.lon); // Coordinates
    console.log(location.raw); // Full Google Places response
  }}
/>
```

## Billing

Google Places API is a paid service:
- Requires a valid API key
- May require billing account setup
- [Check current pricing](https://cloud.google.com/maps-platform/pricing)
