---
title: Installation
---

# Installation

## Package Installation

Install the package using npm or yarn:

```bash
# Using npm
npm install @julekgwa/react-native-places-autocomplete

# Using yarn
yarn add @julekgwa/react-native-places-autocomplete
```

## Basic Usage

```jsx
import { PlacesAutocomplete } from '@julekgwa/react-native-places-autocomplete';

export default function App() {
  return (
    <PlacesAutocomplete
      provider="google"
      providerConfig={{
        apiKey: 'YOUR_API_KEY' // Required for some providers
      }}
      onLocationSelect={(location) => {
        console.log('Selected location:', location);
      }}
    />
  );
}
```

## Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fetchSuggestions` | `(query: string) => Promise<LocationSuggestion[]>` | `undefined` | Function to fetch location suggestions (optional when using provider) |
| `provider` | `LocationProvider` | `undefined` | Built-in provider: 'openstreetmap', 'mapbox', 'google', 'geoapify', 'locationiq' |
| `providerConfig` | `ProviderConfig` | `{}` | Configuration for built-in providers (API keys, base URLs) |
| `queryOptions` | `QueryOptions` | `{}` | Provider-specific query parameters |
| `onLocationSelect` | `(location: LocationSuggestion) => void` | `undefined` | Callback when a location is selected |
| `onQueryChange` | `(query: string) => void` | `undefined` | Callback when search query changes |
| `placeholder` | `string` | `"Search for a location..."` | Input placeholder text |
| `debounceMs` | `number` | `300` | Debounce delay for API calls in milliseconds |
| `showRecentSearches` | `boolean` | `true` | Show recent searches when input is empty |
| `recentSearches` | `string[]` | `[]` | Array of recent search terms |
| `onRecentSearchesChange` | `(searches: string[]) => void` | `undefined` | Callback when recent searches update |
| `maxRecentSearches` | `number` | `5` | Maximum number of recent searches to keep |
| `containerStyle` | `ViewStyle` | `undefined` | Style for the main wrapper container |
| `inputContainerStyle` | `ViewStyle` | `undefined` | Style for the input container |
| `inputStyle` | `TextStyle` | `undefined` | Style for the TextInput field itself |
| `suggestionStyle` | `ViewStyle` | `undefined` | Style for individual suggestion items |
| `textStyle` | `TextStyle` | `undefined` | Style for text elements (titles, labels) |
| `theme` | `DeepPartial<LocationAutocompleteTheme>` | `{}` | Custom theme configuration |
| `attribution` | `React.ComponentType \| React.ReactElement` | `null` | Attribution component for your provider |

## Examples

### Using with Google Places

```jsx
<PlacesAutocomplete
  provider="google"
  providerConfig={{
    apiKey: 'YOUR_GOOGLE_API_KEY'
  }}
  queryOptions={{
    types: ['geocode', 'establishment'],
    components: 'country:us'
  }}
  onLocationSelect={(location) => {
    console.log(location);
  }}
/>
```

### Using with OpenStreetMap (No API key required)

```jsx
<PlacesAutocomplete
  provider="openstreetmap"
  onLocationSelect={(location) => {
    console.log(location);
  }}
/>
```

### Custom Styling

```jsx
<PlacesAutocomplete
  provider="google"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  containerStyle={{
    marginHorizontal: 16,
    marginTop: 8
  }}
  inputContainerStyle={{
    borderRadius: 8,
    backgroundColor: '#f5f5f5'
  }}
  inputStyle={{
    fontSize: 16
  }}
  suggestionStyle={{
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }}
  textStyle={{
    fontSize: 14,
    color: '#333'
  }}
/>
```

### With Recent Searches

```jsx
const [recentSearches, setRecentSearches] = useState([]);

<PlacesAutocomplete
  provider="google"
  providerConfig={{
    apiKey: 'YOUR_API_KEY'
  }}
  showRecentSearches={true}
  recentSearches={recentSearches}
  onRecentSearchesChange={setRecentSearches}
  maxRecentSearches={10}
/>
```
