---
title: Styling
---

# Styling Guide

## Base Styling Props

| Prop | Type | Description |
|------|------|-------------|
| `containerStyle` | `StyleProp<ViewStyle>` | Main container style |
| `inputContainerStyle` | `StyleProp<ViewStyle>` | Input container style |
| `inputStyle` | `StyleProp<TextStyle>` | Text input style |
| `tagStyle` | `StyleProp<ViewStyle>` | Individual tag container style |
| `tagTextStyle` | `StyleProp<TextStyle>` | Tag text style |
| `deleteIconStyles` | `StyleProp<ImageStyle>` | Delete button style |
| `labelStyle` | `StyleProp<TextStyle>` | Label text style |

## Basic Example

```tsx
<TagInput
  containerStyle={{
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }}
  inputStyle={{
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 12,
    height: 40,
  }}
  tagStyle={{
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
  }}
  tagTextStyle={{
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  }}
/>
```

## Theme Integration

```tsx
const theme = {
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
    text: '#333333',
    border: '#E0E0E0',
    error: '#FF3B30',
  },
  spacing: {
    small: 4,
    medium: 8,
    large: 12,
  },
  typography: {
    regular: {
      fontSize: 14,
      fontWeight: '400',
    },
    medium: {
      fontSize: 14,
      fontWeight: '500',
    },
  },
};

<TagInput
  containerStyle={{
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.spacing.medium,
    padding: theme.spacing.large,
  }}
  tagStyle={{
    backgroundColor: theme.colors.primary,
    borderRadius: theme.spacing.large * 2,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.medium,
    margin: theme.spacing.small,
  }}
  tagTextStyle={{
    ...theme.typography.medium,
    color: theme.colors.background,
  }}
  inputStyle={{
    ...theme.typography.regular,
    color: theme.colors.text,
  }}
/>
```

## Custom Layouts

### Vertical Layout

```tsx
<TagInput
  containerStyle={{
    flexDirection: 'column',
  }}
  tagsViewStyle={{
    flexDirection: 'column',
    alignItems: 'stretch',
  }}
  tagStyle={{
    marginVertical: 4,
  }}
/>
```

### Grid Layout

```tsx
<TagInput
  containerStyle={{
    flexWrap: 'wrap',
    flexDirection: 'row',
  }}
  tagStyle={{
    width: '45%', // Adjust based on your needs
    margin: '2.5%',
  }}
/>
```

## Responsive Design

```tsx
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

<TagInput
  containerStyle={{
    width: isTablet ? '50%' : '100%',
    alignSelf: 'center',
  }}
  tagStyle={{
    width: isTablet ? 150 : '48%',
  }}
  inputStyle={{
    fontSize: isTablet ? 16 : 14,
  }}
/>
```

## Dark Mode Support

```tsx
const isDarkMode = useColorScheme() === 'dark';

const styles = StyleSheet.create({
  container: {
    backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF',
    borderColor: isDarkMode ? '#2C2C2E' : '#E0E0E0',
  },
  input: {
    color: isDarkMode ? '#FFFFFF' : '#000000',
  },
  tag: {
    backgroundColor: isDarkMode ? '#0A84FF' : '#007AFF',
  },
  tagText: {
    color: '#FFFFFF',
  },
});

<TagInput
  containerStyle={styles.container}
  inputStyle={styles.input}
  tagStyle={styles.tag}
  tagTextStyle={styles.tagText}
/>
