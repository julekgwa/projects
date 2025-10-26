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
      label: 'Features',
      items: [
        'features/form-integration',
        'features/custom-rendering',
        'features/autocomplete',
        'features/validation',
      ],
    },
  ],
};

export default sidebars;
