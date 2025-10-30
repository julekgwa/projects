---
title: TomTom
---

# TomTom Provider

## Setup

1. Create a [TomTom Developer account](https://developer.tomtom.com/)
2. Get your API key from the dashboard

## Usage

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      provider="tomtom"
      providerConfig={{
        apiKey: 'YOUR_TOMTOM_API_KEY'
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
  provider="tomtom"
  providerConfig={{ apiKey: 'YOUR_API_KEY' }}
  queryOptions={{
    limit: 5, // Number of results
    language: 'en-GB', // Response language
    countrySet: 'US,CA', // Limit to countries
    radius: 10000, // Search radius in meters
    typeahead: true, // Enable typeahead suggestions
  }}
/>
```

## Query options

The `queryOptions` object customizes TomTom API requests. Use the table below to understand each available option for the TomTom provider.

| Name | Type | Required | Default | Description | Example |
|------|------|----------|---------|-------------|---------|
| `baseURL` | `string` | No | `api.tomtom.com` | Base host for TomTom API calls (region-specific hosts available). | `api.tomtom.com` |
| `versionNumber` | `string` | No | `2` | Service version to call. | `2` |
| `ext` | `"json" \| "jsonp" \| "js" \| "xml"` | No | `json` | Response format extension. | `json` |
| `key` | `string` | No | — | API key; normally supplied via `providerConfig`. | `YOUR_API_KEY` |
| `query` | `string` | No | — | The search query string (URL-encoded when required). | `Berlin Pariser 20` |
| `typeahead` | `boolean` | No | `false` | Enable predictive/typeahead mode for partial input. | `true` |
| `limit` | `number` | No | `10` | Maximum number of results (default 10, max 100). | `25` |
| `ofs` | `number` | No | `0` | Result offset within the full result set (pagination). | `50` |
| `countrySet` | `string` | No | — | Comma-separated country codes (ISO alpha-2 or alpha-3) to limit search. | `FR,ES` |
| `geoBias` | `string` | No | — | Location bias: `point:lat,lon` or `rectangle:topLeftLat,topLeftLon,btmRightLat,btmRightLon`. Point precedence. | `point:52.52,13.405` |
| `lat` | `number` | No | — | Latitude for point-radius bias. | `52.52` |
| `lon` | `number` | No | — | Longitude for point-radius bias. | `13.405` |
| `radius` | `number` | No | — | Radius in meters for filtering around `lat`/`lon`. | `10000` |
| `topLeft` | `string` | No | — | Bounding box top-left coords `lat,lon`. | `52.6,13.3` |
| `btmRight` | `string` | No | — | Bounding box bottom-right coords `lat,lon`. | `52.4,13.5` |
| `language` | `string` | No | — | IETF language tag for returned results. | `en-GB` |
| `extendedPostalCodesFor` | `string` | No | — | Comma-separated indexes for which extended postal codes are returned (e.g. `POI,PAD`). | `POI,PAD` |
| `minFuzzyLevel` | `number` | No | `1` | Minimum fuzziness (1–4). | `1` |
| `maxFuzzyLevel` | `number` | No | `2` | Maximum fuzziness (1–4). | `2` |
| `idxSet` | `string` | No | — | Comma-separated indexes to use for search (e.g. `POI,PAD,Str`). | `POI,PAD,Str` |
| `categorySet` | `string` | No | — | Comma-separated POI category identifiers. | `7315,7315017` |
| `brandSet` | `string` | No | — | Comma-separated brand names to filter by. | `TomTom,Foobar` |
| `connectorSet` | `string` | No | — | Comma-separated connector types for EV stations. | `IEC62196Type2CableAttached` |
| `minPowerKW` | `number` | No | — | Minimum power (kW) for EV stations. | `22.2` |
| `maxPowerKW` | `number` | No | — | Maximum power (kW) for EV stations. | `43.2` |
| `fuelSet` | `string` | No | — | Comma-separated fuel types. | `Diesel,Petrol` |
| `vehicleTypeSet` | `string` | No | — | Comma-separated vehicle types. | `Car,Truck` |
| `view` | `string` | No | `Unified` | Geopolitical view context (country-specific overrides available). | `AR, CN, IN` |
| `openingHours` | `string` | No | — | POI opening hours mode (e.g. `nextSevenDays`). | `nextSevenDays` |
| `timeZone` | `string` | No | — | Timezone mode (e.g. `iana`). | `iana` |
| `mapcodes` | `string` | No | — | Comma-separated mapcodes to return. | `Local,Alternative` |
| `relatedPois` | `"off" \| "child" \| "parent" \| "all"` | No | — | Include related POIs in results. | `child` |
| `entityTypeSet` | `string` | No | — | Comma-separated entity types to filter by. | `Municipality,Neighbourhood` |

```ts
export interface TomTomQueryOptions {
  /**
   * Base URL for calling the API.
   * Example: "api.tomtom.com" or "kr-api.tomtom.com"
   */
  baseURL?: string;

  /**
   * Service version.
   * Example: "2"
   */
  versionNumber?: string;

  /**
   * Response format.
   * Allowed values: "json", "jsonp", "js", "xml"
   */
  ext?: 'json' | 'jsonp' | 'js' | 'xml';

  /**
   * API Key valid for the requested service
   */
  key?: string;

  /**
   * The query string. Must be URL-encoded.
   * Can include coordinates or mapcodes directly.
   * Example: "Berlin Pariser 20"
   */
  query?: string;

  /**
   * Enable predictive mode for partial input.
   * Default: false
   */
  typeahead?: boolean;

  /**
   * Maximum number of responses.
   * Default: 10, Max: 100
   */
  limit?: number;

  /**
   * Result offset within the full result set.
   * Default: 0
   */
  ofs?: number;

  /**
   * Comma-separated ISO 3166-1 alpha-2 or alpha-3 country codes to limit search.
   * Example: "FR,ES" or "FRA,ESP"
   */
  countrySet?: string;

  /**
   * Location bias: "point:lat,lon" or "rectangle:topLeftLat,topLeftLon,btmRightLat,btmRightLon".
   * Point takes precedence over bounding box.
   */
  geoBias?: string;

  /** Latitude for point-radius bias */
  lat?: number;

  /** Longitude for point-radius bias */
  lon?: number;

  /** Radius in meters for filtering around lat/lon */
  radius?: number;

  /** Bounding box top-left coordinates as "lat,lon" */
  topLeft?: string;

  /** Bounding box bottom-right coordinates as "lat,lon" */
  btmRight?: string;

  /** Language in which search results should be returned (IETF language tag) */
  language?: string;

  /** Comma-separated indexes for which extended postal codes should be included. Example: "POI,PAD" */
  extendedPostalCodesFor?: string;

  /** Minimum fuzziness level (1–4). Default: 1 */
  minFuzzyLevel?: number;

  /** Maximum fuzziness level (1–4). Default: 2 */
  maxFuzzyLevel?: number;

  /** Comma-separated list of indexes to be used for search. Example: "POI,PAD,Str" */
  idxSet?: string;

  /** Comma-separated list of POI category identifiers. Example: "7315,7315017" */
  categorySet?: string;

  /** Comma-separated list of brand names. Example: "TomTom,Foobar" */
  brandSet?: string;

  /** Comma-separated list of connector types (for EV stations). Example: "IEC62196Type2CableAttached" */
  connectorSet?: string;

  /** Minimum power (kW) for EV stations. Example: 22.2 */
  minPowerKW?: number;

  /** Maximum power (kW) for EV stations. Example: 43.2 */
  maxPowerKW?: number;

  /** Comma-separated list of fuel types. Example: "Diesel,Petrol" */
  fuelSet?: string;

  /** Comma-separated list of vehicle types. Example: "Car,Truck" */
  vehicleTypeSet?: string;

  /** Geopolitical view context. Default: "Unified" or country-specific. Example: "AR, CN, IN" */
  view?: string;

  /** POI opening hours mode. Example: "nextSevenDays" */
  openingHours?: string;

  /** Timezone mode. Example: "iana" */
  timeZone?: string;

  /** Comma-separated list of mapcodes to return. Example: "Local,Alternative" */
  mapcodes?: string;

  /** Related POIs to include: "off", "child", "parent", "all" */
  relatedPois?: 'off' | 'child' | 'parent' | 'all';

  /** Comma-separated list of entity types for filtering. Example: "Municipality,Neighbourhood" */
  entityTypeSet?: string;
}
```

## Response Format

```typescript
// TomTom Raw Response Types
interface TomTomResult {
  type: string;
  id: string;
  score: number;
  address: {
    streetNumber?: string;
    streetName?: string;
    municipality?: string;
    municipalitySubdivision?: string;
    countrySecondarySubdivision?: string;
    countrySubdivision?: string;
    countrySubdivisionName?: string;
    countrySubdivisionCode?: string;
    postalCode?: string;
    extendedPostalCode?: string;
    countryCode: string;
    country: string;
    countryCodeISO3: string;
    freeformAddress: string;
    localName?: string;
  };
  position: {
    lat: number;
    lon: number;
  };
  viewport?: {
    topLeftPoint: {
      lat: number;
      lon: number;
    };
    btmRightPoint: {
      lat: number;
      lon: number;
    };
  };
}

// LocationSuggestion with TomTom raw data
interface LocationSuggestion<Raw = TomTomResult> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw; // Contains the original TomTom response
}

```jsx
<LocationAutocomplete
  provider="tomtom"
  onLocationSelect={(location) => {
    console.log(location.display_name); // Formatted address
    console.log(location.lat, location.lon); // Coordinates
    console.log(location.raw?.address); // Structured address
    console.log(location.raw?.viewport); // Bounding box
  }}
/>
```

## Pricing

TomTom offers:
- Free tier with 2,500 requests per day
- [View pricing plans](https://developer.tomtom.com/store/maps-api)
