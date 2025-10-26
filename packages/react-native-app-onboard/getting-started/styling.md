---
title: Styling
---

# Styling

## Available Style Props

| Prop | Type | Description |
|------|------|-------------|
| `paginationContainerStyle` | `StyleProp<ViewStyle>` | Pagination container style |
| `buttonRightContainerStyle` | `StyleProp<ViewStyle>` | Right button container |
| `buttonLeftContainerStyle` | `StyleProp<ViewStyle>` | Left button container |
| `dotsContainerStyle` | `StyleProp<ViewStyle>` | Dots container style |
| `doneLabelStyle` | `StyleProp<TextStyle>` | Done button text style |
| `skipLabelStyle` | `StyleProp<TextStyle>` | Skip button text style |
| `nextLabelStyle` | `StyleProp<TextStyle>` | Next button text style |
| `containerStyle` | `StyleProp<ViewStyle>` | Main container style |
| `imageContainerStyle` | `StyleProp<ViewStyle>` | Image container style |
| `titleContainerStyle` | `StyleProp<ViewStyle>` | Title container style |
| `titleStyle` | `StyleProp<TextStyle>` | Title text style |
| `subtitleStyle` | `StyleProp<TextStyle>` | Subtitle text style |

## Examples

### Basic Styling

```jsx
<Onboarding
  containerStyle={{
    backgroundColor: '#fff',
  }}
  imageContainerStyle={{
    padding: 20,
  }}
  titleStyle={{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  }}
  subtitleStyle={{
    fontSize: 16,
    color: '#666',
  }}
/>
```

### Navigation Button Styling

```jsx
<Onboarding
  buttonRightContainerStyle={{
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  }}
  buttonLeftContainerStyle={{
    padding: 10,
  }}
  nextLabelStyle={{
    color: '#fff',
    fontWeight: 'bold',
  }}
  skipLabelStyle={{
    color: '#666',
  }}
  doneLabelStyle={{
    color: '#fff',
    fontWeight: 'bold',
  }}
/>
```

### Pagination Styling

```jsx
<Onboarding
  paginationContainerStyle={{
    paddingVertical: 20,
  }}
  dotsContainerStyle={{
    marginHorizontal: 8,
  }}
  color="#007AFF" // Dots color
/>
```

### Per-Page Styling

```jsx
<Onboarding
  pages={[
    {
      backgroundColor: '#140E17',
      containerStyle: {
        padding: 20,
      },
      imageContainerStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      titleStyle: {
        fontSize: 28,
        fontWeight: '800',
      },
      subtitleStyle: {
        fontSize: 18,
        opacity: 0.8,
      },
      // ... other page props
    },
    // ... more pages
  ]}
/>
```

### Theme-Based Styling

```jsx
const theme = {
  primary: '#007AFF',
  background: '#F5F5F5',
  text: '#333333',
  textSecondary: '#666666',
};

<Onboarding
  containerStyle={{
    backgroundColor: theme.background,
  }}
  titleStyle={{
    color: theme.text,
  }}
  subtitleStyle={{
    color: theme.textSecondary,
  }}
  nextLabelStyle={{
    color: theme.primary,
  }}
  color={theme.primary}
/>
```
