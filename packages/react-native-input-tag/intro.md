---
slug: /
title: Introduction
---

# React Native Input Tag

[![npm version](https://badge.fury.io/js/react-native-input-tag.svg?icon=si%3Anpm)](https://badge.fury.io/js/react-native-input-tag) 
[![npm downloads](https://img.shields.io/npm/dm/react-native-input-tag.svg)](https://www.npmjs.com/package/react-native-input-tag) 
[![GitHub stars](https://img.shields.io/github/stars/julekgwa/react-native-input-tag.svg?style=social&label=Star)](https://github.com/julekgwa/react-native-input-tag)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/react-native-input-tag)](https://bundlephobia.com/package/react-native-input-tag)

A versatile and user-friendly component designed to simplify the process of entering and managing tags within a React Native application.

## Features

### 🎯 Core Features
- 📝 **Easy tag input and management**
- 🔍 **Fully customizable autocomplete**
- 🎨 **Complete custom rendering**
- ⌨️ **Customizable key separators**
- ♿ **Full accessibility support**

### 🎨 Customization & Styling
- 🎯 **Extensive styling options**
- 💡 **Text highlighting**
- 📊 **Configurable suggestion limits**
- 🔤 **Case-sensitive/insensitive filtering**

### 🚀 Developer Experience
- 📱 **Cross-platform**: iOS, Android, and Web
- 🚀 **Complete TypeScript support**
- 📖 **Comprehensive documentation**
- 🧪 **Well tested**

## Quick Start

```bash
bun add react-native-input-tag
```

```tsx
import React, { useState } from 'react';
import { TagInput } from 'react-native-input-tag';

const App = () => {
  const [tags, updateState] = useState({
    tag: '',
    tagsArray: []
  });

  return (
    <TagInput
      tags={tags}
      updateState={updateState}
      suggestions={['React', 'TypeScript', 'Mobile']}
    />
  );
};
```

## Live Examples

Try our interactive demos:

- [Basic Usage](https://snack.expo.dev/@lekgwaraj/react-native-input-tag)
- [Custom Rendering](https://snack.expo.dev/@lekgwaraj/react-native-input-tag-custom)
- [Form Integration](https://snack.expo.dev/@lekgwaraj/react-native-input-tag-form)
