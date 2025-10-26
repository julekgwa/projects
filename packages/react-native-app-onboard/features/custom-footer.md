---
title: Custom Footer
---

# Custom Footer

The Onboarding component allows you to create custom footers for enhanced customization.

## Basic Custom Footer

```jsx
const CustomFooter = ({ nextPage, currentPage, numberOfScreens }) => (
  <View style={styles.footer}>
    <View style={styles.pagination}>
      {Array.from({ length: numberOfScreens }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentPage === index && styles.activeDot
          ]}
        />
      ))}
    </View>
    <TouchableOpacity
      style={styles.button}
      onPress={nextPage}
    >
      <Text style={styles.buttonText}>
        {currentPage === numberOfScreens - 1 ? 'Done' : 'Next'}
      </Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <Onboarding
    pages={[/* your pages */]}
    customFooter={CustomFooter}
  />
);
```

## Animated Footer

```jsx
const AnimatedFooter = ({ nextPage, currentPage, numberOfScreens }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: currentPage / (numberOfScreens - 1),
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentPage]);

  return (
    <View style={styles.footer}>
      <Animated.View 
        style={[
          styles.progressBar,
          {
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
      <TouchableOpacity onPress={nextPage}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
```

## Footer with Skip

```jsx
const FooterWithSkip = ({ nextPage, currentPage, numberOfScreens }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => navigation.replace('Home')}
      >
        <Text>Skip</Text>
      </TouchableOpacity>
      
      <View style={styles.dots}>
        {Array.from({ length: numberOfScreens }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === currentPage && styles.activeDot
            ]}
          />
        ))}
      </View>
      
      <TouchableOpacity onPress={nextPage}>
        <Text>
          {currentPage === numberOfScreens - 1 ? 'Start' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
```

## Styling Examples

```jsx
const styles = StyleSheet.create({
  footer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 16,
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
  progressBar: {
    height: 3,
    backgroundColor: '#007AFF',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
```

## Live Example

Try this example on [Expo Snack](https://snack.expo.dev/@lekgwaraj/react-native-app-onboard-custom-pagination?platform=ios)
