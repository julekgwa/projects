---
title: Custom Provider
---

# Custom Provider

You can provide your own search functionality by passing a `fetchSuggestions` function to the component.

## Interface

The `fetchSuggestions` function should match this signature:

```typescript
type FetchSuggestions = (query: string) => Promise<LocationSuggestion[]>;

interface LocationSuggestion<Raw = unknown> {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  importance: number;
  raw?: Raw;
}
```

## Example Implementation

Here's an example of implementing a custom search function:

```typescript
const fetchSuggestions = async (query: string) => {
  // Implement your search logic here
  const response = await fetch(
    `https://your-api.com/search?q=${query}&key=YOUR_API_KEY`
  );
  const data = await response.json();
  
  return data.results.map(item => ({
    place_id: item.id.toString(),
    display_name: item.formatted_address,
    lat: item.geometry.lat.toString(),
    lon: item.geometry.lng.toString(),
    type: item.type || 'place',
    importance: item.score || 0,
    raw: item // Original response data
  }));
};
```

## Usage

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      fetchSuggestions={fetchSuggestions}
      onLocationSelect={(location) => {
        console.log('Selected:', location);
        console.log('Raw data:', location.raw);
      }}
    />
  );
}
```

## Example with Debounce and Error Handling

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      fetchSuggestions={async (query) => {
        try {
          const response = await fetch(
            `https://your-api.com/search?q=${query}`
          );
          if (!response.ok) {
            throw new Error('Search failed');
          }
          const data = await response.json();
          
          return data.results.map(item => ({
            place_id: item.id.toString(),
            display_name: item.name,
            lat: item.latitude.toString(),
            lon: item.longitude.toString(),
            type: 'custom',
            importance: 1,
            raw: item
          }));
        } catch (error) {
          console.error('Search error:', error);
          return [];
        }
      }}
      debounceMs={500}
      onLocationSelect={(location) => {
        console.log(location);
      }}
      onQueryChange={(query) => {
        console.log('Current query:', query);
      }}
    />
  );
}
```
