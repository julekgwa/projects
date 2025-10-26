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
      
      if (placeId) {
        // Make a separate call to get place details
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_address,geometry&key=YOUR_API_KEY`
        );
        
        const data = await response.json();
        
        if (data.result) {
          console.log('Full address:', data.result.formatted_address);
          console.log('Latitude:', data.result.geometry.location.lat);
          console.log('Longitude:', data.result.geometry.location.lng);
        }
      }
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

## Configuration Options

```jsx
<LocationAutocomplete
  provider="google"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  queryOptions={{
    types: ['geocode', 'establishment'], // Place types to return
    components: 'country:us', // Limit results to a specific country
    language: 'en', // Response language
    radius: 50000, // Search radius in meters
    location: '37.7749,-122.4194', // Location bias
    strictbounds: true, // Restrict results to given location/radius
  }}
/>
```

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
