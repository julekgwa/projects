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
      queryOptions={{
        limit: 10,
        countrycodes: 'US,CA',
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
    // Maximum number of results (1-20)
    limit: 10,

    // Comma-separated ISO 3166-1 alpha-2 country codes to restrict results
    countrycodes: 'US,CA,GB',

    // Normalize the city field when missing (0 = disable, 1 = enable)
    normalizecity: 1,

    // Preferred language for results (ISO 639-1 two-letter code)
    'accept-language': 'en',
  }}
/>
```

## Query options

Below is a summary of the query options supported by the LocationIQ provider. Use these to control the behavior of the search requests.

| Name | Type | Required | Default | Description | Example |
|------|------|----------|---------|-------------|---------|
| `limit` | `number` | No | `10` | Maximum number of results to return. Allowed range: 1–20. | `10` |
| `countrycodes` | `string` | No | — | Comma-separated ISO 3166-1 alpha-2 codes to restrict search to specific countries. | `'US,CA,GB'` |
| `normalizecity` | `0 \| 1` | No | `0` | Normalize the city field when missing by falling back to other place components (e.g. locality, town). | `1` |
| `accept-language` | `string` | No | `'en'` | Preferred language for search results (single 2-character ISO 639-1 code). | `'en'` |

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
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  queryOptions={{
    limit: 10,
  }}
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
