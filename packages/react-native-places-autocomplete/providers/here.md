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
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  queryOptions={{
    language: 'en', // Response language
    limit: 5, // Max results
    countryCode: 'USA', // Limit to country
    maxResults: 20, // Maximum number of suggestions
  }}
/>
```

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
