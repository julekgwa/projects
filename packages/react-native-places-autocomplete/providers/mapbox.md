---
title: Mapbox
---

# Mapbox Provider

## Setup

1. Create a [Mapbox account](https://www.mapbox.com/)
2. Get your access token from the dashboard

## Usage

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <PlacesAutocomplete
      provider="mapbox"
      providerConfig={{
        accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN'
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
  provider="mapbox"
  providerConfig={{
    accessToken: 'YOUR_ACCESS_TOKEN'
  }}
  queryOptions={{
    countries: ['US', 'CA'], // Limit to specific countries
    types: ['address', 'poi'], // Result types
    limit: 10, // Max number of results
    language: 'en', // Response language
    proximity: [-122.4194, 37.7749], // Location bias
  }}
/>
```

## Response Format

```typescript
// Mapbox Raw Response Types
interface MapboxFeature {
  id: string;
  type: 'Feature';
  place_type: string[];
  relevance: number;
  properties: {
    accuracy?: 'point' | 'street' | 'interpolated' | string;
    'mapbox_id'?: string;
    wikidata?: string;
    [key: string]: unknown;
  };
  text: string;
  place_name: string;
  center: [number, number]; // [lon, lat]
  geometry: {
    type: 'Point';
    coordinates: [number, number]; // [lon, lat]
    interpolated?: boolean;
    omitted?: boolean;
  };
  address?: string;
  context?: Array<{
    id: string;
    text: string;
    short_code?: string;
    wikidata?: string;
  }>;
}

// LocationSuggestion with Mapbox raw data
interface LocationSuggestion<Raw = MapboxFeature> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw; // Contains the original Mapbox response
}
```

Example of received data in `onLocationSelect`:
```jsx
<PlacesAutocomplete
  provider="mapbox"
  onLocationSelect={(location) => {
    console.log(location.display_name); // Full formatted address
    console.log(location.lat, location.lon); // Coordinates
    console.log(location.raw?.context); // Additional context info
    console.log(location.raw?.properties); // Additional properties
  }}
/>
```

## Pricing

Mapbox has a generous free tier:
- 100,000 requests per month free
- [See pricing details](https://www.mapbox.com/pricing/)
