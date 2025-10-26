---
title: API Reference
---

# API Reference

## Onboarding Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode[]` | | Optional. An array of child components to render within the onboarding component. |
| `nextLabel` | `string \| React.ReactNode` | | Optional. Custom label for the "Next" button. |
| `skipLabel` | `string \| React.ReactNode` | | Optional. Custom label for the "Skip" button. |
| `doneLabel` | `string \| React.ReactNode` | | Optional. Custom label for the "Done" button. |
| `showSkip` | `boolean` | `false` | Optional. Show/hide the "Skip" button. |
| `showNext` | `boolean` | `true` | Optional. Show/hide the "Next" button. |
| `showDone` | `boolean` | `true` | Optional. Show/hide the "Done" button. |
| `scrollAnimationDuration` | `number` | `500` | Optional. Duration of scroll animation in milliseconds. |
| `useNativeDriver` | `boolean` | | Optional. Use native driver for animations. |
| `onDone` | `() => void` | | Optional. Callback when "Done" is pressed. |
| `onSkip` | `() => void` | | Optional. Callback when "Skip" is pressed. |
| `showPagination` | `boolean` | `true` | Optional. Show/hide pagination indicators. |
| `scrollEnabled` | `boolean` | `true` | Optional. Enable/disable screen scrolling. |
| `customFooter` | `(props: { nextPage: () => void }) => React.ReactNode` | | Optional. Custom footer component. |
| `paginationPosition` | `'top' \| 'bottom'` | | Optional. Position of pagination indicators. |
| `width` | `number` | | Optional. Custom width for the component. |
| `color` | `string` | | Optional. Color for pagination dots. |
| `pages` | `Page[]` | | Optional. Array of page objects. |
| `skipButtonPosition` | `'top-left' \| 'top-right'` | | Optional. Position of skip button. |
| `swap` | `boolean` | `false` | Optional. Swap title/subtitle and image positions. |

### Style Props

| Prop | Type | Description |
|------|------|-------------|
| `paginationContainerStyle` | `StyleProp<ViewStyle>` | Style for pagination container |
| `buttonRightContainerStyle` | `StyleProp<ViewStyle>` | Style for right button container |
| `buttonLeftContainerStyle` | `StyleProp<ViewStyle>` | Style for left button container |
| `dotsContainerStyle` | `StyleProp<ViewStyle>` | Style for dots container |
| `doneLabelStyle` | `StyleProp<TextStyle>` | Style for "Done" label |
| `skipLabelStyle` | `StyleProp<TextStyle>` | Style for "Skip" label |
| `nextLabelStyle` | `StyleProp<TextStyle>` | Style for "Next" label |
| `containerStyle` | `StyleProp<ViewStyle>` | Style for main container |
| `imageContainerStyle` | `StyleProp<ViewStyle>` | Style for image container |
| `titleContainerStyle` | `StyleProp<ViewStyle>` | Style for title container |
| `titleStyle` | `StyleProp<TextStyle>` | Style for title text |
| `subtitleStyle` | `StyleProp<TextStyle>` | Style for subtitle text |
| `skipButtonContainerStyle` | `StyleProp<ViewStyle>` | Style for skip button container |
| `nextButtonContainerStyle` | `StyleProp<ViewStyle>` | Style for next button container |
| `doneButtonContainerStyle` | `StyleProp<ViewStyle>` | Style for done button container |

## Page Type

Each page in the `pages` array should follow this structure:

```typescript
interface Page {
  // Required properties
  title: string;
  subtitle: string;
  image: React.ReactNode;
  backgroundColor: string;
  
  // Optional properties
  color?: string;
  width?: number;
  containerStyle?: StyleProp<ViewStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
}
```

### Page Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | `string` | Yes | Main title text |
| `subtitle` | `string` | Yes | Subtitle text |
| `image` | `React.ReactNode` | Yes | Image component |
| `backgroundColor` | `string` | Yes | Background color |
| `color` | `string` | No | Text color |
| `width` | `number` | No | Page width |
| `containerStyle` | `StyleProp<ViewStyle>` | No | Page container style |
| `imageContainerStyle` | `StyleProp<ViewStyle>` | No | Image container style |
| `titleContainerStyle` | `StyleProp<ViewStyle>` | No | Title container style |
| `titleStyle` | `StyleProp<TextStyle>` | No | Title text style |
| `subtitleStyle` | `StyleProp<TextStyle>` | No | Subtitle text style |
