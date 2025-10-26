---
title: OpenStreetMap (Nominatim)
---

# OpenStreetMap Provider

OpenStreetMap (through Nominatim) is a free geocoding service that doesn't require an API key.

## Usage

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      provider="openstreetmap"
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
  provider="openstreetmap"
  queryOptions={{
    countrycodes: 'us,ca', // Limit to specific countries
    'accept-language': 'en', // Preferred language
    limit: 10, // Max number of results
    addressdetails: 1, // Include address details
  }}
/>
```

## Response Format

```typescript
// OpenStreetMap (Nominatim) Raw Response Type
interface OpenStreetMapResult {
  place_id: number | string;
  licence?: string;
  osm_type?: 'node' | 'way' | 'relation' | string;
  osm_id?: number | string;
  lat: string;
  lon: string;
  class?: string;
  type?: string;
  place_rank?: number;
  importance?: number;
  addresstype?: string;
  name?: string;
  display_name: string;
  address?: {
    road?: string;
    suburb?: string;
    city?: string;
    county?: string;
    state?: string;
    'ISO3166-2-lvl4'?: string;
    postcode?: string;
    country?: string;
    country_code?: string;
    [key: string]: unknown;
  };
  boundingbox?: [string, string, string, string];
}

// LocationSuggestion with OpenStreetMap raw data
interface LocationSuggestion<Raw = OpenStreetMapResult> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw; // Contains the original OpenStreetMap response
}
```

Example of received data in `onLocationSelect`:
```jsx
<LocationAutocomplete
  provider="openstreetmap"
  onLocationSelect={(location) => {
    console.log(location.display_name); // Full formatted address
    console.log(location.lat, location.lon); // Coordinates
    console.log(location.raw?.address); // Structured address components
  }}
/>
```

## Rate Limits

OpenStreetMap has usage limits:
- Maximum of 1 request per second
- No API key required
- Please respect the [Nominatim Usage Policy](https://operations.osmfoundation.org/policies/nominatim/)
