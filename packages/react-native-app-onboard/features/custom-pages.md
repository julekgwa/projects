---
title: Custom Pages
---

# Custom Pages

The Onboarding component supports fully custom pages through its children props.

## Basic Custom Page

```jsx
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
```

## Animated Custom Page

```jsx
const AnimatedPage = ({ title, image, onPress }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={image}
        style={[
          styles.image,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      />
      <Animated.Text
        style={[
          styles.title,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        {title}
      </Animated.Text>
    </View>
  );
};
```

## Interactive Custom Page

```jsx
const InteractivePage = ({ onComplete }) => {
  const [name, setName] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onComplete(name)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
```

## Layout Examples

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
```

## Live Example

Try this example on [Expo Snack](https://snack.expo.dev/@lekgwaraj/react-native-app-onboard-custom?platform=ios)
