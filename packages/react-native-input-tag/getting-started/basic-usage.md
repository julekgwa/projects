---
title: Basic Usage
---

# Basic Usage

## Simple Example

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { TagInput, type ITags } from 'react-native-input-tag';

export default function App() {
  const [tags, updateState] = useState<ITags>({ 
    tag: '', 
    tagsArray: [] 
  });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TagInput
        label="Enter Tags"
        tags={tags}
        updateState={updateState}
        suggestions={['React', 'Native', 'JavaScript', 'TypeScript']}
      />
    </View>
  );
}
```

## With Custom Keys

```tsx
<TagInput
  tags={tags}
  updateState={updateState}
  keysForTag="," // Use comma to separate tags
  suggestions={['React', 'Native', 'JavaScript']}
/>
```

## With Autocomplete

```tsx
<TagInput
  tags={tags}
  updateState={updateState}
  suggestions={[
    'React Native',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
  ]}
  maxSuggestions={4}
  highlightMatchedText={true}
  caseSensitive={false}
/>
```

## With Custom Styling

```tsx
<TagInput
  tags={tags}
  updateState={updateState}
  containerStyle={{
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  }}
  inputStyle={{
    fontSize: 16,
    color: '#333',
  }}
  tagStyle={{
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  }}
  tagTextStyle={{
    color: '#fff',
    fontSize: 14,
  }}
/>
```

## With Validation

```tsx
<TagInput
  tags={tags}
  updateState={(newTags) => {
    // Custom validation
    if (newTags.tagsArray.length <= 5) {
      updateState(newTags);
    }
  }}
  onValidation={(success) => {
    console.log('Validation status:', success);
  }}
/>
```

## Try it Live

See these examples in action on our [Expo Snack](https://snack.expo.dev/@lekgwaraj/react-native-input-tag).
