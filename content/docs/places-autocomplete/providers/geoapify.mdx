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
    <LocationAutocomplete
      provider="geoapify"
      providerConfig={{
        apiKey: 'YOUR_GEOAPIFY_API_KEY'
      }}
      queryOptions={{
        limit: 5,
      }}
      onLocationSelect={(location) => {
        console.log(location);
      }}
    />
  );
}
```

## Query options

The `queryOptions` object is passed to the provider and customizes the geocoding request. Below is a TypeScript interface you can use to type `queryOptions` for the Geoapify provider and examples of commonly used fields.

| Name | Type | Required | Default | Description | Example |
|------|------|----------|---------|-------------|---------|
| `type` | `'country' \| 'state' \| 'city' \| 'postcode' \| 'street' \| 'amenity' \| 'locality'` | No | — | Restrict results to a specific location type. | `'locality'` |
| `limit` | `number` | No | — | Maximum number of results to return. | `5` |
| `lang` | `string` | No | — | Response language (ISO 639-1 two-letter code). | `'en'` |
| `filter` | `string` | No | — | Filter results by country, bounding box, or other provider-specific filters. | `'countrycode:us,ca'` |
| `bias` | `string` | No | — | Bias results toward a location (e.g. proximity or rectangle). | `'proximity:-122.084,37.422'` |
| `format` | `'json' \| 'xml' \| 'geojson'` | No | `'geojson'` | Response format. | `'geojson'` |

Example usage with `queryOptions`:

```jsx
<LocationAutocomplete
  provider="geoapify"
  providerConfig={{ apiKey: 'YOUR_KEY' }}
  queryOptions={{
    limit: 5,
    lang: 'en',
    bias: 'proximity:-122.084,37.422',
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
<LocationAutocomplete
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
