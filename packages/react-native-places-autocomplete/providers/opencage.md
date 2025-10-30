---
title: OpenCage
---

# OpenCage Provider

## Setup

1. Create an [OpenCage account](https://opencagedata.com/)
2. Get your API key from the dashboard

## Usage

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      provider="opencage"
      providerConfig={{
        apiKey: 'YOUR_OPENCAGE_API_KEY'
      }}
      queryOptions={{
        language: 'en',
        limit: 10,
        countrycode: 'us',
        bounds: '37.0,-109.05,41.0,-102.05',
        proximity: '51.952659,-0.987501',
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
  provider="opencage"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  queryOptions={{
    language: 'en', // Response language
    limit: 10, // Max results
    countrycode: 'us', // Limit to country
    bounds: '37.0,-109.05,41.0,-102.05', // Bounding box
    proximity: '51.952659,-0.987501', // Location bias
  }}
/>
```

## Query options

Below are the supported `queryOptions` for the OpenCage provider. Use these to bias, filter, or localize results.

| Name | Type | Required | Default | Description | Example |
|------|------|----------|---------|-------------|---------|
| `bounds` | `string` | No | — | Restrict results to a bounding box: `minLon,minLat,maxLon,maxLat`. | `"-0.563160,51.280430,0.278970,51.683979"` |
| `countrycode` | `string` | No | — | Two-letter ISO 3166-1 alpha-2 country code (lowercase) to limit results. | `'gb'` |
| `language` | `'de' \| 'en' \| 'es' \| 'fr' \| 'native'` | No | `'en'` | Language to display results in; use `'native'` for local language. | `'en'` |
| `limit` | `number` | No | `5` | Maximum number of results to display (max 10). | `10` |
| `noResults` | `string` | No | `'No results.'` | Text label to display when the API returns no results (for i18n). | `'No results found'` |

## Response Format

```typescript
// OpenCage Raw Response Types
interface OpenCageResult {
  annotations?: {
    DMS?: { lat?: string; lng?: string };
    MGRS?: string;
    Maidenhead?: string;
    timezone?: {
      name?: string;
      now_in_dst?: 0 | 1 | boolean;
      offset_sec?: number;
      offset_string?: string;
      short_name?: string;
    };
  };
  bounds?: {
    northeast?: { lat?: number; lng?: number };
    southwest?: { lat?: number; lng?: number };
  };
  components?: {
    'ISO_3166-1_alpha-2'?: string;
    'ISO_3166-1_alpha-3'?: string;
    'ISO_3166-2'?: string[];
    continent?: string;
    country?: string;
    country_code?: string;
    county?: string;
    state?: string;
    city?: string;
    postcode?: string;
    road?: string;
  };
  confidence?: number;
  formatted?: string;
  geometry: {
    lat: number;
    lng: number;
  };
}

// LocationSuggestion with OpenCage raw data
interface LocationSuggestion<Raw = OpenCageResult> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw; // Contains the original OpenCage response
}
```

Example of received data in `onLocationSelect`:
```jsx
<LocationAutocomplete
  provider="opencage"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  queryOptions={{
    language: 'en',
    limit: 10,
    countrycode: 'us',
    bounds: '37.0,-109.05,41.0,-102.05',
    proximity: '51.952659,-0.987501',
  }}
  onLocationSelect={(location) => {
    console.log(location.display_name); // Formatted address
    console.log(location.lat, location.lon); // Coordinates
    console.log(location.raw?.components); // Address components
    console.log(location.raw?.annotations?.timezone); // Timezone info
  }}
/>
```

## Pricing

OpenCage offers:
- Free tier with 2,500 requests per day
- [Check pricing plans](https://opencagedata.com/pricing)
