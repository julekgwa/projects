---
title: API Reference
description: Complete API documentation for React Native Places Autocomplete. Learn about component props, provider options, styling, and TypeScript interfaces.
keywords: [react native, places autocomplete, api reference, props, typescript, providers, geocoding]
---

# API Reference

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fetchSuggestions` | `(query: string) => Promise<LocationSuggestion[]>` | `undefined` | Custom fetch function for retrieving location suggestions. Required when not using a built-in provider |
| `provider` | `LocationProvider` | `undefined` | Built-in provider name ('openstreetmap', 'mapbox', 'google', etc.) |
| `providerConfig` | `ProviderConfig` | `{}` | Provider configuration including API keys and base URLs |
| `queryOptions` | `QueryOptions` | `{}` | Provider-specific query parameters |
| `onLocationSelect` | `(location: LocationSuggestion) => void` | `undefined` | Callback when a location is selected |
| `onQueryChange` | `(query: string) => void` | `undefined` | Callback when search query changes |
| `placeholder` | `string` | `"Search for a location..."` | Input placeholder text |
| `debounceMs` | `number` | `300` | Debounce delay for API calls in milliseconds |
| `showRecentSearches` | `boolean` | `true` | Show recent searches when input is empty |
| `recentSearches` | `string[]` | `[]` | Array of recent search terms |
| `onRecentSearchesChange` | `(searches: string[]) => void` | `undefined` | Callback when recent searches update |
| `maxRecentSearches` | `number` | `5` | Maximum number of recent searches to keep |
| `theme` | `DeepPartial<LocationAutocompleteTheme>` | `{}` | Custom theme configuration |
| `attribution` | `React.ComponentType \| React.ReactElement` | `null` | Attribution component for provider |

## Style Props

| Prop | Type | Description |
|------|------|-------------|
| `containerStyle` | `ViewStyle` | Style for the main wrapper container |
| `inputContainerStyle` | `ViewStyle` | Style for the input container (with search icon, input, clear button) |
| `inputStyle` | `TextStyle` | Style for the TextInput field itself |
| `suggestionStyle` | `ViewStyle` | Style for individual suggestion items |
| `textStyle` | `TextStyle` | Style for text elements (titles, labels) |
| `autocompleteContainerStyle` | `ViewStyle` | Style for the autocomplete suggestions container |
| `autocompleteSuggestionItemStyle` | `ViewStyle` | Style for individual autocomplete suggestion items |
| `autocompleteSuggestionTextStyle` | `TextStyle` | Style for suggestion text |

## Type Definitions

### LocationSuggestion

```typescript
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

### LocationProvider

```typescript
type LocationProvider =
  | 'openstreetmap'
  | 'mapbox'
  | 'google'
  | 'geoapify'
  | 'locationiq'
  | 'here'
  | 'tomtom'
  | 'opencage';
```

### ProviderConfig

```typescript
interface ProviderConfig {
  apiKey?: string;
  baseUrl?: string;
}
```

### QueryOptions

```typescript
interface QueryOptions {
  [key: string]: string | number | boolean;
}
```

## Provider Options

Each provider can be configured with specific options:

### Common Options
| Option | Type | Description |
|--------|------|-------------|
| `apiKey` | `string` | API key for the provider |
| `baseUrl` | `string` | Custom base URL (optional) |

### Provider-Specific Options

#### Google Places
```typescript
{
  apiKey: string;
  language?: string;
  region?: string;
  sessionToken?: string;
}
```

#### Mapbox
```typescript
{
  apiKey: string;
  country?: string;
  proximity?: [number, number]; // [longitude, latitude]
  language?: string;
}
```

#### OpenStreetMap (Nominatim)
```typescript
{
  userAgent: string; // Required for production use
  email?: string;    // Required for high-volume usage
  language?: string;
}
```

## Theme Interface

```typescript
interface LocationAutocompleteTheme {
  colors: {
    background: string;
    surface: string;
    primary: string;
    onSurface: string;
    onSurfaceVariant: string;
    outline: string;
    error: string;
    onError: string;
    shadow: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    iconMargin: number;
    iconPadding: number;
    loaderMargin: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
  };
  typography: {
    body: {
      fontSize: number;
      fontWeight: FontWeight;
    };
    bodySmall: {
      fontSize: number;
      fontWeight: FontWeight;
    };
    titleMedium: {
      fontSize: number;
      fontWeight: FontWeight;
    };
  };
  icons: {
    search: {
      size: number;
      color?: string;
    };
    mapPin: {
      size: number;
      color?: string;
    };
    clock: {
      size: number;
      color?: string;
    };
    clear: {
      size: number;
      color?: string;
    };
  };
}
```
