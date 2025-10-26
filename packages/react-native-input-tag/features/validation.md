---
title: Validation
---

# Validation

## Basic Validation

```tsx
const [errors, setErrors] = useState([]);

const validateTags = (tags) => {
  const newErrors = [];
  
  if (tags.tagsArray.length === 0) {
    newErrors.push('At least one tag is required');
  }
  
  if (tags.tagsArray.some(tag => tag.length < 2)) {
    newErrors.push('Tags must be at least 2 characters long');
  }
  
  setErrors(newErrors);
  return newErrors.length === 0;
};

<TagInput
  tags={tags}
  updateState={(newTags) => {
    if (validateTags(newTags)) {
      updateState(newTags);
    }
  }}
  containerStyle={[
    styles.container,
    errors.length > 0 && styles.errorContainer
  ]}
/>

{errors.map((error, index) => (
  <Text key={index} style={styles.errorText}>
    {error}
  </Text>
))}
```

## Custom Rules

```tsx
const validateTag = (tag) => {
  // Only allow alphanumeric characters and hyphens
  const isValidFormat = /^[a-zA-Z0-9-]+$/.test(tag);
  
  // Length between 2 and 20 characters
  const isValidLength = tag.length >= 2 && tag.length <= 20;
  
  // No duplicate tags
  const isDuplicate = tags.tagsArray.includes(tag);
  
  return {
    isValid: isValidFormat && isValidLength && !isDuplicate,
    error: !isValidFormat 
      ? 'Only letters, numbers, and hyphens allowed'
      : !isValidLength
      ? 'Tag must be between 2 and 20 characters'
      : isDuplicate
      ? 'Tag already exists'
      : null
  };
};

<TagInput
  tags={tags}
  updateState={(newTags) => {
    const { tag } = newTags;
    if (tag) {
      const { isValid, error } = validateTag(tag);
      if (!isValid) {
        setError(error);
        return;
      }
      setError(null);
    }
    updateState(newTags);
  }}
/>
```

## Async Validation

```tsx
const checkTagAvailability = async (tag) => {
  try {
    const response = await fetch(
      `https://api.example.com/tags/check?tag=${tag}`
    );
    const data = await response.json();
    return data.isAvailable;
  } catch (error) {
    console.error('Error checking tag:', error);
    return false;
  }
};

const [isChecking, setIsChecking] = useState(false);

<TagInput
  tags={tags}
  updateState={async (newTags) => {
    const { tag } = newTags;
    if (tag) {
      setIsChecking(true);
      const isAvailable = await checkTagAvailability(tag);
      setIsChecking(false);
      
      if (!isAvailable) {
        setError('Tag is already taken');
        return;
      }
    }
    setError(null);
    updateState(newTags);
  }}
  disabled={isChecking}
  rightElement={
    isChecking ? (
      <ActivityIndicator size="small" color="#999" />
    ) : null
  }
/>
```

## Form Integration

```tsx
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  tags: Yup.array()
    .min(1, 'At least one tag is required')
    .max(5, 'Maximum 5 tags allowed')
    .of(
      Yup.string()
        .min(2, 'Tags must be at least 2 characters')
        .matches(
          /^[a-zA-Z0-9-]+$/,
          'Only letters, numbers, and hyphens allowed'
        )
    ),
});

<Formik
  initialValues={{ tags: [] }}
  validationSchema={validationSchema}
  onSubmit={values => console.log(values)}
>
  {({ values, errors, touched, setFieldValue }) => (
    <TagInput
      tags={{ tag: '', tagsArray: values.tags }}
      updateState={(newTags) => {
        setFieldValue('tags', newTags.tagsArray);
      }}
      containerStyle={[
        styles.container,
        errors.tags && touched.tags && styles.errorContainer
      ]}
    />
  )}
</Formik>
```

## Styling

```tsx
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  errorContainer: {
    borderColor: '#dc3545',
    backgroundColor: '#fff8f8',
  },
  errorText: {
    color: '#dc3545',
    fontSize: 12,
    marginTop: 5,
  },
});
