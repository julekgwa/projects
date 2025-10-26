---
title: Form Integration
---

# Form Integration

## Formik Integration

### Basic Integration

```tsx
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TagInput } from 'react-native-input-tag';

const validationSchema = Yup.object().shape({
  skills: Yup.array()
    .min(1, 'At least one skill is required')
    .max(5, 'Maximum 5 skills allowed')
    .of(Yup.string().min(2, 'Skills must be at least 2 characters')),
});

const FormikExample = () => (
  <Formik
    initialValues={{ skills: { tag: '', tagsArray: [] } }}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values.skills.tagsArray)}
  >
    {({ values, setFieldValue, errors, touched }) => (
      <View>
        <TagInput
          label="Skills"
          tags={values.skills}
          updateState={(newTags) => setFieldValue('skills', newTags)}
          containerStyle={[
            styles.container,
            errors.skills && touched.skills && styles.errorContainer
          ]}
        />
        {errors.skills && touched.skills && (
          <Text style={styles.errorText}>{errors.skills}</Text>
        )}
      </View>
    )}
  </Formik>
);
```

### With Field Array

```tsx
import { Formik, FieldArray } from 'formik';

const FieldArrayExample = () => (
  <Formik
    initialValues={{
      technologies: { tag: '', tagsArray: [] },
      frameworks: { tag: '', tagsArray: [] }
    }}
  >
    {({ values, setFieldValue }) => (
      <FieldArray
        name="technologies"
        render={arrayHelpers => (
          <>
            <TagInput
              label="Technologies"
              tags={values.technologies}
              updateState={(newTags) => {
                setFieldValue('technologies', newTags);
                arrayHelpers.replace(newTags.tagsArray);
              }}
            />
            <Button
              title="Clear All"
              onPress={() => arrayHelpers.remove(0)}
            />
          </>
        )}
      />
    )}
  </Formik>
);
```

## React Hook Form Integration

### Basic Integration

```tsx
import { useForm, Controller } from 'react-hook-form';

const HookFormExample = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      technologies: [],
    },
  });

  return (
    <Controller
      control={control}
      name="technologies"
      rules={{ required: true, minLength: 1 }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          <TagInput
            tags={{ tag: '', tagsArray: value }}
            updateState={(newTags) => onChange(newTags.tagsArray)}
            containerStyle={[
              styles.container,
              error && styles.errorContainer
            ]}
          />
          {error && (
            <Text style={styles.errorText}>
              Technologies are required
            </Text>
          )}
        </View>
      )}
    />
  );
};
```

### With Validation Schema

```tsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  skills: Yup.array()
    .min(2, 'At least 2 skills are required')
    .max(10, 'Maximum 10 skills allowed')
    .of(
      Yup.string()
        .min(2, 'Skills must be at least 2 characters')
        .matches(/^[a-zA-Z0-9-]+$/, 'Only letters, numbers, and hyphens allowed')
    ),
});

const ValidatedFormExample = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      skills: [],
    },
  });

  return (
    <Controller
      control={control}
      name="skills"
      render={({ field: { onChange, value } }) => (
        <View>
          <TagInput
            tags={{ tag: '', tagsArray: value }}
            updateState={(newTags) => onChange(newTags.tagsArray)}
            suggestions={['React', 'TypeScript', 'Node.js']}
            containerStyle={[
              styles.container,
              errors.skills && styles.errorContainer
            ]}
          />
          {errors.skills && (
            <Text style={styles.errorText}>
              {errors.skills.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};
```

## Custom Form Solution

```tsx
interface FormState {
  skills: string[];
  level: string;
  experience: number;
}

const CustomFormExample = () => {
  const [form, setForm] = useState<FormState>({
    skills: [],
    level: 'intermediate',
    experience: 0,
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validateForm = () => {
    const newErrors: Partial<FormState> = {};

    if (form.skills.length === 0) {
      newErrors.skills = 'At least one skill is required';
    }

    if (form.experience < 0) {
      newErrors.experience = 'Experience cannot be negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Process form data
      console.log('Form data:', form);
    }
  };

  return (
    <View>
      <TagInput
        tags={{ tag: '', tagsArray: form.skills }}
        updateState={(newTags) => {
          setForm(prev => ({
            ...prev,
            skills: newTags.tagsArray
          }));
          // Clear error when user makes changes
          if (errors.skills) {
            setErrors(prev => ({
              ...prev,
              skills: undefined
            }));
          }
        }}
        containerStyle={[
          styles.container,
          errors.skills && styles.errorContainer
        ]}
      />
      {errors.skills && (
        <Text style={styles.errorText}>{errors.skills}</Text>
      )}
      
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
};

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
