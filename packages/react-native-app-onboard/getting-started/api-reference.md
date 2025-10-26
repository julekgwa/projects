---
title: API Reference
---

# API Reference

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode[]` | | Optional child components |
| `nextLabel` | `string \| React.ReactNode` | | Custom "Next" button label |
| `skipLabel` | `string \| React.ReactNode` | | Custom "Skip" button label |
| `doneLabel` | `string \| React.ReactNode` | | Custom "Done" button label |
| `showSkip` | `boolean` | `false` | Show/hide skip button |
| `showNext` | `boolean` | `true` | Show/hide next button |
| `showDone` | `boolean` | `true` | Show/hide done button |
| `scrollAnimationDuration` | `number` | `500` | Animation duration |
| `useNativeDriver` | `boolean` | | Use native driver |
| `onDone` | `() => void` | | Done callback |
| `onSkip` | `() => void` | | Skip callback |
| `showPagination` | `boolean` | `true` | Show/hide pagination |
| `scrollEnabled` | `boolean` | `true` | Enable scrolling |
| `paginationPosition` | `'top' \| 'bottom'` | | Pagination position |
| `width` | `number` | | Custom width |
| `color` | `string` | | Pagination color |
| `pages` | `Page[]` | | Array of pages |
| `swap` | `boolean` | `false` | Swap layout |

## Page Interface

```typescript
interface Page {
  title: string;
  subtitle: string;
  image: React.ReactNode;
  backgroundColor: string;
  color?: string;
  width?: number;
  containerStyle?: StyleProp<ViewStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
}
```

## Style Props

| Prop | Type | Description |
|------|------|-------------|
| `paginationContainerStyle` | `StyleProp<ViewStyle>` | Pagination container style |
| `buttonRightContainerStyle` | `StyleProp<ViewStyle>` | Right button container |
| `buttonLeftContainerStyle` | `StyleProp<ViewStyle>` | Left button container |
| `dotsContainerStyle` | `StyleProp<ViewStyle>` | Dots container style |
| `doneLabelStyle` | `StyleProp<TextStyle>` | Done button text style |
| `skipLabelStyle` | `StyleProp<TextStyle>` | Skip button text style |
| `nextLabelStyle` | `StyleProp<TextStyle>` | Next button text style |
| `containerStyle` | `StyleProp<ViewStyle>` | Main container style |

## Hook API

### useOnboarding

```typescript
interface OnboardingHook {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  scrollEnabled: boolean;
  enableScroll: (enabled: boolean) => void;
  flatListRef: React.RefObject<FlatList>;
  numberOfScreens: number;
  nextPage: () => void;
  scrollTo: (page: number) => void;
  progress: number;
  isDone: boolean;
}
```
