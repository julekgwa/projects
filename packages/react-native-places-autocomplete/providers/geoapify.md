---
title: Geoapify
---

# Geoapify Provider

## Setup

1. Create a [Geoapify account](https://www.geoapify.com/)
2. Get your API key from the dashboard

## Usage

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <PlacesAutocomplete
      provider="geoapify"
      providerConfig={{
        apiKey: 'YOUR_GEOAPIFY_API_KEY'
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
`<LocationAutocomplete
  provider="geoapify"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  queryOptions={{
    type: 'street,city,country', // Result types
    limit: 5, // Max results
    lang: 'en', // Response language
    filter: 'countrycode:us,ca', // Filter by countries
    bias: '37.7749,-122.4194', // Location bias
  }}
/>
```

## Response Format

```typescript
// Geoapify Raw Response Types
interface GeoapifyFeature {
  type: 'Feature';
  properties: {
    country?: string;
    country_code?: string;
    region?: string;
    state?: string;
    county?: string;
    city?: string;
    suburb?: string;
    postcode?: string;
    name?: string;
    formatted?: string;
    address_line1?: string;
    address_line2?: string;
    category?: string;
    place_id?: string;
    lat?: number;
    lon?: number;
    timezone?: {
      name?: string;
      offset_STD?: string;
      offset_STD_seconds?: number;
      offset_DST?: string;
      offset_DST_seconds?: number;
    };
    rank?: {
      importance?: number;
      confidence?: number;
      match_type?: string;
    };
  };
  geometry: {
    type: 'Point';
    coordinates: [number, number]; // [lon, lat]
  };
}

// LocationSuggestion with Geoapify raw data
interface LocationSuggestion<Raw = GeoapifyFeature> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw; // Contains the original Geoapify response
}
```

Example of received data in `onLocationSelect`:
```jsx
<PlacesAutocomplete
  provider="geoapify"
  onLocationSelect={(location) => {
    console.log(location.display_name); // Formatted address
    console.log(location.lat, location.lon); // Coordinates
    console.log(location.raw?.properties); // All address components
    console.log(location.raw?.properties.timezone); // Timezone info
  }}
/>
```

## Pricing

Geoapify offers:
- Free tier with 3,000 requests/day
- [View pricing plans](https://www.geoapify.com/pricing/)
