---
title: Installation
---

# Installation

## Using npm

```bash
npm install react-native-app-onboard
```

## Using yarn

```bash
yarn add react-native-app-onboard
```

## Basic Setup

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
          title: 'Welcome',
          subtitle: 'Get started with our app',
        },
        // Add more pages as needed
      ]}
      onDone={() => {
        // Handle onboarding completion
      }}
    />
  );
};
```

## Next Steps

After installation, explore:
- [Basic Usage](basic-usage) to learn about core features
- [API Reference](api-reference) for customization options
- [Styling](styling) to match your app's design
