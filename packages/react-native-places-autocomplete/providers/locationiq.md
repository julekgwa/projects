---
title: LocationIQ
---

# LocationIQ Provider

## Setup

1. Sign up for a [LocationIQ account](https://locationiq.com/)
2. Get your API key from the dashboard

## Usage

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      provider="locationiq"
      providerConfig={{
        apiKey: 'YOUR_LOCATIONIQ_API_KEY'
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
  provider="locationiq"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  queryOptions={{
    countrycodes: 'us,ca', // Limit to countries
    'accept-language': 'en', // Response language
    limit: 10, // Max results
    dedupe: 1, // Remove duplicates
    tag: 'place:city,place:village', // Result types
  }}
/>
```

## Response Format

```typescript
// LocationIQ Raw Response Types
interface LocationIQSearchResult {
  place_id: string;
  osm_id?: string;
  osm_type?: 'node' | 'way' | 'relation' | string;
  licence?: string;
  lat: string;
  lon: string;
  boundingbox?: [string, string, string, string];
  class?: string;
  type?: string;
  display_name: string;
  display_place?: string;
  display_address?: string;
  address?: {
    name?: string;
    house_number?: string;
    road?: string;
    neighbourhood?: string;
    suburb?: string;
    city?: string;
    county?: string;
    state?: string;
    postcode?: string;
    country?: string;
    country_code?: string;
  };
}

// LocationSuggestion with LocationIQ raw data
interface LocationSuggestion<Raw = LocationIQSearchResult> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw; // Contains the original LocationIQ response
}
```

Example of received data in `onLocationSelect`:
```jsx
<LocationAutocomplete
  provider="locationiq"
  onLocationSelect={(location) => {
    console.log(location.display_name); // Full formatted address
    console.log(location.lat, location.lon); // Coordinates
    console.log(location.raw?.address); // Structured address components
    console.log(location.raw?.boundingbox); // Bounding box coordinates
  }}
/>
```

## Pricing

LocationIQ offers:
- Free tier with 5,000 requests/day
- [Check pricing plans](https://locationiq.com/pricing)
