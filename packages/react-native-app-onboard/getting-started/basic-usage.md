---
title: Basic Usage
---

# Basic Usage

## Simple Example

```jsx
import React from 'react';
import { Image } from 'react-native';
import { Onboarding } from 'react-native-app-onboard';

const App = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#140E17',
          image: <Image source={require('./images/image1.png')} />,
          title: 'Find petcare around your location',
          subtitle: 'Just turn on your location and you will find the nearest pet care you wish.',
        },
        {
          backgroundColor: '#140E17',
          image: <Image source={require('./images/image2.png')} />,
          title: 'Let us give the best treatment',
          subtitle: 'Get the best treatment for your animal with us',
        },
        {
          backgroundColor: '#140E17',
          image: <Image source={require('./images/image3.png')} />,
          title: 'Book appointment with us!',
          subtitle: 'What do you think? book our veterinarians now',
        },
      ]}
      onDone={() => console.log('Onboarding completed')}
    />
  );
};
```

## Core Features

### Navigation Controls

```jsx
<Onboarding
  showSkip={true}
  showNext={true}
  showDone={true}
  onSkip={() => console.log('Skipped')}
  onDone={() => console.log('Done')}
/>
```

### Pagination

```jsx
<Onboarding
  showPagination={true}
  paginationPosition="bottom"
  color="#007AFF"
/>
```

### Scroll Control

```jsx
<Onboarding
  scrollEnabled={true}
  scrollAnimationDuration={500}
  useNativeDriver={true}
/>
```

## Using with Navigation

```jsx
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
      onDone={() => navigation.replace('Home')}
      onSkip={() => navigation.replace('Home')}
    />
  );
};
```

## Try it Live

See these examples in action:
- [Basic Example](https://snack.expo.dev/@lekgwaraj/react-native-app-onboard?platform=ios)
- [Custom Implementation](https://snack.expo.dev/@lekgwaraj/react-native-app-onboard-custom?platform=ios)
