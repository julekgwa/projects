---
title: Custom Provider
---

# Custom Provider

You can provide your own search functionality by passing a `fetchSuggestions` function to the component.

## Interface

The `fetchSuggestions` function should match this signature:

```typescript
import {type LocationSuggestion,} from '@julekgwa/react-native-places-autocomplete';

type CustomType = {
  lon: string;
  lat: string;
  name: string;
}
```

## Example Implementation

Here's an example of implementing a custom search function:

```typescript
const fetchSuggestions = async (query: string): Promise<LocationSuggestion<CustomType>[]> => {
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
    <LocationAutocomplete<CustomType>
      fetchSuggestions={fetchSuggestions}
      onLocationSelect={(location) => {
        console.log('Selected:', location);
        console.log('Raw data:', location.raw);
      }}
    />
  );
}
```