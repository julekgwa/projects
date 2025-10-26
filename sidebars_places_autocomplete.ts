import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/basic-usage',
        'getting-started/api-reference',
        'getting-started/styling',
      ],
    },
    {
      type: 'category',
      label: 'Providers',
      items: [
        'providers/openstreetmap',
        'providers/google',
        'providers/mapbox',
        'providers/geoapify',
        'providers/locationiq',
        'providers/here',
        'providers/tomtom',
        'providers/opencage',
        'providers/custom-provider',
      ],
    },
  ],
};

export default sidebars;
