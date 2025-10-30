---
title: Google Places
description: Learn how to integrate Google Places Autocomplete API with detailed place information retrieval in your React Native app
---

# Google Places Provider

## Setup

1. Get an API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Enable both the Places API and Place Details API for your project
3. Configure your API key with appropriate restrictions

## Usage

The Google Places integration involves two steps:
1. Getting place predictions (autocomplete suggestions)
2. Fetching detailed place information using the place_id

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
    
  const handlePlaceSelect = async (location) => {
    try {
      // The location object contains the place_id from the autocomplete
      const placeId = location.place_id;
      // if you need the place details, make a call to the Place Details API
      // e.g., const placeDetails = await getPlaceDetails(placeId, 'YOUR_GOOGLE_API_KEY');
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };

  return (
    <LocationAutocomplete
      provider="google"
      providerConfig={{
        apiKey: 'YOUR_GOOGLE_API_KEY'
      }}
      queryOptions={{
        languageCode: 'en',
      }}
      onLocationSelect={handlePlaceSelect}
    />
  );
}
```

## Place Details API

When you receive a place_id from the autocomplete suggestions, you'll need to make an additional API call to get detailed information about the place. Here are the key points:

- The Place Details API requires a separate API call
- You can specify which fields you want to receive to optimize response size and cost
- Common fields include: formatted_address, geometry, name, photos, place_id, types, etc.

Example Place Details request:
```typescript
interface PlaceDetails {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport?: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  name?: string;
  place_id: string;
  types?: string[];
  // ... other fields based on your request
}

const getPlaceDetails = async (placeId: string, apiKey: string): Promise<PlaceDetails> => {
  const fields = [
    'formatted_address',
    'geometry',
    'name',
    'place_id',
    'types'
  ].join(',');

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?` +
    `place_id=${placeId}&` +
    `fields=${fields}&` +
    `key=${apiKey}`
  );

  const data = await response.json();
  
  if (data.status !== 'OK') {
    throw new Error(`Place Details API error: ${data.status}`);
  }

  return data.result;
};
```

## Query Options

```jsx
<LocationAutocomplete
  provider="google"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  queryOptions={{
    // Request only the fields you need from Place Details to reduce payload/cost
    fieldMask: 'formatted_address,geometry,name',

    // Restrict predictions to certain primary types (e.g. 'establishment')
    includedPrimaryTypes: ['establishment'],

    // Include query predictions (non-place suggestions) alongside place predictions
    includeQueryPredictions: true,

    // Include service-area businesses (no physical storefront)
    includePureServiceAreaBusinesses: false,

    // Restrict results to specific region/country codes
    includedRegionCodes: ['US', 'CA'],

    // Optional cursor offset within the input string (affects matching)
    inputOffset: 3,

    // Bias results toward a nearby location (cannot be used with locationRestriction)
    locationBias: {
      circle: {
        center: { lat: 37.7749, lng: -122.4194 },
        radius: 5000, // meters
      },
    },

    // Alternatively, restrict results strictly within an area:
    // locationRestriction: {
    //   rectangle: {
    //     low: { lat: 37.7, lng: -122.5 },
    //     high: { lat: 37.8, lng: -122.3 },
    //   }
    // },

    // Optional origin point to compute distance-based ranking
    origin: { lat: 37.7749, lng: -122.4194 },

    // Session token to group autocomplete and details requests for billing/accuracy
    sessionToken: 'abc123-session-token',

    // Preferred language for responses
    languageCode: 'en',
  }}
/>
```

## Query options

Below is a table documenting the available `queryOptions` for the Google Places Autocomplete integration (typed as `GoogleQueryOptions`). Use these fields to control which predictions you receive and how results are biased or restricted.

| Name | Type | Required | Default | Description | Example |
|------|------|----------|---------|-------------|---------|
| `fieldMask` | `string` | No | — | Comma-separated list specifying which fields to return in the Place Details response. Helps reduce payload and cost. | `"name,geometry,formatted_address"` |
| `includedPrimaryTypes` | `string[]` | No | — | Restrict predictions to places matching one of the provided primary types (up to 5). | `['restaurant','cafe']` |
| `includePureServiceAreaBusinesses` | `boolean` | No | `false` | Include businesses that do not have a physical storefront (service-area businesses). | `true` |
| `includeQueryPredictions` | `boolean` | No | `false` | Include query-type predictions (non-place queries) alongside place predictions. | `true` |
| `includedRegionCodes` | `string[]` | No | — | Up to 15 two-character region/country codes to restrict results to. | `['US','CA']` |
| `inputOffset` | `number` | No | length of input | Unicode character offset in the input that influences matching; defaults to the input length. | `3` |
| `locationBias` | `object` | No | — | Bias results toward a specific area (cannot be used with `locationRestriction`). Supports `circle` and `rectangle` shapes. | `{ circle: { center: { lat: 37.7749, lng: -122.4194 }, radius: 5000 } }` |
| `locationRestriction` | `object` | No | — | Restrict results strictly within an area (cannot be used with `locationBias`). Supports `circle` and `rectangle` shapes. | `{ rectangle: { low: { lat: 37.7, lng: -122.5 }, high: { lat: 37.8, lng: -122.3 } } }` |
| `origin` | `object` | No | — | Origin point used to compute distance-based ranking for predictions. | `{ lat: 37.7749, lng: -122.4194 }` |
| `sessionToken` | `string` | No | — | Session token to group autocomplete & details calls for billing and improved result accuracy. | `'abc123-session-token'` |
| `languageCode` | `string` | No | — | Preferred response language (BCP-47). | `'en'` |

## Response Format

### Autocomplete Response
```typescript
// Google Places API Raw Response Type
interface GooglePlaceSuggestion {
  placePrediction: {
    place?: string; // e.g., "places/ChIJ..."
    placeId?: string; // e.g., "ChIJ..."
    text?: {
      text: string;
      matches?: Array<{
        startOffset?: number;
        endOffset: number;
      }>;
    };
    structuredFormat?: {
      mainText: {
        text: string;
        matches?: Array<{
          startOffset?: number;
          endOffset: number;
        }>;
      };
      secondaryText?: {
        text: string;
        matches?: Array<{
          startOffset?: number;
          endOffset: number;
        }>;
      };
    };
    types?: string[]; // e.g., ['geocode', 'street_address']
  };
}

// LocationSuggestion with Google Places raw data
interface LocationSuggestion<Raw = GooglePlaceSuggestion> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw; // Contains the original Google Places response
}
```

### Place Details Response
```typescript
interface GooglePlaceDetails {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport?: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  name?: string;
  place_id: string;
  types?: string[];
  address_components?: Array<{
    long_name: string;
    short_name: string;
    types: string[];
  }>;
  formatted_phone_number?: string;
  international_phone_number?: string;
  website?: string;
  rating?: number;
  reviews?: Array<{
    author_name: string;
    rating: number;
    text: string;
    time: number;
  }>;
}
```

Example of handling both APIs:
```jsx
<LocationAutocomplete
  provider="google"
  onLocationSelect={async (location) => {
    console.log('Autocomplete selection:', location.display_name);
    
    try {
      const placeDetails = await getPlaceDetails(
        location.raw?.placePrediction?.placeId,
        'YOUR_API_KEY'
      );
      
      console.log('Full address:', placeDetails.formatted_address);
      console.log('Coordinates:', placeDetails.geometry.location);
      console.log('Place types:', placeDetails.types);
    } catch (error) {
      console.error('Error getting place details:', error);
    }
  }}
/>
```

## Billing

Google Places API uses two separate billable services:
- Places Autocomplete API: Charged per request
- Place Details API: Charged per request
- Basic vs Contact vs Atmosphere data pricing tiers
- [Check current pricing](https://cloud.google.com/maps-platform/pricing)

## Best Practices

1. **Optimize Place Details Requests**
   - Only request the fields you need using the `fields` parameter
   - Cache results when appropriate
   - Consider implementing rate limiting

2. **Error Handling**
   - Handle API errors gracefully
   - Implement proper error messages for users
   - Consider implementing retry logic for failed requests

3. **Performance**
   - Use the session token to group autocomplete and place details requests
   - Implement proper loading states
   - Consider implementing request debouncing
