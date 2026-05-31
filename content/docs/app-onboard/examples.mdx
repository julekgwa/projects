---
title: Examples
---

# Examples

## Custom Footer Example

This example shows how to create a custom footer with a unique pagination design.

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Onboarding } from 'react-native-app-onboard';

const CustomFooter = ({ nextPage, currentPage, numberOfScreens }) => (
  <View style={styles.footer}>
    {Array.from({ length: numberOfScreens }).map((_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          currentPage === index && styles.activeDot
        ]}
      />
    ))}
    <TouchableOpacity
      style={styles.nextButton}
      onPress={nextPage}
    >
      <Text>→</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <Onboarding
    pages={[
      {
        backgroundColor: '#140E17',
        image: <Image source={require('./images/image1.png')} />,
        title: 'Welcome',
        subtitle: 'Get started with our app',
      },
      // ... more pages
    ]}
    customFooter={CustomFooter}
  />
);

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 16,
  },
  nextButton: {
    marginLeft: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 20,
  },
});
```

## Custom Pages Example

This example demonstrates how to create fully custom pages using children components.

```jsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Onboarding } from 'react-native-app-onboard';

const { width } = Dimensions.get('window');

const CustomPage = ({ title, description, color }) => (
  <View style={[styles.page, { backgroundColor: color }]}>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const App = () => (
  <Onboarding>
    <CustomPage
      title="Welcome"
      description="Start your journey with us"
      color="#FF6B6B"
    />
    <CustomPage
      title="Features"
      description="Discover what we offer"
      color="#4ECDC4"
    />
    <CustomPage
      title="Get Started"
      description="Ready to begin?"
      color="#45B7D1"
    />
  </Onboarding>
);

const styles = StyleSheet.create({
  page: {
    width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
```

## Animated Progress Example

This example shows how to create an animated progress bar using the useOnboarding hook.

```jsx
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Onboarding, useOnboarding } from 'react-native-app-onboard';

const AnimatedProgress = () => {
  const { progress } = useOnboarding();
  const width = Animated.multiply(progress, 100);

  return (
    <View style={styles.progressContainer}>
      <Animated.View 
        style={[
          styles.progressBar,
          { width: width.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%']
            })
          }
        ]} 
      />
    </View>
  );
};

const App = () => (
  <Onboarding
    pages={[/* your pages */]}
    customFooter={({ nextPage }) => (
      <View>
        <AnimatedProgress />
        <Button title="Next" onPress={nextPage} />
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  progressContainer: {
    height: 4,
    backgroundColor: '#eee',
    width: '100%',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#000',
  },
});
```

## Live Examples

Try these examples on Expo:

1. [Basic Example](https://snack.expo.dev/@lekgwaraj/react-native-app-onboard?platform=ios)
2. [Custom Footer](https://snack.expo.dev/@lekgwaraj/react-native-app-onboard-custom-pagination?platform=ios)
3. [Custom Pages](https://snack.expo.dev/@lekgwaraj/react-native-app-onboard-custom?platform=ios)
