---
title: HERE Maps
---

# HERE Maps Provider

## Setup

1. Create a [HERE Developer account](https://developer.here.com/)
2. Create a project and get your API key

## Usage

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      provider="here"
      providerConfig={{
        apiKey: 'YOUR_HERE_API_KEY'
      }}
      queryOptions={{
        // Center the search context (latitude,longitude)
        at: '-13.163068,-72.545128', // Machu Picchu
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
  provider="here"
  providerConfig={{ apiKey: 'YOUR_API_KEY' }}
  queryOptions={{
    // Center the search context (latitude,longitude)
    at: '-13.163068,-72.545128', // Machu Picchu

    // Hard geographic filter examples (use only one of `at`, `in`)
    in: 'bbox:-73.0,-13.5,-72.0,-12.5', // west,south,east,north

    // Postal code behavior when postal code spans multiple areas
    postalCodeMode: 'cityLookup',

    // Limit results to certain types
    types: ['area', 'city'],

    // Preferred response languages (BCP-47)
    lang: ['en', 'es'],

    // Maximum number of results (defaults to 5, max 20)
    limit: 10,

    // Political view override for specific country codes (ISO 3166-1 alpha-3)
    politicalView: 'PER',

    // Request additional fields in the response
    show: ['streetInfo', 'hasRelatedMPA'],
  }}
/>
```

## Query options

The `queryOptions` object customizes HERE API requests. Use the table below to understand available fields for the HERE provider (`HereQueryOptions`).

| Name | Type | Required | Default | Description | Example |
|------|------|----------|---------|-------------|---------|
| at | string | No | — | Center of the search context as latitude,longitude. Used for biasing results. | -13.163068,-72.545128 |
| in | string | No | — | Hard geographic filter. Supports bbox (west,south,east,north) or circle (lat,lng;r=radius). Only one of `at` or `in` should be used. | bbox:-73.0,-13.5,-72.0,-12.5 |
| postalCodeMode | cityLookup | districtLookup | No | — | Options to return multiple results when a postal code spans multiple areas. | cityLookup |
| types | array (area, city, postalCode) | No | — | Limit results to specific place types. | city, postalCode |
| lang | array of strings | No | — | Preferred response languages (BCP-47 codes). HERE will try languages in order. | en, es |
| limit | number | No | 5 | Max number of results to return (defaults to 5, maximum 20). | 10 |
| politicalView | string | No | — | Toggle political view for a specific country (ISO 3166-1 alpha-3). | PER |
| show | array (streetInfo, hasRelatedMPA) | No | — | Request additional fields in the response, e.g., decomposed street parts or MPA flags. | streetInfo |

## Response Format

```typescript
// HERE Raw Response Types
interface HereAutocompleteItem {
  title: string;
  id: string;
  language?: string;
  resultType: string;
  houseNumberType?: string;
  address?: {
    label?: string;
    countryCode?: string;
    countryName?: string;
    state?: string;
    county?: string;
    city?: string;
    district?: string;
    street?: string;
    postalCode?: string;
    houseNumber?: string;
  };
  highlights?: {
    title?: Array<{
      start: number;
      end: number;
    }>;
    address?: {
      label?: Array<{
        start: number;
        end: number;
      }>;
    };
  };
}

// LocationSuggestion with HERE raw data
interface LocationSuggestion<Raw = HereAutocompleteItem> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw; // Contains the original HERE response
}
```

Example of received data in `onLocationSelect`:
```jsx
<LocationAutocomplete
  provider="here"
  providerConfig={{ apiKey: 'YOUR_HERE_API_KEY' }}
  queryOptions={{
    at: '-13.163068,-72.545128', // Machu Picchu
  }}
  onLocationSelect={(location) => {
    console.log(location.display_name); // Full formatted address
    console.log(location.lat, location.lon); // Coordinates
    console.log(location.raw?.address); // Structured address
  }}
/>
```

## Pricing

HERE offers:
- Generous free tier
- [Check pricing plans](https://developer.here.com/pricing)
