---
title: Basic Usage
---

# Basic Usage

## Quick Start

Here's a basic example using OpenStreetMap (which requires no API key):

```jsx
import { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <LocationAutocomplete
      provider="openstreetmap"
      onLocationSelect={(location) => {
        console.log('Selected:', location);
      }}
    />
  );
}
```

## Core Features
[api-reference.md](api-reference.md)
### Location Selection

```jsx
<LocationAutocomplete
  provider="openstreetmap"
  onLocationSelect={(location) => {
    const { place_id, display_name, lat, lon } = location;
    console.log('Place ID:', place_id);
    console.log('Name:', display_name);
    console.log('Coordinates:', { lat, lon });
  }}
/>
```

### Recent Searches

```jsx
const [recentSearches, setRecentSearches] = useState([]);

<LocationAutocomplete
  showRecentSearches={true}
  recentSearches={recentSearches}
  onRecentSearchesChange={setRecentSearches}
  maxRecentSearches={5}
/>
```

## Handling Errors

```jsx
<LocationAutocomplete
  provider="google"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  onError={(error) => {
    console.error('Search error:', error);
  }}
/>
```

See the [Configuration](configuration) guide for more detailed setup options.
