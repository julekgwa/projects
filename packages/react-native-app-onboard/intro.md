---
slug: /
title: Introduction
---

# React Native App Onboard

[![npm](https://img.shields.io/npm/v/react-native-app-onboard.svg)](https://www.npmjs.com/package/react-native-app-onboard) 
[![GitHub stars](https://img.shields.io/github/stars/julekgwa/react-native-app-onboard.svg?style=social&label=Stars)](https://github.com/julekgwa/react-native-app-onboard) 
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-native-app-onboard/src/index.tsx?compression=gzip)](https://unpkg.com/react-native-app-onboard/dist/index.js) 
![npm](https://img.shields.io/npm/dw/react-native-app-onboard)

A customizable, easy-to-use, and efficient library for creating compelling onboarding experiences for your React Native applications. It provides smooth, fluid transitions and animations, with a focus on simplicity and usability.

## Features

- 🎨 **Fully Customizable**: Style every aspect of your onboarding screens
- 🔄 **Smooth Animations**: Fluid transitions between screens
- 📱 **React Native First**: Built specifically for React Native
- ⚛️ **Custom Components**: Support for custom page components
- 🎯 **Flexible Positioning**: Configurable layout and component positioning
- 🎮 **Hook Support**: Built-in hook for advanced control

## Quick Start

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

export default App;
```

## Live Examples

Try it out on Expo:
- [Basic Example](https://snack.expo.dev/@lekgwaraj/react-native-app-onboard?platform=ios)
- [Custom Footer Example](https://snack.expo.dev/@lekgwaraj/react-native-app-onboard-custom-pagination?platform=ios)
- [Custom Pages Example](https://snack.expo.dev/@lekgwaraj/react-native-app-onboard-custom?platform=ios)
