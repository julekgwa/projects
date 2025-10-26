---
title: Animations
---

# Animations

The Onboarding component includes various animation options and supports custom animations.

## Built-in Animations

### Scroll Animation

```jsx
<Onboarding
  scrollAnimationDuration={500}
  useNativeDriver={true}
/>
```

### Dot Animation

```jsx
<Onboarding
  dotAnimation={{
    type: 'slide',
    duration: 300,
  }}
/>
```

## Custom Animations

### Fade Animation

```jsx
const FadeView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

const CustomPage = () => (
  <FadeView>
    <Text>Welcome!</Text>
  </FadeView>
);
```

### Slide Animation

```jsx
const SlideView = ({ children, direction = 'right' }) => {
  const slideAnim = useRef(new Animated.Value(direction === 'right' ? 100 : -100)).current;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      tension: 10,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: slideAnim }],
      }}
    >
      {children}
    </Animated.View>
  );
};
```

### Scale Animation

```jsx
const ScaleView = ({ children }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 20,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleAnim }],
      }}
    >
      {children}
    </Animated.View>
  );
};
```

### Sequence Animation

```jsx
const SequenceView = ({ children }) => {
  const animations = {
    slideUp: useRef(new Animated.Value(50)).current,
    fade: useRef(new Animated.Value(0)).current,
  };

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animations.slideUp, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animations.fade, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: animations.fade,
        transform: [{ translateY: animations.slideUp }],
      }}
    >
      {children}
    </Animated.View>
  );
};
```

## Implementation Examples

### Animated Page Transition

```jsx
const AnimatedPage = ({ title, subtitle, image }) => {
  const { currentPage } = useOnboarding();
  const animations = {
    image: useRef(new Animated.Value(0)).current,
    title: useRef(new Animated.Value(0)).current,
    subtitle: useRef(new Animated.Value(0)).current,
  };

  useEffect(() => {
    Animated.stagger(200, [
      Animated.spring(animations.image, {
        toValue: 1,
        tension: 10,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.spring(animations.title, {
        toValue: 1,
        tension: 10,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.spring(animations.subtitle, {
        toValue: 1,
        tension: 10,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentPage]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={image}
        style={[
          styles.image,
          {
            opacity: animations.image,
            transform: [
              { scale: animations.image },
            ],
          },
        ]}
      />
      <Animated.Text
        style={[
          styles.title,
          {
            opacity: animations.title,
            transform: [
              { translateY: animations.title.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              })},
            ],
          },
        ]}
      >
        {title}
      </Animated.Text>
      <Animated.Text
        style={[
          styles.subtitle,
          {
            opacity: animations.subtitle,
            transform: [
              { translateY: animations.subtitle.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              })},
            ],
          },
        ]}
      >
        {subtitle}
      </Animated.Text>
    </View>
  );
};
```
