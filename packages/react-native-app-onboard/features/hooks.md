---
title: Hooks
---

# useOnboarding Hook

The `useOnboarding` hook provides programmatic control over the onboarding flow.

## Basic Usage

```jsx
import { useOnboarding } from 'react-native-app-onboard';

const OnboardingControls = () => {
  const {
    currentPage,
    nextPage,
    isDone,
    progress,
    scrollTo,
  } = useOnboarding();

  return (
    <View>
      <Text>Page {currentPage + 1}</Text>
      <Button
        title={isDone ? 'Finish' : 'Next'}
        onPress={nextPage}
      />
    </View>
  );
};
```

## Available Values

| Value | Type | Description |
|-------|------|-------------|
| `currentPage` | `number` | Current page index |
| `setCurrentPage` | `(page: number) => void` | Set current page |
| `scrollEnabled` | `boolean` | Scrolling enabled state |
| `enableScroll` | `(enabled: boolean) => void` | Enable/disable scrolling |
| `flatListRef` | `React.RefObject<FlatList>` | FlatList reference |
| `numberOfScreens` | `number` | Total screens count |
| `nextPage` | `() => void` | Go to next page |
| `scrollTo` | `(page: number) => void` | Scroll to page |
| `progress` | `number` | Progress (0-1) |
| `isDone` | `boolean` | Onboarding complete |

## Examples

### Progress Indicator

```jsx
const ProgressBar = () => {
  const { progress } = useOnboarding();

  return (
    <View style={styles.progressContainer}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};
```

### Custom Navigation

```jsx
const Navigation = () => {
  const { currentPage, numberOfScreens, scrollTo } = useOnboarding();

  return (
    <View style={styles.navigation}>
      {Array.from({ length: numberOfScreens }).map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => scrollTo(index)}
          style={[
            styles.dot,
            currentPage === index && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
};
```

### Scroll Control

```jsx
const ScrollControls = () => {
  const { enableScroll, scrollEnabled } = useOnboarding();

  return (
    <View>
      <Switch
        value={scrollEnabled}
        onValueChange={enableScroll}
      />
      <Text>
        Scrolling: {scrollEnabled ? 'Enabled' : 'Disabled'}
      </Text>
    </View>
  );
};
```

### Progress-Based Content

```jsx
const DynamicContent = () => {
  const { progress, currentPage } = useOnboarding();
  
  return (
    <Animated.View
      style={{
        opacity: progress,
        transform: [
          {
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 0],
            }),
          },
        ],
      }}
    >
      <Text>Content for page {currentPage + 1}</Text>
    </Animated.View>
  );
};
```
