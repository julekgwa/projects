---
title: useOnboarding Hook
---

# useOnboarding Hook

The `useOnboarding` hook provides a convenient way to manage onboarding state and navigation programmatically.

## Usage

```jsx
import React from 'react';
import { View, Button } from 'react-native';
import { useOnboarding } from 'react-native-app-onboard';

const CustomOnboardingScreen = () => {
  const { 
    currentPage,
    nextPage,
    isDone,
    scrollTo,
    progress 
  } = useOnboarding();

  return (
    <View>
      <Text>Page {currentPage + 1}</Text>
      <Text>Progress: {progress * 100}%</Text>
      <Button
        title={isDone ? 'Finish' : 'Next'}
        onPress={nextPage}
      />
    </View>
  );
};
```

## Hook Values

| Value | Type | Description |
|-------|------|-------------|
| `currentPage` | `number` | Current page index |
| `setCurrentPage` | `(page: number) => void` | Set current page |
| `scrollEnabled` | `boolean` | Whether scrolling is enabled |
| `enableScroll` | `(enabled: boolean) => void` | Enable/disable scrolling |
| `flatListRef` | `React.RefObject<FlatList>` | Reference to FlatList |
| `numberOfScreens` | `number` | Total number of screens |
| `nextPage` | `() => void` | Go to next page |
| `scrollTo` | `(page: number) => void` | Scroll to specific page |
| `progress` | `number` | Progress value (0-1) |
| `isDone` | `boolean` | Whether onboarding is complete |

## Examples

### Custom Navigation

```jsx
const CustomFooter = () => {
  const { currentPage, numberOfScreens, scrollTo } = useOnboarding();

  return (
    <View style={styles.footer}>
      {Array.from({ length: numberOfScreens }).map((_, index) => (
        <Button
          key={index}
          title={`${index + 1}`}
          onPress={() => scrollTo(index)}
          style={currentPage === index && styles.active}
        />
      ))}
    </View>
  );
};
```

### Progress Indicator

```jsx
const ProgressBar = () => {
  const { progress } = useOnboarding();

  return (
    <View style={styles.progressContainer}>
      <View 
        style={[
          styles.progressBar, 
          { width: `${progress * 100}%` }
        ]} 
      />
    </View>
  );
};
```

### Conditional Rendering

```jsx
const OnboardingControls = () => {
  const { isDone, nextPage, currentPage } = useOnboarding();

  if (isDone) {
    return (
      <Button
        title="Get Started"
        onPress={() => {
          // Navigate to main app
        }}
      />
    );
  }

  return (
    <Button
      title={`Next (${currentPage + 1})`}
      onPress={nextPage}
    />
  );
};
```
