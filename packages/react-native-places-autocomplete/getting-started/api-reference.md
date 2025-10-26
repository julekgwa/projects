---
title: API Reference
---

# API Reference

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fetchSuggestions` | `(query: string) => Promise<LocationSuggestion[]>` | `undefined` | Custom fetch function |
| `provider` | `LocationProvider` | `undefined` | Built-in provider name |
| `providerConfig` | `ProviderConfig` | `{}` | Provider configuration |
| `queryOptions` | `QueryOptions` | `{}` | Provider query options |
| `onLocationSelect` | `(location: LocationSuggestion) => void` | `undefined` | Selection callback |
| `onQueryChange` | `(query: string) => void` | `undefined` | Query change callback |
| `placeholder` | `string` | `"Search for a location..."` | Input placeholder |
| `debounceMs` | `number` | `300` | Debounce delay |
| `showRecentSearches` | `boolean` | `true` | Show recent searches |
| `recentSearches` | `string[]` | `[]` | Recent search terms |
| `onRecentSearchesChange` | `(searches: string[]) => void` | `undefined` | Recent searches callback |
| `maxRecentSearches` | `number` | `5` | Max recent searches |

## Style Props

| Prop | Type | Description |
|------|------|-------------|
| `containerStyle` | `ViewStyle` | Main container style |
| `inputContainerStyle` | `ViewStyle` | Input container style |
| `inputStyle` | `TextStyle` | Input field style |
| `suggestionStyle` | `ViewStyle` | Suggestion item style |
| `textStyle` | `TextStyle` | Text elements style |

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
