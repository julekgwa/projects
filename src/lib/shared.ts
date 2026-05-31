export const appName = 'React Native Libraries';
export const siteUrl = 'https://react-native-libraries.vercel.app';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';

export const componentLinks = [
  {
    label: 'Places Autocomplete',
    to: '/places-autocomplete',
  },
  {
    label: 'App Onboard',
    to: '/app-onboard',
  },
  {
    label: 'Payment Card Icons',
    to: '/payment-card-icons',
  },
  {
    label: 'Input Tag',
    to: '/input-tag',
  },
] as const;

export const packages = [
  {
    id: 'places-autocomplete',
    name: 'RN Places Autocomplete',
    description:
      'Provider-agnostic autocomplete for addresses and places. Supports OpenStreetMap, Google Places, Mapbox, and more.',
    tags: ['Multiple providers', 'Recent searches', 'Perf optimized', 'Customizable'],
    to: '/places-autocomplete',
  },
  {
    id: 'app-onboard',
    name: 'RN App Onboard',
    description:
      'A library for creating compelling onboarding experiences in React Native applications.',
    tags: ['Multiple styles', 'Smooth animations', 'Cross-platform', 'TypeScript ready'],
    to: '/app-onboard',
  },
  {
    id: 'payment-card-icons',
    name: 'RN Payment Card Icons',
    description:
      'High-quality payment card brand icons as React Native SVG components, supporting multiple styles and variants.',
    tags: ['17+ providers', 'Multiple styles', 'Zero dependencies', 'Accessible'],
    to: '/payment-card-icons',
  },
  {
    id: 'input-tag',
    name: 'RN Input Tag',
    description:
      'A versatile component for entering and managing tags within React Native applications.',
    tags: ['Tag management', 'Autocomplete', 'Custom rendering', 'Form integration'],
    to: '/input-tag',
  },
] as const;

export const packageGitConfig: Record<string, { owner: string; repo: string; branch: string }> = {
  'places-autocomplete': { owner: 'julekgwa', repo: 'react-native-places-autocomplete', branch: 'main' },
  'app-onboard': { owner: 'julekgwa', repo: 'react-native-app-onboard', branch: 'main' },
  'payment-card-icons': { owner: 'julekgwa', repo: 'react-native-payment-card-icons', branch: 'main' },
  'input-tag': { owner: 'julekgwa', repo: 'react-native-input-tag', branch: 'main' },
};
