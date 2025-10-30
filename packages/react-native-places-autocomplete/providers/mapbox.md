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
    <LocationAutocomplete
      provider="mapbox"
      providerConfig={{
        accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN'
      }}
      queryOptions={{
       limit: 10,
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
  provider="mapbox"
  providerConfig={{
    accessToken: 'YOUR_ACCESS_TOKEN'
  }}
  queryOptions={{
    // Language for results (ISO 639-1)
    language: 'en',

    // Maximum number of results to return (up to 10)
    limit: 10,

    // Bias results toward a point (lon,lat) or 'ip' to use client IP location
    proximity: '13.388860,52.517037',

    // Bounding box to restrict results: minLon,minLat,maxLon,maxLat
    bbox: '13.08836,52.33812,13.761,52.6755',

    // Restrict to countries (ISO 3166-1 alpha-2)
    country: 'US,CA,GB',

    // Restrict to feature types (comma-separated)
    types: 'city,postcode',

    // POI category filters
    poi_category: 'restaurant,bank',
    poi_category_exclusions: 'atm,parking',

    // Enable ETA calculation
    eta_type: 'navigation',
    navigation_profile: 'driving',
    origin: '13.388860,52.517037',

    // Customer session token for billing grouping
    session_token: '550e8400-e29b-41d4-a716-446655440000',
  }}
/>
```

## Query options

The `queryOptions` object passed to the Mapbox provider supports the following fields. Use them to bias, restrict, or enrich results.

| Name | Type | Required | Default | Description | Example |
|------|------|----------|---------|-------------|---------|
| `language` | `string` | No | `'en'` | ISO language code for the results. | `'en'` |
| `limit` | `number` | No | `10` | Maximum number of results to return (up to 10). | `10` |
| `proximity` | `string` | No | — | Bias results toward a point: `'lon,lat'` or `'ip'` to use client IP location. | `'13.388860,52.517037'` |
| `bbox` | `string` | No | — | Restrict results to bounding box: `minLon,minLat,maxLon,maxLat`. Cannot cross the 180th meridian. | `'13.08836,52.33812,13.761,52.6755'` |
| `country` | `string` | No | — | Restrict results to comma-separated ISO 3166-1 alpha-2 country codes. | `'US,CA,GB'` |
| `types` | `string` | No | — | Limit results to specific feature types (comma-separated). | `'city,postcode'` |
| `poi_category` | `string` | No | — | Limit results to specific POI categories (comma-separated). | `'restaurant,bank'` |
| `poi_category_exclusions` | `string` | No | — | Exclude POI categories from results. | `'atm,parking'` |
| `eta_type` | `'navigation'` | No | — | Enable ETA calculation. Requires `navigation_profile` and `origin` or `proximity`. | `'navigation'` |
| `navigation_profile` | `'driving' \\| 'walking' \\| 'cycling'` | No | — | Routing profile for ETA. | `'driving'` |
| `origin` | `string` | No | — | Origin coordinates for ETA (lon,lat). | `'13.388860,52.517037'` |
| `session_token` | `string` | No | — | Customer-provided session token for billing grouping. | `'550e8400-e29b-41d4-a716-446655440000'` |


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
<LocationAutocomplete
  provider="mapbox"
  providerConfig={{
    accessToken: 'YOUR_ACCESS_TOKEN'
  }}
  queryOptions={{
    limit: 10,
  }}
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
