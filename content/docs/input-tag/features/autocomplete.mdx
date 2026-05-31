---
title: Autocomplete
---

# Autocomplete

## Basic Autocomplete

```tsx
<TagInput
  tags={tags}
  updateState={updateState}
  suggestions={[
    'React',
    'React Native',
    'TypeScript',
    'JavaScript',
    'Node.js',
  ]}
  maxSuggestions={5}
/>
```

## Advanced Configuration

```tsx
<TagInput
  tags={tags}
  updateState={updateState}
  suggestions={suggestions}
  maxSuggestions={4}
  highlightMatchedText={true}
  caseSensitive={false}
  showAutocompleteBorder={true}
  autocompleteContainerStyle={styles.autocompleteContainer}
  autocompleteSuggestionItemStyle={styles.suggestionItem}
  autocompleteSuggestionTextStyle={styles.suggestionText}
/>
```

## Custom Suggestion Rendering

```tsx
const CustomSuggestion = ({ 
  suggestion, 
  isHighlighted, 
  onPress 
}) => (
  <TouchableOpacity
    style={[
      styles.suggestion,
      isHighlighted && styles.highlighted
    ]}
    onPress={onPress}
  >
    <Text style={styles.emoji}>🏷️</Text>
    <Text style={styles.suggestionText}>{suggestion}</Text>
  </TouchableOpacity>
);

<TagInput
  tags={tags}
  updateState={updateState}
  suggestions={suggestions}
  renderSuggestion={(suggestion, index, isHighlighted, onPress) => (
    <CustomSuggestion
      suggestion={suggestion}
      isHighlighted={isHighlighted}
      onPress={onPress}
    />
  )}
/>
```

## Dynamic Suggestions

```tsx
const [suggestions, setSuggestions] = useState([]);

const fetchSuggestions = async (query) => {
  try {
    const response = await fetch(
      `https://api.example.com/suggestions?q=${query}`
    );
    const data = await response.json();
    setSuggestions(data);
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    setSuggestions([]);
  }
};

<TagInput
  tags={tags}
  updateState={updateState}
  suggestions={suggestions}
  onQueryChange={fetchSuggestions}
  debounceMs={300}
/>
```

## Styling Examples

```tsx
const styles = StyleSheet.create({
  autocompleteContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    maxHeight: 200,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  suggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  highlighted: {
    backgroundColor: '#f5f5f5',
  },
  emoji: {
    fontSize: 16,
    marginRight: 8,
  },
  suggestionText: {
    fontSize: 14,
    color: '#333',
  },
});
