---
title: Styling
---

# Styling

## Available Style Props

The component provides several style props for customization:

| Prop | Type | Description |
|------|------|-------------|
| `containerStyle` | `ViewStyle` | Main wrapper container style |
| `inputContainerStyle` | `ViewStyle` | Input container style |
| `inputStyle` | `TextStyle` | TextInput field style |
| `suggestionStyle` | `ViewStyle` | Suggestion item style |
| `textStyle` | `TextStyle` | Text elements style |
| `theme` | `DeepPartial<LocationAutocompleteTheme>` | Theme configuration |

## Basic Styling Example

```jsx
<PlacesAutocomplete
  containerStyle={{
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }}
  inputContainerStyle={{
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 16,
    height: 50,
  }}
  inputStyle={{
    fontSize: 16,
    color: '#333',
  }}
  suggestionStyle={{
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  }}
  textStyle={{
    fontSize: 14,
    color: '#666',
  }}
/>
```

## Theme Customization

```jsx
<PlacesAutocomplete
  theme={{
    colors: {
      primary: '#007AFF',
      background: '#FFFFFF',
      text: '#000000',
      placeholder: '#999999',
      border: '#E0E0E0',
    },
    typography: {
      fontSize: 16,
      fontFamily: 'System',
    },
    spacing: {
      padding: 16,
      borderRadius: 8,
    },
  }}
/>
```

## Custom Suggestion Rendering

```jsx
<PlacesAutocomplete
  renderSuggestion={({ item }) => (
    <TouchableOpacity 
      style={styles.customSuggestion}
      onPress={() => handleSelect(item)}
    >
      <View style={styles.suggestionContent}>
        <Text style={styles.suggestionTitle}>{item.name}</Text>
        <Text style={styles.suggestionAddress}>{item.address}</Text>
      </View>
      <Icon name="chevron-right" size={20} color="#999" />
    </TouchableOpacity>
  )}
/>
```

## Input Customization

```jsx
<PlacesAutocomplete
  inputProps={{
    placeholderTextColor: '#999',
    selectionColor: '#007AFF',
    returnKeyType: 'search',
    autoCorrect: false,
    autoCapitalize: 'none',
  }}
  leftIcon={<Icon name="search" size={20} color="#999" />}
  rightIcon={<Icon name="close" size={20} color="#999" />}
/>
```

## Loading State Styling

```jsx
<PlacesAutocomplete
  loadingIndicatorStyle={{
    color: '#007AFF',
    size: 'small',
  }}
  renderLoadingIndicator={() => (
    <ActivityIndicator color="#007AFF" size="small" />
  )}
/>
```
